require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy reward stereo puppy grace brand equal gather'; 
let testAccounts = [
"0xb848a7cba930a7188cde035ac72ce1c555f887ce90312ef7a58a654c70498085",
"0x2f1d45335eb438a99385ae0705b212d81c58cf564de9f575423c00dcb08907cd",
"0x86f9b85024da62f25ba23a8771431a929816fc8244611af643cc32f2c5222aed",
"0xe5a4dac74ce7eccc0325208a40e2fda806cbba2ec75bdb808212c1b766f21ec4",
"0x5f08f318b70f0508bea0a35b2f661145a88e145fefece8259256dbf89f0c945f",
"0xdfa1b4cf44513bd714651dcbd2c56b093eeec1d6148ce867d3a2d8b18ebba413",
"0x989ebe585e1123c29822467af868697832139bef376d5763c97fef8927cbd0fd",
"0xe613ff571307c6a783fb805ef8967866c11c7e8df49d883c7fe3001b332f9cd5",
"0xb005cebf86674ba74a54e734c9ac8258b5e4f0215c919c70832a19f13e9abdce",
"0x8cb6f20ff01199b1d7851505eb05c6c16d608a40357ec16c1f54c90a869ba5e9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

