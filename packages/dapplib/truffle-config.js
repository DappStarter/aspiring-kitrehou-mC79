require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remember honey inner nasty foam tent'; 
let testAccounts = [
"0x25db1c0feb9093c4a244869190957aa99cf0ce4317b382a2d56a1208bfbb22dd",
"0x5060c79ba0bd7e768af02cc54ab3d9c97ab9ce4ad398652bcf2134236e94498c",
"0x0f405442771585fcde8db51bb4d29d0a1f35cb3e9287a6d15d433948b65f8758",
"0xa5bd7efe5035cc14466ad2e9c28aeb3ed3426cae809d6009de0d3190e6897bf9",
"0xb41f57db182e491853ec9edf741f3fc622df0c7c5d591fbd34a3967594990fed",
"0x35fed8bee110699ad6158f9df5922e1fd27911f0b46409cfc1dc8a3849ac0ebb",
"0xe927ff683c08eee2498aac9352ed4826462882046ac326b8c986469c33aaaa38",
"0x3ad53f456a8240a6e9acae7936fd43b3e016c07579897772a8b3e902b78c44fd",
"0xe73506b67bc12192d51d3fd7346fc19f8365bb62a7e0adecd63b3f78018b32c7",
"0xcd5d59498643020e1f00291f9923baeb7fa7815c03156f800f1e4a671b58cd0d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

