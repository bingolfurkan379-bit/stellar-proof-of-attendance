# Stellar Proof of Attendance
This is a blockchain-based attendance system built on the Stellar network.

## Project Details
- **Contract ID:** CATYR6DWRLU465SGGVOTJXAEQXCLZ7IU55UIHXFESLRPEH07GNVPJMFC
- **Network:** Stellar Testnet

## How to Run
1. Install Soroban CLI.
2. Build: `soroban contract build`
3. Deploy: `soroban contract deploy --wasm target/wasm32v1-none/release/attendance_contract.wasm --source default --network testnet`