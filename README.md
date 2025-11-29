# Simple Blockchain Simulation

This project is a simple simulation of a blockchain implemented in JavaScript. It demonstrates the fundamental concepts of how a blockchain works, including block creation, hashing, and linking blocks together.

## Features

- **Genesis Block**: Automatically creates the first block in the chain.
- **Block Structure**: Each block contains an index, timestamp, data, previous hash, and its own hash.
- **Integrity**: Uses SHA-256 for hashing to ensure data integrity.
- **Interactive Menu**: A command-line interface to interact with the blockchain.
  - Create new blocks with custom data.
  - View the entire blockchain.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Usage

Run the application:

```bash
node index.js
```

Follow the on-screen menu to add blocks or view the chain.