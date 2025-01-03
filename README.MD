# User Management with Node js and MongoDB

## Description
A simple user management system created using node js as backend, mongoDB as database and express for routing. 

## Installation
To install the necessary dependencies, run the following command:
```bash
git clone https://github.com/neer-aubergine/user-management-with-Node-js-and-mongoDB.git

cd User Management with Node js and MongoDB

npm install
```

## Setup
Navigate to the project directory and create a `.env` file with the necessary details:
```bash
nano .env
```
Add the required environment variables to the `.env` file.
```bash
# DB configuration
MONGO_URI = # your mongo atlas url with username and password
```

## Features

- [x] Implement APIs for user registration and log in.
- [x] Maintain list of registered user with following properties : username and email
- [x] Registration API with validations (Username & email must be unique , password with min length 6) 
- [x] Login API receives email & password from user and sends appropriate login status
- [x] organized folde and file structure
- [x] bcrypt to store password in hash format

