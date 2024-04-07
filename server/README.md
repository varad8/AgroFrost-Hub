
  <div align="center">
  <h1 align="center">AgroFrost Hub Backend</h1>
  <h3>Codebase for the AgroFrost Hub Backend platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-Node.js-004E89?logo=Node.js&style=flat" alt='Node.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Express.js-004E89?logo=Express.js&style=flat" alt='Express.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-MongoDB-004E89?logo=MongoDB&style=flat" alt='MongoDB\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Mongoose-004E89?logo=Mongoose&style=flat" alt='Mongoose\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Nodemon-004E89?logo=Nodemon&style=flat" alt='Nodemon\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Dotenv-004E89?logo=Dotenv&style=flat" alt='Dotenv"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Overview

 This is a Node.js project with a MongoDB database, consisting of a RESTful API for a cold storage management system. The project includes a frontend and backend, with authentication and authorization implemented using JWT tokens. The codebase is well-structured and follows best practices for modularity, scalability, and maintainability.

---

## 🌟 Features

 Sure, here is a list of features for the project:<br>
* RESTful API for cold storage management system
* Node.js backend with MongoDB database
* Frontend and backend implemented using separate folders
* Authentication and authorization implemented using JWT tokens
* Modular codebase with well-structured directories and files
* Scalability and maintainability in mind
* Implementation of a QR code scanning feature
* Implementation of a chatbot feature
* Implementation of a credit card payment feature
* Implementation of a select feature
* Implementation of a hero image feature
* Implementation of a cold storage warehouse feature

---

## 📁 Repository Structure

```sh
├── .env
├── controller
│   ├── AdminController.js
│   ├── ColdStorageOwnerController.js
│   └── CustomerController.js
├── db
│   └── Connection.js
├── middlewares
│   └── authentication.js
├── model
│   ├── Admin.js
│   ├── Booking.js
│   ├── ColdStorage.js
│   ├── ColdStorageOwner.js
│   ├── Customer.js
│   └── Payment.js
├── package-lock.json
├── package.json
├── routes
│   ├── AdminRouter.js
│   ├── ColdstorageOwnerRouter.js
│   └── CustomerRouter.js
├── server.js
└── uploads
    ├── 1712164886337_qr.jpg
    ├── 1712218400390_qr.jpg
    ├── 1712218629751_chatbot.png
    ├── 1712335233684_creditcard.png
    ├── 1712335935941_select.png
    ├── 1712377492594_qr.jpg
    ├── 1712381388078_cold_storage_warehouse.jpg
    ├── 1712423598632_qr.jpg
    ├── 1712423671612_heroimg.jpeg
    └── 1712423919883_cold_storage_warehouse.jpg

```

---

## 💻 Code Summary

<details><summary>\controller</summary>

| File | Summary |
| ---- | ------- |
| AdminController.js |  The code defines a Node.js Express router for an admin panel, which includes routes for admin registration, login, update details, and retrieval by ID. It also includes routes for booking, payment, and database management, as well as functions to fetch booking and payment data. Additionally, it includes routes for approving or disapproving cold storage units and retrieving customer and owner data. |
| ColdStorageOwnerController.js |  The code defines a router for a cold storage facility management system, which includes endpoints for registration, login, and booking/payment management. It also includes a chart data endpoint to display information about the cold storage facility's usage and payments. |
| CustomerController.js |  The code defines a Node.js API for a customer registration and login system, as well as routes for managing customer details, storage details, booking details, payment details, and sending emails. The primary function of the code is to provide a RESTful API for a customer management system, with features such as customer registration, login, updating customer details, fetching customer details, fetching storage details, creating an order, saving payment, fetching booking details, fetching payment details, and sending emails. |

</details>

---

<details><summary>\db</summary>

| File | Summary |
| ---- | ------- |
| Connection.js |  The code establishes a connection to a MongoDB database using the mongoose library, with the primary function of connecting to the database and logging a success message if successful. |

</details>

---

<details><summary>\middlewares</summary>

| File | Summary |
| ---- | ------- |
| authentication.js |  The code defines a function called authenticateToken that verifies a JSON Web Token (JWT) and extracts the user information from it, returning an error response if the token is invalid or expired. |

</details>

---

<details><summary>\model</summary>

| File | Summary |
| ---- | ------- |
| Admin.js |  The code defines a MongoDB schema for an Admin model, with fields for an ID, full name, email, contact number, address, password, and role. |
| Booking.js |  The code defines a Booking model in MongoDB using Mongoose, with fields for booking ID, customer ID, check-in and check-out dates, and the number of goods being booked. |
| ColdStorage.js |  The code defines a schema for a Cold Storage model in MongoDB, with fields for owner ID, CS ID, name, image, area, capacity, address, price, time, owner reference, and status. It also defines a model for the Cold Storage Owner. |
| ColdStorageOwner.js |  The code defines a schema and model for a Cold Storage Owner in MongoDB, using Mongoose, with fields for owner ID, full name, email, contact number, QR code, password, and role. |
| Customer.js |  The code defines a MongoDB schema for a Customer model, with fields for customer ID, full name, email, contact number, address, password, and role. |
| Payment.js |  The code defines a Payment model in MongoDB using Mongoose, with fields for payment ID, business ID, date, amount, customer service ID, and customer ID. |

</details>

---

<details><summary>\routes</summary>

| File | Summary |
| ---- | ------- |
| AdminRouter.js |  The code defines an Express.js router that uses the AdminController to handle requests for the admin route. |
| ColdstorageOwnerRouter.js |  The code defines an Express.js router that routes requests to the ColdStorageOwnerController for handling requests related to cold storage owners. |
| CustomerRouter.js |  The code defines an Express.js router that uses the CustomerController to handle requests for the user endpoint. |

</details>

---

<details><summary>Root</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code defines an Express.js server that listens on port 3000 and routes incoming requests to different API endpoints based on the URL path, using middleware for JSON parsing, CORS support, and error handling. |

</details>

---

## 🚀 Getting Started

 Getting Started with AgroFrost Hub<br>=====================================

AgroFrost Hub is a Node.js project with a MongoDB database, consisting of a RESTful API for a cold storage management system. The project includes a frontend and backend, with authentication and authorization implemented using JWT tokens. This guide will help you get started with the project and set up your development environment.

1. Clone the repository
-------------------------

Clone the AgroFrost Hub repository from GitHub to your local machine using the following command:
```bash
git clone https://github.com/varadnikharage/agrofrosthub.git
```
2. Install dependencies
-------------------------

Navigate to the project directory and install the dependencies using npm or yarn:
```bash
npm install
```
or
```bash
yarn install
```
3. Set up the environment variables
-----------------------------------

Create a `.env` file in the root directory of the project and add the following environment variables:
```bash
MONGO_URI=mongodb://localhost:27017/agrofrosthub
JWT_SECRET=your-secret-key
```
Replace `your-secret-key` with a secret key of your choice.

4. Start the server
--------------------

Start the server by running the following

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
