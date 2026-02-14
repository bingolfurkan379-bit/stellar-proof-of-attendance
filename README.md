# Stellar Proof of Attendance

Stellar Proof of Attendance is a full-stack decentralized application (dApp) built on the Stellar blockchain using Soroban smart contracts. The purpose of this project is to securely record event attendance on-chain in a transparent, immutable, and verifiable way. The application prevents duplicate registrations and ensures that attendance data cannot be altered once recorded.

This project is deployed on the Stellar Testnet.

FEATURES

- Full-stack architecture (frontend + smart contract)
- Smart contract written in Rust using Soroban
- Deployed on Stellar Testnet
- Immutable on-chain attendance records
- Duplicate attendance prevention
- Freighter wallet integration for transaction signing

TECH STACK

Frontend: React / Next.js  
Smart Contract: Rust (Soroban)  
Blockchain: Stellar Testnet  
Wallet: Freighter  

INSTALLATION AND SETUP

1. Install Rust from: https://www.rust-lang.org/tools/install

2. Install Soroban CLI by running:
cargo install --locked soroban-cli

3. Add the WebAssembly target:
rustup target add wasm32-unknown-unknown

4. Build the smart contract:
cargo build --target wasm32-unknown-unknown --release

5. Configure Stellar Testnet:
soroban network add testnet --rpc-url https://soroban-testnet.stellar.org --network-passphrase "Test SDF Network ; September 2015"
soroban network use testnet

6. Generate and fund a testnet account:
soroban keys generate testnet
soroban keys fund testnet

7. Deploy the smart contract:
soroban contract deploy --wasm target/wasm32-unknown-unknown/release/<attendance-contract>.wasm --source testnet --network testnet

8. Run the frontend:
npm install
npm run dev

HOW IT WORKS

1. The user connects their Freighter wallet.
2. The user registers attendance through the frontend interface.
3. The transaction is signed using the wallet.
4. The Soroban smart contract records the attendance on the Stellar blockchain.
5. Duplicate attendance attempts are rejected automatically.

NETWORK

Stellar Testnet

LICENSE

This project was developed as a final project for the Stellar Blockchain Program.
