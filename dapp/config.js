var txDefaultOrig =
{
  gasLimit: 3141592,
  gasPrice: 18000000000,
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
  //ledgerAPI: "http://localhost:" + ledgerPort,
  tokens: [
    {
      'address': '0x6810e776880c02933d47db1b9fc05908e5386b96',
      'name': 'Gnosis',
      'symbol': 'GNO',
      'decimals': 18
    },
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
      url : "https://testrcp.ubiqscan.io:443",
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
      name: 'Privatenet',
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
