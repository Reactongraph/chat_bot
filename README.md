# Next.js Project Setup

## Prerequisites

1. Node.js (v16.18.0 or higher)
2. npm or yarn (8.19.2)

## Installation

- Clone or download the repository
- Run npm install or yarn to install the dependencies
- Create a new file called .env.local in the root of the project
- In .env.local, add the following line: NEXT_PUBLIC_BASE_URL="https://random-word-api.herokuapp.com/word"
- Run npm run dev or yarn dev to start the development server

## Commands

- Run on development mode

```bash
# development
yarn dev

# build
yarn build

# production mode
yarn start
```

## Usage

The project uses the NEXT_PUBLIC_BASE_URL environment variable to fetch data from the random word API.
This variable can be accessed in the code using process.env.NEXT_PUBLIC_BASE_URL.

## Deployment

Run npm run build or yarn build to create a production-ready build. The built files can then be deployed to any hosting service that supports Node.js.

## Note

.env.local is not version controlled and will be ignored by git.
Do not store sensitive data in this file.
NEXT_PUBLIC_BASE_URL is only used client side, it will be exposed to the client and should not contain any sensitive information.
