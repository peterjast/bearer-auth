# bearer-auth

Author: Peter Staker

Deployed URL: [https://bearer-auth-ps.herokuapp.com/](https://bearer-auth-ps.herokuapp.com/)

PR: [https://github.com/peterjast/bearer-auth/pull/1](https://github.com/peterjast/bearer-auth/pull/1)

* tests [report](https://github.com/peterjast/bearer-auth/actions)

## Setup

### .env requirements

* PORT - Port Number

* MONGODB_URI - DEV -> mongodb://localhost:27017/bearer-auth

* SECRET - secret string

### Dependencies

> npm i

### Running the app

> npm start

### Tests

> npm run test

## Web Request Response Cycle

![UML](./src/assets/Auth-UML.jpg)
