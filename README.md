<h1 align="center">git </h1>
<br>

# ✨ Technologies

This project was developed with the following technologies: 

- Node.js
- Typescript
- Express
- Postgres
- Typeorm
- TSyring
- Docker
- Jest

# 💻 Project

API - CPF fraud risk list

# 🚀 How to execute

- Clone the repository
- Run `docker-compose up` to create the container app and database;
- Run `yarn typeorm migrations:run` to create the table in database;

## JEST Unit Test
- Run `yarn test` to execute all units tests;

# Routes and Schema

- BaseURL: `localhost:3333/`

## CPF
- POST ("/cpf") - Add a CPF to the fraud risk list;
- GET ("/cpf") - Check all CPF's to the fraud risk list;
- GET ("/cpf/{cpf}") - Check a CPF to the fraud risk list;
- DELETE "/cpf/{cpf}") - Remove a CPF to the fraud risk list;
## CPF Schema
```json
{ "cpf": "64852893055" }
```
### Tip
- There is a Postman Collection in the project root;

# :closed_book: License <a name="-license" style="text-decoration:none"></a>

This project is under the MIT license LICENSE

Made with love by Arthur Machado