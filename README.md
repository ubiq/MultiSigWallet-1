Ubiq Multisignature Wallet
==========================

The purpose of multisig wallets is to increase security by requiring multiple parties to agree on transactions before execution. Transactions can be executed only when confirmed by a predefined number of owners. A web user interface can be found [here](/dapp).

Features
--------

- Can hold Ubiq and all kind of tokens with multisig support
- Easy to use offline signing (cold wallet) support
- Integration with web3 wallets (Metamask, Mist, Parity, etc)
- Transaction data and log decoding, makes transactions more readable
- Interacting with any contracts with UI support
- Hardware wallet support (Ledger Wallet)
- Optional email notifications when an event is triggered or you are required to sign a transaction

Install
-------
```
git clone https://github.com/ubiq/twine.git
cd twine
npm install
```

Deploy
------
### Deploy multisig factory wallet contract:
```
DEPLOY_FACTORY=true truffle migrate
```
### Deploy multisig wallet:
```
truffle migrate <account1,account2,...,accountN> <requiredConfirmations>
```
### Deploy multisig wallet with daily limit:
```
truffle migrate <account1,account2,...,accountN> <requiredConfirmations> <dailyLimit>
```

Test
----
### Run contract tests:
```
npm test
```
### Run interface tests:
```
npm run test-dapp
```

Factory Address
---------------

The Factory contract found on [/contracts/MultiSigWalletWithDailyLimitFactory.sol](contracts directory) is deployed to the following addresses:

* Ubiq Net: **Not deployed yet**
* Test Net: `0x8d9102186c596ee9ae2cc49f9d8a91ffa3697221`

Limitations
-----------
This implementation does not allow the creation of smart contracts via multisignature transactions.
Transactions to address 0 cannot be done. Any other transaction can be done.

Security
--------
All contracts are WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

Acknowledgements
----------------

Thanks to [https://github.com/gnosis](Gnosis team) to create the base project on which this one is based on.

License
-------
[GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt)
