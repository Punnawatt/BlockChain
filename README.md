# GGrader

GGrader is a blockchain-based platform for evaluating coding solutions with three main user roles: **Problem Author**, **Solver**, and **Grader**. This project integrates **React** and **Vite** for the frontend and leverages **Web3**, **Ethereum**, and **MetaMask** for blockchain functionality.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [User Roles](#user-roles)
  - [Problem Author](#problem-author)
  - [Solver](#solver)
  - [Grader](#grader)
- [Known Limitations](#known-limitations)
- [Tech Stack](#tech-stack)

---

## Overview

GGrader is designed to enable collaboration and transparency in solving and grading coding problems using blockchain technology.

- Problem Authors create coding challenges and stake an amount on the blockchain.
- Solvers submit their solutions and verify them against test cases.
- Graders approve or reject solutions and earn a percentage of the stake for their work.

The platform ensures security and transparency by storing transactions on the blockchain.

---

## Features

1. **Problem Authoring**:

   - Create coding challenges with details, stakes, and test cases (minimum of 3).
   - Interact with the blockchain for staking and submission.

2. **Code Solution Submission**:

   - Solvers can test their code using an integrated editor and runner.
   - One random test case is revealed for testing (feature not implemented yet).

3. **Solution Grading**:

   - Graders manually review solutions and decide on approval or rejection.
   - Approved solutions initiate blockchain transactions for payments.

4. **Blockchain Integration**:
   - Transactions for problem staking and payouts are stored on Ethereum.

---

## Installation

Follow these steps to clone and run the project:

### 1. Clone the Repository

```bash
git clone https://github.com/Punnawatt/BlockChain.git
cd BlockChain
```

### 2. Install Dependencies

Ensure you have `Node.js` installed. Run:

```bash
npm install
```

---

## Usage

The project requires **three terminals** to run the following commands:

### Terminal 1: Run the Frontend

```bash
npm run dev
```

### Terminal 2: Run JSON Server for Problem Data

```bash
npx json-server --watch mydata/db.json --port 3000
```

### Terminal 3: Run JSON Server for Grader Data

```bash
npx json-server --watch mydata/grader_db.json --port 8000
```

---

## User Roles

### Problem Author

- Fills in problem details: **Name**, **Description**, **Stake Amount**, and at least **3 Test Cases**.
- Submits the problem via a blockchain transaction, storing only the stake amount on-chain.

### Solver

- Uses the integrated **code editor** and **runner** to test and debug solutions.
- Submits code for grading, with one random test case revealed for guidance.

### Grader

- Reviews submitted solutions manually.
- Approves or rejects solutions based on the test case results.
- Approving a solution triggers two blockchain transactions:
  1. Code ownership is transferred to the solver.
  2. The stake is divided:
     - **90%** to the solver.
     - **10%** to the grader.

---

## Known Limitations

- **Auto test case execution** is not implemented; Graders manually run test cases.
- **Random test case visibility** for Solvers is partially implemented but lacks advanced functionality.
- No future updates or additional features are planned for this project.
