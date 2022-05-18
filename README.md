# Node.js Express & MongoDB:  Recipes List

## Features

- Uses [npm](https://npmjs.com)
- Express + MongoDB ([Mongoose](http://mongoosejs.com/))
- JWT Tokens, make requests with a token after login with Authorization header with value Bearer yourToken where yourToken will be returned in Login response ([JWT](https://jwt.io//))
- Deployed on Heroku
- Ingredient and Recipe with CRUD operations.
- Included API collection for Postman.
- Included CI (Continuous Integration) with GitHub Actions.


## Prerequisites

- [Node v18.0+](https://nodejs.org/en/download/current/)

- [npm v8.0+](https://www.npmjs.com)


## Getting Started

Clone the project from github.

```bash
git clone https://github.com/prasad-78/urban-umbrella.git
```

### Install npm dependencies after installing (Git or manual download)

```bash
cd urban-umbrella
npm install
```

## Running Locally

```bash
export ATLAS_URI=your-mongodb-atlas-url TOKEN_KEY=you-jwt-secret nodemon server.js"
```


## Run Tests
In the postman folder use the collection to run tests.
```bash
npm install -g newman
cd test
newman run HF.postman_collection.json
```