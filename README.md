# Getting Started with Create React App

Tic Tac Toe is a simple two-player game where players take turns marking X or O in a 3×3 grid. The first player to align three of their symbols horizontally, vertically, or diagonally wins. If all cells are filled without a winner, the game ends in a draw.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Used](#technologies-used)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

## Overview

A classic 2-player game implemented on a 3×3 grid where players alternate turns to place "X" or "O". The first to align three symbols horizontally, vertically, or diagonally wins. If all cells are filled without a winner, the game results in a draw. Simple logic and conditions are used to check for winning combinations and game completion.

The app focuses on delivering a smooth, responsive, and user-friendly experience, making learning and self-assessment both fun and engaging.
You can view the live portfolio at: [LIVE PREVIEW](https://badshahyadav.github.io/TicTacToe-react/)

## Features

- **Interactive UI:** Clickable 3×3 grid with immediate feedback on moves.
- **Win detection:** Automatically checks for winning combinations after every move.
- **Two-player mode:** Allows two users to play alternately on the same device.
- **Draw detection:** Declares a draw if the grid is full without a winner.
- **Reset button:** Allows players to restart the game anytime.
- **Responsive Design:** Optimized layout for desktop and mobile screens.
- **Component-Based Structure:** Built with reusable and modular React components.
- **State Management:** Uses React hooks (useState, useEffect) for managing quiz state and behavior.
- **Simple Deployment:** Hosted using GitHub Pages.

## Tech Stack

- **Frontend**: JS,React.js, Vite (for fast build and development).
- **Styling**: CSS3 (or Tailwind CSS if you used it).
- **Deployment**: GitHub Pages.
- **State Mangement** : React Hooks (useState, useEffect).

## Main Components

- **App.jsx** : Main application logic and state.

- **Header (Navbar.jsx)** : Contains the navigation menu for easy access to different sections like Home, About, Projects, and Contact.
- **TicTacToe.jsx:**  Contains complete functional logic and structural logic.

## File Structure

Here's an overview of the project's file structure:

```plaintext
tic-tac-toe/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Board.jsx
│   │   └── Square.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore

```

## Getting Started

### Prerequisites

Ensure you have the following tools installed on your development machine:

- **React.js** (Use current version)
- **npm** or **yarn**

### Installation

Clone the repository to your local machine:

```bash
https://github.com/BadshahYadav/TicTacToe-react.git
cd TicTacToe-react
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

### Running the Project

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Environment Variables Setup

The project requires the following environment variables. Create a `.env` file in the root directory and add your values:

```plaintext
VITE_APP_TITLE=TicTacToe-react
VITE_APP_VERSION=1.0.0
VITE_PUBLIC_URL=https://yourusername.github.io/TicTacToe-react/
```

Vite environment variables must start with VITE_ or they won’t work!
## How to use them in your code:

In any React file (e.g., App.jsx):
```plaintext
const title = import.meta.env.VITE_APP_TITLE;
console.log(title);  // Outputs: TicTacToe-react
```

## Deployment (GitHub Pages)

 Install gh-pages package

```bash
npm install gh-pages --save-dev
```

```bash
npm run deploy
```

Follow the prompts to deploy your application.

## Contact

If you have any questions or feedback, feel free to contact me via the [contact form](https://badshahyadav.github.io/Portfolio/) on my portfolio website or connect with me through my social profiles.

## 🔗 Links
[![instagram](https://img.shields.io/badge/instagram-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/BadshahYadav)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/badshah-kumar-830146234/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/_Emperor_4k)

## License

This project is open-source and available under the [MIT License](LICENSE).
