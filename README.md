# Stellar Proof-of-Attendance (SPA)

This project is a decentralized application (dApp) developed as a final project for the **Stellar Blockchain Program**. It allows users to register their attendance for events securely on the Stellar network using Soroban smart contracts.

## 🛠 Tech Stack
- **Frontend:** React / Next.js
- **Smart Contract:** Rust (Soroban)
- **Blockchain:** Stellar Testnet
- **Wallet:** Freighter

---

## 🔑 Deployment Details
- **Network:** Stellar Testnet
- **Contract ID:** `CATYR6DWRLU465SGGVOTJXAEQXCLZ7IU55UIHXFESLRPEH07GNVPJMFC`

---

## 🚀 Installation and Setup

1. **Install Rust:** [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)
2. **Install Soroban CLI:**
   `cargo install --locked soroban-cli`
3. **Add WebAssembly target:**
   `rustup target add wasm32-unknown-unknown`
4. **Build the smart contract:**
   `cargo build --target wasm32-unknown-unknown --release`
5. **Configure Stellar Testnet:**
   `soroban network add testnet --rpc-url https://soroban-testnet.stellar.org --network-passphrase "Test SDF Network ; September 2015"`
   `soroban network use testnet`
6. **Generate and fund a testnet account:**
   `soroban keys generate testnet`
   `soroban keys fund testnet`
7. **Deploy the smart contract:**
   `soroban contract deploy --wasm target/wasm32-unknown-unknown/release/*.wasm --source testnet --network testnet`

---

## 💻 Running the Frontend

8. **Setup Environment:**
   Create a `.env` file in your frontend directory and add:
   `NEXT_PUBLIC_CONTRACT_ID=CATYR6DWRLU465SGGVOTJXAEQXCLZ7IU55UIHXFESLRPEH07GNVPJMFC`

9. **Run the application:**
   `npm install`
   `npm run dev`

---

## ⚙️ How It Works
1. The user connects their **Freighter wallet**.
2. The user registers attendance through the frontend interface.
3. The transaction is signed using the wallet.
4. The **Soroban smart contract** records the attendance on the Stellar blockchain.
5. Duplicate attendance attempts are **rejected automatically** by the contract logic.

---

### License
This project was developed for educational purposes as part of the Stellar Blockchain Program.
