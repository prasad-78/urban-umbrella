# Node.js Express & MongoDB:  Recipes List

This API will help user to create, update, list and delete recipes, ingredients and users.
## Documentation
----------------------------------------------------------------
API End Points :
```

	Recipe:
		Get All Recipes : GET /recipes
		Get Recipe By Id: GET /recipes/{id}
		Create Recipe: POST /recipes
		Update Recipe: PATCH /recipes/{id}
		Delete Recipe: DELETE /recipes/{id}

	Ingredients:
		Get All Recipes : GET /ingredients
		Get Recipe By Id: GET /ingredients/{id}
		Create Recipe: POST /ingredients
		Update Recipe: PATCH /ingredients/{id}
		Delete Recipe: DELETE /ingredients/{id}

	User:
		Register User : POST /user/register
		Login User: POST /user/login
		Delete User: DELETE /user/delete

```

## Tasks Accomplished
----------------------------------------------------------------


Authentication
```
1. Added Registration, Login functionalities for users
2. Added the JWT Bearer token as authentication for all the api calls (Ingredient, Recipe)
```

Models:
```
1. WeeklyRecipes
2. Ingredients
3. Recipes
4. Users
```

Relations:
```
1. Relation between Recipe & Ingredient (With quantity) (1:M relation)
2. Relation between Weekly Recipe & Recipe () (1:M relation)
3. A Relation for Comments in the recipe/weeklyMenu can also be added. For that we need to update the Comments object in the key with User collection reference.
```

E2E Tests:
```
Added e2e tests for CRUD operations on Recipes, Ingredients and Users.
```


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
export ATLAS_URI=your-mongodb-atlas-url TOKEN_KEY=you-jwt-secret nodemon server.js
```


## Run Tests
In the postman folder use the collection to run tests.
```bash
npm install -g newman
cd test
newman run HF.postman_collection.json
```

## Features
- Deployed on Heroku
- Ingredient and Recipe with CRUD operations.
- Included API collection for Postman.
- Included CI (Continuous Integration) with GitHub Actions.

## Uses
- Uses [npm](https://npmjs.com)
- Express + MongoDB ([Mongoose](http://mongoosejs.com/))
- JWT Tokens, make requests with a token after login with Authorization header with value Bearer yourToken where yourToken will be returned in Login response ([JWT](https://jwt.io//))
