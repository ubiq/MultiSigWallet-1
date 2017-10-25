var txDefaultOrig =
{
  gasLimit: 3141592,
  gasPrice: 20000000000,
  ethereumNode: "https://rpc1.ubiqscan.io:443",
  alertNode: {
    url : "https://alerts.gnosis.pm",
    authCode: null,
    name: "Ubiq Net",
    managementPage: "https://alerts.gnosis.pm/api/alert/manage/?code={auth-code}",
    managementRoute: "api/alert/manage"
  },
  connectionChecker:{
    method : "OPTIONS",
    url : "https://www.google.com",
    checkInterval: 5000
  },
  wallet: "injected",
  defaultChainID: null,
  // Mainnet
  walletFactoryAddress: "0x12ff9a987c648c5608b2c2a76f58de74a3bf1987",
  tokens: [
    {
      'address': '0x4b4899a10f3e507db207b0ee2426029efa168a67',
      'name': 'QWARK',
      'symbol': 'QWARK',
      'decimals': 18
    },
    {
      'address': '0xd245207cfbf6eb6f34970db2a807ab1d178fde6c',
      'name': 'APX',
      'symbol': 'APX',
      'decimals': 18
    },
    {
      'address': '0x94ad7e41c1d44022c4f47cb1ba019fd1a022c536',
      'name': 'DOT',
      'symbol': 'DOT',
      'decimals': 18
    },
    {
      'address': '0x08533d6a06ce365298b12ef92eb407cba8aa8273',
      'name': 'CEFS',
      'symbol': 'CEFS',
      'decimals': 18
    },
    {
      'address': '0x5e1715bb79805bd672729760b3f7f34d6f485098',
      'name': 'RICKS',
      'symbol': 'RICKS',
      'decimals': 18
    },
    //{
    //  'address': '0x0826180a4c981d5095cb5c48bb2a098a44cf6f73',
    //  'name': 'GRANS',
    //  'symbol': 'GRANS',
    //  'decimals': 18
    //},
    //{
    //  'address': '0x79755ea6ccb143b0bd8e1b670efffd59ae874991',
    //  'name': 'BTW',
    //  'symbol': 'RICKS',
    //  'decimals': 18
    //}
  ]
};

if (isElectron) {
  txDefaultOrig.wallet = "remotenode";
}

var txDefault = {
  ethereumNodes : [
    {
      url : "https://rpc1.ubiqscan.io:443",
      name: "Ubiq Net"
    },
    {
      url : "https://testrpc1.ubiqscan.io:443",
      name: "Test Net"
    },
    {
      url : "http://localhost:8588",
      name: "Local node"
    }
  ],
  alertNodes: {
    'mainnet': {
      url: 'https://alerts.ubiqscan.io',
      authCode: null,
      name: 'Ubiq Net',
      networkId: 88,
      managementPage: "https://alerts.ubiqscan.io/api/alert/manage/?code={auth-code}"
    },
    'testnet': {
      url: 'https://testalerts.ubiqscan.io',
      authCode: null,
      name: 'Test Net',
      networkId: 9,
      managementPage: "https://testalerts.ubiqscan.io/api/alert/manage/?code={auth-code}"
    }
  },
  walletFactoryAddresses: {
    'mainnet': {
      name: 'Ubiq Net',
      address: txDefaultOrig.walletFactoryAddress
    },
    'testnet': {
      name: 'Test Net',
      address: txDefaultOrig.walletFactoryAddress
    },
    'privatenet': {
      name: 'Private Net',
      address: '0xd79426bcee5b46fde413ededeb38364b3e666097'
    }
  }
};

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

loadConfiguration();
