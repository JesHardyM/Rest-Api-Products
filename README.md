
# Local Products Rest API

A basic REST API using express, node and sequelize. 

The requirements are that the API should have the functionality necessary in order to Post, Get, Update (Put/Patch) and Delete.

The basic tables the database has are Brands, Products, Administrators, Users, and Orders.

This is the simulation of database contracted for local business. 
No aspects of front end were required for this project.

## Authors

- [@JHardyM](https://www.github.com/JesHardyM)


## Tech Stack

**RDBMS:** MySQL

**API Platform:** Postman / Thunderclient

**Server:** Node, Express

**Initial Testing:** Jest


## Run Locally + Installation
Clone the project

```bash
  git clone https://github.com/JesHardyM/TDD-node-express.git
```
Go to the project directory

```bash
  cd my-project
```

Installations necessary to run the REST API:

```bash
  npm install -y
  npm install express sequelize mysql2
  npm install -D nodemon
  npm install --save-d jest
  npm install --save-d supertest
  npm i cors
```

Add Database schema to MySQL:

    schema.sql

Raise the server:

    npm run dev

**Note**

    This REST API uses port 0 and will assign a random available port everytime. 
    You may change it to the port of your choosing to facilitate the experience in 
    Postman, Thunderclient or similar.

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

TDD CRUD Testing was initially used with success for products and brands, however upon 
adding the ForeginKeys and linking tables I encountered errors in the tests. 
Meanwhile the functionality to Create, Get, Update and Delete in Postman is 200.  
At this time I have not resolved the testing problem, however the REST API is completely functional. 