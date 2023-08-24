// Updated 30-April-23

const fiatSymbols = [
  'SDR/USD',
  'KRW/USD',
  'MNT/USD',
  'EUR/USD',
  'CNY/USD',
  'JPY/USD',
  'GBP/USD',
  'INR/USD',
  'CAD/USD',
  'CHF/USD',
  'HKD/USD',
  'AUD/USD',
  'SGD/USD',
  'THB/USD',
  'SEK/USD',
  'DKK/USD',
  'IDR/USD',
  'PHP/USD',
  'MYR/USD',
  'NOK/USD',
  'TWD/USD',
]

module.exports = {
  port: 8532,
  metricsPort: 8533,
  sentry: '', // sentry dsn (https://sentry.io/ - error reporting service)
  reporter: true,
  slack: {
    // for incident alarm (e.g. exchange shutdown)
    channel: '#bot-test',
    url: '',
  },
  cryptoProvider: {
    adjustTvwap: { symbols: [] },
    fallbackPriority: [
      'binance',
      // 'osmosis', // DO NOT USE THIS. BROKEN PROVIDER
      // 'kraken',
      // 'bitfinex',
      // 'huobi',
      // 'kucoin',
      'coinGecko', // required for USDT/USDC/BUSD to USD quotes.
    ],
    coinGecko: {
      interval: 6 * 1000,
      symbols: [
        'BTC/USD',
        'ETH/USD',
        'BNB/USD',
        'USDT/USD',
        'USDC/USD',
        'BUSD/USD',
        'DAI/USD',
        'XRP/USD',
        'DOGE/USD',
        'ADA/USD',
        'MATIC/USD',
        'DOT/USD',
        'LTC/USD',
        'STETH/USD',
        'SHIB/USD',
        'SOL/USD',
        'TRX/USD',
        'UNI/USD',
        'AVAX/USD',
        'LINK/USD',
        'ETC/USD',
        'TON/USD',
        'XMR/USD',
        'XLM/USD',
        'ALGO/USD',
        'QNT/USD',
        'FIL/USD',
        'NEAR/USD',
        'VET/USD',
        'FLOW/USD',
        'APE/USD',
        'ICP/USD',
        'EGLD/USD',
        'CHZ/USD',
        'EOS/USD',
        'XCN/USD',
        'XTZ/USD',
        'LDO/USD',
        'SAND/USD',
        'THETA/USD',
        'AAVE/USD',
        'AXS/USD',
        'MANA/USD',
        'MKR/USD',
        'CAKE/USD',
        'APT/USD',
        'XEC/USD',
        'ZEC/USD',
        'KLAY/USD',
        'GT/USD',
        'NEO/USD',
        'AR/USD',
        'DASH/USD',
        'FTM/USD',
        'GRT/USD',
        'SNX/USD',
        'MINA/USD',
        'CRV/USD',
        'NEXO/USD',
        'XRD/USD',
        'GMX/USD',
        'BAT/USD',
        'ZIL/USD',
        'ENS/USD',
        '1INCH/USD',
        'HNT/USD',
        'XDC/USD',
        'FXS/USD',
        'STX/USD',
        'CVX/USD',
        'ENJ/USD',
        'IMX/USD',
        'LRC/USD',
        'DCR/USD',
        'DFI/USD',
        'TFUEL/USD',
        'AMP/USD',
        'COMP/USD',
        'DYDX/USD',
        'ATOM/USD',
        'LUNA/USD',
        'CRO/USD',
        'OSMO/USD',
        'RUNE/USD',
        'EVMOS/USD',
        'KAVA/USD',
        'ANKR/USD',
        'KDA/USD',
        'LUNC/USD',
        'USTC/USD',
        'INJ/USD',
        'SCRT/USD',
        'JUNO/USD',
        'CTK/USD',
        'STARS/USD',
        'AKT/USD',
      ],
    },
    osmosis: {
      interval: 6 * 1000,
      symbols: [
        'ATOM/USDC',
        'AKT/USDC',
        'JUNO/USDC',
        'SCRT/USDC',
        'STARS/USDC',
        'OSMO/USDC',
        'INJ/USDC',
        'LUNA/USDC',
        'KAVA/USDC',
        'LINK/USDC',
        'DOT/USDC',
        'LUNC/USDC',
      ],
    },
    binance: {
      interval: 6 * 1000,
      symbols: [
        'BTC/USDT',
        'ETH/USDT',
        'BNB/USDT',
        'NEO/USDT',
        'LTC/USDT',
        'ADA/USDT',
        'XRP/USDT',
        'EOS/USDT',
        'XLM/USDT',
        'TRX/USDT',
        'ETC/USDT',
        'VET/USDT',
        'USDC/USDT',
        'LINK/USDT',
        'ZIL/USDT',
        'BAT/USDT',
        'XMR/USDT',
        'ZEC/USDT',
        'DASH/USDT',
        'THETA/USDT',
        'ENJ/USDT',
        'MATIC/USDT',
        'ATOM/USDT',
        'TFUEL/USDT',
        'ALGO/USDT',
        'DOGE/USDT',
        'ANKR/USDT',
        'CHZ/USDT',
        'BNB/BUSD',
        'BTC/BUSD',
        'BUSD/USDT',
        'XTZ/USDT',
        'XRP/BUSD',
        'ETH/BUSD',
        'LTC/BUSD',
        'LINK/BUSD',
        'ETC/BUSD',
        'STX/USDT',
        'KAVA/USDT',
        'TRX/BUSD',
        'EOS/BUSD',
        'XLM/BUSD',
        'ADA/BUSD',
        'VET/BUSD',
        'ATOM/BUSD',
        'DASH/BUSD',
        'NEO/BUSD',
        'XTZ/BUSD',
        'BAT/BUSD',
        'ENJ/BUSD',
        'ALGO/BUSD',
        'XMR/BUSD',
        'ZEC/BUSD',
        'SOL/USDT',
        'SOL/BUSD',
        'MATIC/BUSD',
        'ZIL/BUSD',
        'LRC/BUSD',
        'LRC/USDT',
        'COMP/BUSD',
        'COMP/USDT',
        'SNX/BUSD',
        'SNX/USDT',
        'MKR/USDT',
        'MKR/BUSD',
        'DAI/USDT',
        'DAI/BUSD',
        'RUNE/BUSD',
        'MANA/BUSD',
        'DOGE/BUSD',
        'DCR/USDT',
        'MANA/USDT',
        'CRV/BUSD',
        'CRV/USDT',
        'SAND/USDT',
        'SAND/BUSD',
        'DOT/BUSD',
        'DOT/USDT',
        'LUNA/BUSD',
        'LUNA/USDT',
        'EGLD/BUSD',
        'EGLD/USDT',
        'RUNE/USDT',
        'UNI/BUSD',
        'UNI/USDT',
        'AVAX/BUSD',
        'AVAX/USDT',
        'CAKE/BUSD',
        'AAVE/BUSD',
        'AAVE/USDT',
        'NEAR/BUSD',
        'NEAR/USDT',
        'FIL/BUSD',
        'FIL/USDT',
        'INJ/BUSD',
        'INJ/USDT',
        'CTK/USDT',
        'AXS/BUSD',
        'AXS/USDT',
        'GRT/USDT',
        '1INCH/USDT',
        'USDC/BUSD',
        'FXS/BUSD',
        'CAKE/USDT',
        '1INCH/BUSD',
        'GRT/BUSD',
        'CHZ/BUSD',
        'SHIB/USDT',
        'SHIB/BUSD',
        'ICP/BUSD',
        'ICP/USDT',
        'AR/BUSD',
        'AR/USDT',
        'FTM/BUSD',
        'THETA/BUSD',
        'KAVA/BUSD',
        'KLAY/BUSD',
        'KLAY/USDT',
        'QNT/BUSD',
        'QNT/USDT',
        'FLOW/BUSD',
        'FLOW/USDT',
        'XEC/BUSD',
        'MINA/BUSD',
        'MINA/USDT',
        'DYDX/USDT',
        'DYDX/BUSD',
        'STX/BUSD',
        'SCRT/BUSD',
        'ENS/BUSD',
        'ENS/USDT',
        'ANKR/BUSD',
        'AMP/BUSD',
        'AMP/USDT',
        'CVX/BUSD',
        'CVX/USDT',
        'IMX/BUSD',
        'IMX/USDT',
        'SCRT/USDT',
        'KDA/BUSD',
        'APE/USDT',
        'APE/BUSD',
        'NEXO/USDT',
        'NEXO/BUSD',
        'LDO/BUSD',
        'LDO/USDT',
        'USTC/USDT',
        'USTC/BUSD',
        'LUNC/USDT',
        'LUNC/BUSD',
        'GMX/BUSD',
        'GMX/USDT',
        'APT/USDT',
        'APT/BUSD',
        'OSMO/USDT',
      ],
    },
    kraken: {
      interval: 6 * 1000,
      symbols: [
        'ADA/USDT',
        'ALGO/USDT',
        'APE/USDT',
        'ATOM/USDT',
        'AVAX/USDT',
        'DAI/USDT',
        'DOT/USDT',
        'EOS/USDT',
        'ETH/USDC',
        'ETH/USDT',
        'LINK/USDT',
        'LTC/USDT',
        'MANA/USDT',
        'MATIC/USDT',
        'SHIB/USDT',
        'SOL/USDT',
        'USDC/USDT',
        'XMR/USDT',
        'XRP/USDT',
        'XTZ/USDT',
        '1INCH/USD',
        'AAVE/USD',
        'ADA/USD',
        'AKT/USD',
        'ALGO/USD',
        'AMP/USD',
        'ANKR/USD',
        'APE/USD',
        'APT/USD',
        'ATOM/USD',
        'AVAX/USD',
        'AXS/USD',
        'BAT/USD',
        'CHZ/USD',
        'COMP/USD',
        'CRV/USD',
        'CVX/USD',
        'DAI/USD',
        'DASH/USD',
        'DOT/USD',
        'DYDX/USD',
        'EGLD/USD',
        'ENJ/USD',
        'ENS/USD',
        'EOS/USD',
        'FIL/USD',
        'FLOW/USD',
        'FTM/USD',
        'FXS/USD',
        'GRT/USD',
        'GTC/USD',
        'ICP/USD',
        'IMX/USD',
        'INJ/USD',
        'JUNO/USD',
        'KAVA/USD',
        'LDO/USD',
        'LINK/USD',
        'LRC/USD',
        'MANA/USD',
        'MATIC/USD',
        'MINA/USD',
        'MKR/USD',
        'NEAR/USD',
        'QNT/USD',
        'RUNE/USD',
        'SAND/USD',
        'SCRT/USD',
        'SHIB/USD',
        'SNX/USD',
        'SOL/USD',
        'STX/USD',
        'TRX/USD',
        'UNI/USD',
        'USDC/USD',
        'XCN/USD',
        'XTZ/USD',
      ],
    },
    kucoin: {
      interval: 6 * 1000,
      symbols: [
        'XMR/USDT',
        'ATOM/USDT',
        'FTM/USDT',
        'BNB/USDT',
        'XTZ/USDT',
        'ZEC/USDT',
        'ADA/USDT',
        'CHZ/USDT',
        'LUNA/USDT',
        'DASH/USDT',
        'STX/USDT',
        'COMP/USDT',
        'CRO/USDT',
        'MKR/USDT',
        'LINK/USDT',
        'DOT/USDT',
        'UNI/USDT',
        'FIL/USDT',
        'AAVE/USDT',
        'LTC/USDT',
        'XLM/USDT',
        'ETC/USDT',
        'ETH/USDT',
        'SNX/USDT',
        'BTC/USDT',
        'XRP/USDT',
        'TRX/USDT',
        'VET/USDT',
        'EOS/USDT',
        'USDC/USDT',
        'GRT/USDT',
        '1INCH/USDT',
        'DFI/USDT',
        'CRV/USDT',
        'LRC/USDT',
        'QNT/USDT',
        'CAKE/USDT',
        'AVAX/USDT',
        'MANA/USDT',
        'SAND/USDT',
        'ZIL/USDT',
        'XDC/USDT',
        'SHIB/USDT',
        'KDA/USDT',
        'ICP/USDT',
        'MATIC/USDT',
        'NEAR/USDT',
        'AXS/USDT',
        'SOL/USDT',
        'DYDX/USDT',
        'EGLD/USDT',
        'RUNE/USDT',
        'INJ/USDT',
        'AR/USDT',
        'FXS/USDT',
        'KAVA/USDT',
        'IMX/USDT',
        'APE/USDT',
        'SOL/USDC',
        'SCRT/USDT',
        'LUNC/USDT',
        'USTC/USDT',
        'BUSD/USDT',
        'APT/USDT',
        'TON/USDT',
      ],
    },
    huobi: {
      symbols: [
        'LUNA/USDT',
        'AVAX/USDT',
        'NEAR/USDT',
        'ATOM/USDT',
        'BTC/USDT',
        'ZIL/USDT',
        'MATIC/USDT',
        'SAND/USDT',
        'DOGE/USDT',
        'SOL/USDT',
        'AMP/USDT',
        'ANKR/USDT',
        'SHIB/USDT',
        'FLOW/USDT',
        'GMX/USDT',
        'LINK/USDT',
        'ALGO/USDT',
        'THETA/USDT',
        'MANA/USDT',
        'XRP/USDT',
        'BAT/USDT',
        'USTC/USDT',
        'NEO/USDT',
        'LUNC/USDT',
        'KLAY/USDT',
        'TON/USDT',
        'INJ/USDT',
        'ICP/USDT',
        'EGLD/USDT',
        'MINA/USDT',
        'ADA/USDT',
        'ETH/USDT',
        'AAVE/USDT',
        'CRV/USDT',
        'TRX/USDT',
        'VET/USDT',
        'AR/USDT',
        'KAVA/USDT',
        'DOT/USDT',
        'IMX/USDT',
        'COMP/USDT',
        'EVMOS/USDT',
        'LTC/USDT',
        'CVX/USDT',
        'DAI/USDT',
        'AXS/USDT',
        'MKR/USDT',
        'XDC/USDT',
        'SCRT/USDT',
        'AKT/USDT',
        'BNB/USDT',
        'FTM/USDT',
        'UNI/USDT',
        'CAKE/USDT',
        'SNX/USDT',
        'DYDX/USDT',
        'STETH/USDT',
        'APT/USDT',
        'LDO/USDT',
        'XTZ/USDT',
        'EOS/USDT',
        'ENJ/USDT',
        'CHZ/USDT',
        'LRC/USDT',
        'USDC/USDT',
        'APE/USDT',
        'XEC/USDT',
        'ENS/USDT',
        'NEXO/USDT',
        'GT/USDT',
        'DFI/USDT',
        'XCN/USDT',
        'FIL/USDT',
        'ETC/USDT',
        'XLM/USDT',
        'GRT/USDT',
        '1INCH/USDT',
      ],
    },
    bitfinex: {
      symbols: [
        'BTC/USD',
        'LTC/USD',
        'ETH/USD',
        'ETC/USD',
        'ZEC/USD',
        'XMR/USD',
        'XRP/USD',
        'EOS/USD',
        'NEO/USD',
        'BAT/USD',
        'TRX/USD',
        'LRC/USD',
        'DAI/USD',
        'XLM/USD',
        'MKR/USD',
        'ZIL/USD',
        'VET/USD',
        'XTZ/USD',
        'ENJ/USD',
        'AMP/USD',
        'CHZ/USD',
        'DOT/USD',
        'ADA/USD',
        'UNI/USD',
        'SNX/USD',
        'FIL/USD',
        'XDC/USD',
        'FTM/USD',
        'ICP/USD',
        'GRT/USD',
        'XRD/USD',
        'AXS/USD',
        'CRV/USD',
        'XCN/USD',
        'APT/USD',
      ],
    },
  },
  fiatProvider: {
    fallbackPriority: [
      /* Providers who requires payment to obtain API key */
      // 'fastforex',
      // 'currencylayer',
      // 'fixer',
      // 'alphavantage'
      /* Free providers */
      'exchangerate',
      'frankfurter',
      'fer',
    ],
    // https://exchangerate.host/
    exchangerate: {
      symbols: fiatSymbols,
      interval: 30 * 1000,
      timeout: 5000,
    },
    // https://fer.ee/
    fer: {
      symbols: fiatSymbols.filter((f) => !f.includes('SDR')),
      interval: 30 * 1000,
      timeout: 5000,
    },
    // https://www.frankfurter.app/docs/
    frankfurter: {
      symbols: fiatSymbols.filter((f) => !f.includes('SDR')),
      interval: 30 * 1000,
      timeout: 5000,
    },
    // https://fastforex.readme.io
    // price: $9/month
    fastforex: {
      symbols: fiatSymbols,
      interval: 60 * 1000,
      timeout: 5000,
      apiKey: '', // necessary
    },
    // https://currencylayer.com/product
    // recommend: Enterprise (60second Updates): $59.99/month
    currencylayer: {
      symbols: fiatSymbols,
      interval: 60 * 1000,
      timeout: 5000,
      apiKey: '', // necessary
    },
    // https://www.alphavantage.co/premium/
    // recommend: 150 API request per minute: $99.99/month
    alphavantage: {
      symbols: fiatSymbols,
      interval: 60 * 1000,
      timeout: 5000,
      apiKey: '', // necessary
    },
    // https://fixer.io/product
    // recommend: professional plus(60second Updates): $99.99/month
    fixer: {
      symbols: fiatSymbols,
      interval: 60 * 1000,
      timeout: 5000,
      apiKey: '', // necessary
    },
  },
}
