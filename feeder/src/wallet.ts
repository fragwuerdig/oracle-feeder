import * as crypto from 'crypto'
import * as secp256k1 from 'secp256k1'
import { StdTx, Signature } from './msg'

const HD_PATH = [44, 330, 0, 0, 0]

// Transactions often have amino decoded objects in them {type, value}.
// We need to strip this clutter as we need to sign only the values.
function prepareSignBytes(jsonTx) {
  if (Array.isArray(jsonTx)) {
    return jsonTx.map(prepareSignBytes)
  }

  // string or number
  if (typeof jsonTx !== `object`) {
    return jsonTx
  }

  const sorted = {}
  Object.keys(jsonTx)
    .sort()
    .forEach((key) => {
      if (jsonTx[key] === undefined || jsonTx[key] === null) return

      sorted[key] = prepareSignBytes(jsonTx[key])
    })
  return sorted
}

/*
The SDK expects a certain message format to serialize and then sign.

type StdSignMsg struct {
  ChainID       string      `json:"chain_id"`
  AccountNumber uint64      `json:"account_number"`
  Sequence      uint64      `json:"sequence"`
  Fee           auth.StdFee `json:"fee"`
  Msgs          []sdk.Msg   `json:"msgs"`
  Memo          string      `json:"memo"`
}
*/
function createSignMessage(jsonTx, { sequence, account_number, chain_id }) {
  // sign bytes need amount to be an array
  const fee = {
    amount: jsonTx.fee.amount || [],
    gas: jsonTx.fee.gas,
  }

  return JSON.stringify(
    prepareSignBytes({
      fee,
      memo: jsonTx.memo,
      msgs: jsonTx.msg, // weird msg vs. msgs
      sequence,
      account_number,
      chain_id,
    })
  )
}

// produces the signature for a message (returns Buffer)
function signWithPrivateKey(signMessage, privateKey) {
  const signHash = crypto.createHash('sha256').update(signMessage).digest()
  const { signature } = secp256k1.sign(signHash, Buffer.from(privateKey, `hex`))
  return signature
}

function createSignature(signature, sequence, accountNumber, publicKey): Signature {
  return {
    signature: signature.toString(`base64`),
    account_number: accountNumber,
    sequence,
    pub_key: {
      type: `tendermint/PubKeySecp256k1`, // TODO: allow other keytypes
      value: publicKey.toString(`base64`),
    },
  }
}

// main function to get a signature from ledger or local keystore
export async function sign(
  ledger: any,
  voter: {
    publicKey: string
    privateKey: string
  },
  tx: StdTx,
  baseRequest: {
    chain_id: string
    sequence: string
    account_number: string
  }
): Promise<Signature> {
  // Use ledger for signing
  if (ledger) {
    const signMessage = createSignMessage(tx, baseRequest)
    const signatureByteArray = await ledger.sign(HD_PATH, signMessage)

    if (signatureByteArray.return_code !== 36864) {
      console.error(`Signing error : ${signatureByteArray.error_message}`)
      throw new Error('signatureByteArray.error_message')
    }

    const signature = signatureByteArray[`signature`]
    const signatureBuffer = secp256k1.signatureImport(signature)

    return createSignature(
      signatureBuffer,
      baseRequest.sequence,
      baseRequest.account_number,
      voter.publicKey
    )
  }

  // Use private key for signing
  const { sequence, account_number } = baseRequest
  const signMessage = createSignMessage(tx, baseRequest)
  const signatureBuffer = signWithPrivateKey(signMessage, voter.privateKey)
  const pubKeyBuffer = Buffer.from(voter.publicKey, `hex`)
  return createSignature(signatureBuffer, sequence, account_number, pubKeyBuffer)
}
