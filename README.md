
  <div align="center">
  <h1 align="center">AgroFrostHub</h1>
  <h3>Codebase for the AgroFrostHub platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=flat-square" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Node.js-004E89?logo=Node.js&style=flat-square" alt='Node.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Express.js-004E89?logo=Express.js&style=flat-square" alt='Express.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-MongoDB-004E89?logo=MongoDB&style=flat-square" alt='MongoDB\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Tailwind%20CSS-004E89?logo=Tailwind%20CSS&style=flat-square" alt='Tailwind CSS\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Vite-004E89?logo=Vite&style=flat-square" alt='Vite"' />
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

 This is a full-stack web application with a frontend and backend, built using React and Node.js. The frontend is a single-page application (SPA) that provides a user interface for customers to book cold storage units, while the backend is responsible for handling API requests and database interactions. The application uses a MongoDB database to store customer information and booking details. The frontend and backend communicate through RESTful APIs, which are implemented using Express.js. The application also includes a login and registration system, as well as a payment gateway integration using Stripe.

---

## 🌟 Features

 Here is a list of features for the project:<br>
* Frontend:
\t+ Single-page application (SPA) for customers to book cold storage units
\t+ User interface for customers to view and manage their bookings
\t+ Login and registration system
\t+ Payment gateway integration using Stripe
* Backend:
\t+ RESTful APIs for handling API requests and database interactions
\t+ Implemented using Express.js
\t+ Handles customer information and booking details
\t+ Integrates with MongoDB database
\t+ Includes authentication and authorization mechanisms
\t+ Provides APIs for frontend to communicate with backend

---

## 📁 Repository Structure

```sh
├── frontend
│   └── agrofrost-hub
│       ├── .env
│       ├── .eslintrc.cjs
│       ├── .gitignore
│       ├── index.html
│       ├── package-lock.json
│       ├── package.json
│       ├── postcss.config.js
│       ├── README.md
│       ├── src
│       │   ├── App.css
│       │   ├── App.jsx
│       │   ├── components
│       │   │   ├── About.jsx
│       │   │   ├── Contact.jsx
│       │   │   ├── CsDetails.jsx
│       │   │   ├── dashboard
│       │   │   │   ├── admin
│       │   │   │   │   ├── AdminBooking.jsx
│       │   │   │   │   ├── AdminDatabase.jsx
│       │   │   │   │   ├── AdminOverView.jsx
│       │   │   │   │   ├── AdminPayment.jsx
│       │   │   │   │   ├── AdminProfile.jsx
│       │   │   │   │   ├── AdminStorage.jsx
│       │   │   │   │   ├── AllReports.jsx
│       │   │   │   │   └── OwnerProfileModal.jsx
│       │   │   │   ├── Dashboard.jsx
│       │   │   │   ├── owner
│       │   │   │   │   ├── AllReportOwner.jsx
│       │   │   │   │   ├── OwnerBooking.jsx
│       │   │   │   │   ├── OwnerOverview.jsx
│       │   │   │   │   ├── OwnerPayment.jsx
│       │   │   │   │   └── OwnerProfile.jsx
│       │   │   │   ├── SidebarDashboard.jsx
│       │   │   │   └── user
│       │   │   │       ├── UserAllReports.jsx
│       │   │   │       ├── UserBooking.jsx
│       │   │   │       ├── UserOverView.jsx
│       │   │   │       ├── UserPayment.jsx
│       │   │   │       └── UserProfile.jsx
│       │   │   ├── FeatureSection.jsx
│       │   │   ├── Footer.jsx
│       │   │   ├── guards
│       │   │   │   └── AuthGuard.jsx
│       │   │   ├── HeroSection.jsx
│       │   │   ├── Home.jsx
│       │   │   ├── Layout.jsx
│       │   │   ├── Login.jsx
│       │   │   ├── LoginForms
│       │   │   │   ├── AdminLogin.jsx
│       │   │   │   ├── CustomerLogin.jsx
│       │   │   │   └── OwnerLogin.jsx
│       │   │   ├── Navbar.jsx
│       │   │   ├── Register.jsx
│       │   │   ├── RegisterForms
│       │   │   │   ├── CustomerRegistration.jsx
│       │   │   │   └── OwnerRegistration.jsx
│       │   │   └── StorageDetailsCard.jsx
│       │   ├── index.css
│       │   └── main.jsx
│       ├── tailwind.config.js
│       └── vite.config.js
├── README.md
└── server
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
    │   ├── Otp.js
    │   └── Payment.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
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
        ├── 1712377492594_qr.jpg
        ├── 1712381388078_cold_storage_warehouse.jpg
        ├── 1712423598632_qr.jpg
        ├── 1712423671612_heroimg.jpeg
        ├── 1712423919883_cold_storage_warehouse.jpg
        ├── 1712477018901_qr.jpg
        ├── 1712477135775_cold_storage_warehouse.jpg
        ├── 1712490698308_qr.jpg
        ├── 1712490706660_qr.jpg
        ├── 1712495009926_cold_storage_warehouse.jpg
        └── 1712730859702_heroimg.jpeg

```

---

## 💻 Code Summary

<details><summary>\frontend\agrofrost-hub</summary>

| File | Summary |
| ---- | ------- |
| postcss.config.js |  The code defines a JavaScript object with a `plugins` property that contains two plugins: `tailwindcss` and `autoprefixer`. |
| tailwind.config.js |  The code defines a Tailwind CSS configuration file that specifies the content to be processed, the theme colors to be generated, and any plugins to be used. |
| vite.config.js |  The code defines a Vite configuration file that imports the React plugin, sets up environment variables for the project, and defines a custom define function to stringify environment variables. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src</summary>

| File | Summary |
| ---- | ------- |
| App.jsx |  The code defines a React component called `App` that renders a router with several routes, including a home page, a login page, a register page, and a dashboard page. The dashboard page has several sub-routes, including overview, profile, bookings, payments, and storage/database. The component also imports several other components and utilizes the `useState` hook from React to store user data in local storage. |
| main.jsx |  The code creates a React application by rendering the App component in the root element of the HTML document. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components</summary>

| File | Summary |
| ---- | ------- |
| About.jsx |  The code defines a React component called About that renders an about section with a left and right content column, featuring an image and text content, respectively. |
| Contact.jsx |  The code is a React component that renders a contact form with input fields for name, email, and message. When the form is submitted, it sends an HTTP POST request to an API endpoint with the form data, and displays a success or error message using the react-toastify library. |
| CsDetails.jsx |  The code is a React component that displays details of a storage unit, including its name, area, capacity, timings, and price. It also allows users to book the storage unit by filling out a form with their desired check-in and check-out dates, goods quantity, and payment details. The component uses the `useParams` hook from `react-router-dom` to retrieve the ID of the storage unit from the URL, and the `axios` library to make API requests to fetch the storage unit's details and save payment details. The component also includes a modal for booking the storage unit, which allows users to enter their desired check-in and check-out dates, goods quantity, and payment details. |
| FeatureSection.jsx |  The code defines a React component called FeatureSection that renders a section with a grid of three features, each featuring an image, title, and description. |
| Footer.jsx |  The code defines a React component called Footer that renders a footer element with a red background, a container, and a flexbox layout. It includes links to the About Us, Contact Us, and Privacy Policy pages. |
| HeroSection.jsx |  The code defines a React component called HeroSection that renders a hero section with a title, description, and image. |
| Home.jsx |  The code defines a React component named `Home` that renders a series of other components, including a hero section, storage details card, feature section, about section, and contact section. |
| Layout.jsx |  The code defines a React component called Layout that renders a Navbar, its children, and a Footer. |
| Login.jsx |  The code defines a functional component called LoginTabs that renders three login forms (Customer, Owner, and Admin) based on the currently active tab. The active tab is determined by the activeTab state variable, which is set to customer by default. The component also includes a button to switch between tabs and an image hidden on mobile devices. |
| Navbar.jsx |  The code defines a React component that renders a navigation bar with a logo, links to different pages, and a dropdown menu for mobile devices. It also includes a sidebar for mobile devices that displays the same links as the dropdown menu. |
| Register.jsx |  The code defines a React component called Register that renders two registration forms, one for customers and one for owners, based on the currently active tab. The active tab is controlled by a state variable activeTab and can be changed by clicking on the corresponding buttons. |
| StorageDetailsCard.jsx |  The code defines a React component called `StorageDetailsCard` that displays a list of storage units, including their name, address, price, and booking button. The component uses the `useState` hook to manage the state of the search term, sort by price high to low toggle, and the filtered and sorted data. It also uses the `axios` library to fetch the storage details from an API endpoint. The component has a search input, a toggle button for sorting the storage units by price high to low, and a booking button for each storage unit. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard\admin</summary>

| File | Summary |
| ---- | ------- |
| AdminBooking.jsx |  The code is a React component that displays a list of bookings for an admin user, allowing them to filter the bookings by various criteria such as booking ID, customer ID, CS ID, check-in and check-out dates, and booking status. The component also includes a button to send an invoice to the customer for each booking. |
| AdminDatabase.jsx |  The code fetches customer and owner data from an API endpoint using the Axios library, and displays it in a table with search functionality. |
| AdminOverView.jsx |  The code in question is a React component that renders a dashboard for an admin user, displaying various charts and statistics related to the platform's usage. |
| AdminPayment.jsx |  The code is a React component that displays a list of payments, with filters to search for specific payments based on various criteria such as payment ID, booking ID, customer ID, and payment date. The component fetches the payment data from an API endpoint using Axios, and then filters the data based on the user's input. The component also includes a toast message to display any errors that may occur during the fetching or filtering process. |
| AdminProfile.jsx |  The code is a React component that displays a form for an admin user to edit their profile information, including their full name, email, contact number, address, and account type. The form is fetched from the server using Axios, and the data is stored in the component's state. The component also includes a Save button that updates the user's profile information when clicked. |
| AdminStorage.jsx |  The code is a React component that displays a list of storage requests for approval and approved storage requests, along with the owner's profile information. It uses the `axios` library to fetch data from an API endpoint, and the `react-toastify` library to display toast messages. The component also includes a modal for displaying the owner's profile information. |
| AllReports.jsx |  The code is a React component that displays reports data for a specific time period (weekly, monthly, or yearly) based on user input. It fetches data from an API using Axios and displays it in a table format. The component also includes a pie chart and a line chart to visualize the data. Additionally, it allows users to download the reports data as a PDF file. |
| OwnerProfileModal.jsx |  The code defines a React component called OwnerProfileModal that renders a modal window with the owner's profile information, including their full name, email, and contact number. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard</summary>

| File | Summary |
| ---- | ------- |
| Dashboard.jsx |  The code defines a React component called Dashboard that renders a sidebar and a main content area, using the `Outlet` component from react-router-dom to render the current route. |
| SidebarDashboard.jsx |  The code defines a React component that renders a sidebar for the dashboard of a web application. It uses the `react-toastify` library to display toast notifications, and the `react-router-dom` library to handle routing. The component fetches user data from local storage and displays it in the sidebar. It also includes links to various pages within the dashboard, such as Overview Bookings and Payments Additionally, it includes a Profile link and a Sign out button. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard\owner</summary>

| File | Summary |
| ---- | ------- |
| AllReportOwner.jsx |  The code is a React component that displays reports data for an owner of a cold storage facility. It fetches data from an API and displays it in various charts, tables, and graphs. The component also allows the user to select a year and month to generate reports for that specific period. Additionally, it provides a button to download the reports as a PDF file. |
| OwnerBooking.jsx |  The code in the provided snippet is a React component that displays a list of bookings for an owner, allowing them to filter and sort the data based on various criteria. It also includes functionality to send invoices and mark bookings as visited. |
| OwnerOverview.jsx |  The code in the provided snippet is a React component that displays various charts and data related to a cold storage facility's booking and payment history, as well as its current capacity. It fetches this data from an API endpoint and uses Chart.js to render the charts. The component also includes a Toast container for displaying error messages. |
| OwnerPayment.jsx |  The code is a React component that displays a list of payments for an owner, allowing them to filter the payments by various criteria such as payment ID, booking ID, customer ID, and payment date. The component fetches the payments data from an API endpoint and displays it in a table format, with each row representing a payment. The component also includes a filter input field that allows the user to search for specific payments based on their criteria. |
| OwnerProfile.jsx |  The code is a React component that displays a profile page for an owner, allowing them to view and edit their personal information and cold storage details. It uses the `axios` library to make API requests to a backend server, and the `react-toastify` library to display toast notifications. The component also uses the `useState` hook to manage state variables, and the `useEffect` hook to fetch data from the backend upon component mounting. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard\user</summary>

| File | Summary |
| ---- | ------- |
| UserAllReports.jsx |  The code in question is a React component that displays reports data for a user, allowing the user to select a time period (weekly, monthly, or yearly) and view various charts and tables of data. The component also includes a button to download the reports data as a PDF file. |
| UserBooking.jsx |  The code in the provided snippet is a React component that displays a list of bookings for a user, along with filters to search and sort the bookings. It fetches the booking data from an API endpoint using Axios, sorts the bookings by status, and allows the user to filter the bookings based on various criteria such as booking ID, customer ID, CS ID, check-in and check-out dates, and booking status. The component also includes functionality to send an invoice to the customer and cancel a booking. |
| UserOverView.jsx |  The code is a React component that displays various charts and data related to a user's bookings, payments, and booking status. It fetches data from an API endpoint using axios and stores it in state variables. The component then uses the data to render charts and other information about the user's bookings and payments. |
| UserPayment.jsx |  The code fetches payment data from an API endpoint using Axios, sorts the data by status, and displays it in a table with filters for each column. |
| UserProfile.jsx |  The code is a React component that displays a user's profile information, including their name, email, contact number, and address. It also allows the user to edit their profile information and save it. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\guards</summary>

| File | Summary |
| ---- | ------- |
| AuthGuard.jsx |  The code defines a React component called `AuthGuard` that checks if the user is logged in and has the necessary permissions to access certain routes. If the user is not logged in or does not have the required permissions, they are redirected to the login page. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\LoginForms</summary>

| File | Summary |
| ---- | ------- |
| AdminLogin.jsx |  The code is a React component that renders a login form for an admin user. It includes functionality for logging in, resetting the password, and changing the password. |
| CustomerLogin.jsx |  The code is a React component that renders a login form for customers. It includes functionality for logging in, requesting a password reset, verifying an OTP sent via email, and changing the customer's password. |
| OwnerLogin.jsx |  The code is a React component that renders a login form for an owner, with the ability to reset the password using OTP (One-Time Password) verification. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\RegisterForms</summary>

| File | Summary |
| ---- | ------- |
| CustomerRegistration.jsx |  The code is a React component that renders a form for customer registration, with input fields for name, email, contact number, address, password, and confirm password. The form submits to an API endpoint using Axios, and displays a success or error message using Toastify. |
| OwnerRegistration.jsx |  The code defines a React component for owner registration, which includes a form to collect information such as full name, email, contact number, QR code, password, and confirm password. The form submits the data to an API endpoint using Axios, and displays a success or error message using Toastify. |

</details>

---

<details><summary>\server\controller</summary>

| File | Summary |
| ---- | ------- |
| AdminController.js |  This code is a Node.js API for an e-commerce website that provides various endpoints for managing users, bookings, payments, and reports. The primary function of this code is to provide a RESTful API for the frontend application to interact with the database and perform CRUD operations.The code imports several modules, including Express, JSON Web Tokens (JWT), bcrypt, and Nodemailer, which are used for authentication, password hashing, email sending, and other functionality. It also defines several routes for different endpoints, such as /register, /login, /booking/all, /payment/all, and /chart/all.The router.post() method is used to handle HTTP POST requests, while the router.get() method is used to handle HTTP GET requests. The authenticateToken middleware is used to verify the JWT token in the request header before allowing access to certain endpoints.The code also includes functions for generating OTPs (one-time passwords) for password reset, verifying OTPs, and changing passwords. It also includes routes for retrieving data for reports, such as weekly, monthly, and yearly booking and payment data. |
| ColdStorageOwnerController.js |  This code defines a Node.js RESTful API for a cold storage facility management system. It includes routes for cold storage owner registration, login, and profile details, as well as routes for booking and payment of cold storage facilities. The API also includes routes for generating reports on the usage of cold storage facilities by month, year, or week. Additionally, it includes a forgot password feature, OTP verification, and password reset functionality. |
| CustomerController.js |  The code is a Node.js application that provides various endpoints for managing customer registrations, bookings, and payments for cold storage facilities. It uses Express.js as the web framework, MongoDB as the database, and JWT for authentication. The code also includes a middleware function for authenticating requests and a router for handling incoming requests.The primary function of the code is to provide a RESTful API for managing customer registrations, bookings, and payments for cold storage facilities. It allows customers to register themselves, log in, update their details, and view their bookings and payments. It also provides an endpoint for generating an OTP for password reset and verifying the OTP. Additionally, it includes a route for checking capacity for a given date range and cs_id, a route for checking capacity for the current date and cs_id, and a route for generating a weekly report with mandatory c_id filter, a route for generating a monthly report with mandatory c_id filter, and a route for generating a yearly report with mandatory c_id filter. |

</details>

---

<details><summary>\server\db</summary>

| File | Summary |
| ---- | ------- |
| Connection.js |  The code establishes a connection to a MongoDB database using the mongoose library, with the primary function of connecting to the database and logging a success message if successful. |

</details>

---

<details><summary>\server\middlewares</summary>

| File | Summary |
| ---- | ------- |
| authentication.js |  The code defines a function called `authenticateToken` that verifies a JSON Web Token (JWT) and extracts the user information from it, returning an error response if the token is invalid or expired. |

</details>

---

<details><summary>\server\model</summary>

| File | Summary |
| ---- | ------- |
| Admin.js |  The code defines a MongoDB schema for an Admin model, with fields for an ID, full name, email, contact number, address, password, and role. |
| Booking.js |  The code defines a Booking model in MongoDB using Mongoose, with fields for booking ID, customer ID, check-in and check-out dates, goods quantity, and status. |
| ColdStorage.js |  The code defines a schema for a Cold Storage model in MongoDB, including fields for owner ID, name, image, area, capacity, address, price, time, and status, as well as a reference to the owner model. |
| ColdStorageOwner.js |  The code defines a schema and model for a Cold Storage Owner in MongoDB, using the mongoose library, with fields for owner ID, full name, email, contact number, QR code, password, and role. |
| Customer.js |  The code defines a MongoDB schema for a Customer model, with fields for customer ID, full name, email, contact number, address, and password, as well as a role field with a default value of user |
| Otp.js |  The code defines a Mongoose schema for an OTP (One-Time Password) model, with fields for email, otp, expiration date, and verification status. |
| Payment.js |  The code defines a Payment model in MongoDB using Mongoose, with fields for payment ID, business ID, date, amount, customer service ID, and customer ID. |

</details>

---

<details><summary>\server\routes</summary>

| File | Summary |
| ---- | ------- |
| AdminRouter.js |  The code defines an Express.js router that routes requests to the AdminController. |
| ColdstorageOwnerRouter.js |  The code defines an Express.js router that uses a ColdStorageOwnerController to handle requests for the owner endpoint. |
| CustomerRouter.js |  The code defines an Express.js router that uses the CustomerController to handle requests for the user endpoint. |

</details>

---

<details><summary>\server</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code defines an Express.js server that listens on port 3000 and routes incoming requests to different API endpoints based on the request path, using middleware for JSON parsing, URL encoding, and CORS support. |

</details>

---

## 🚀 Getting Started

 Getting Started with AgroFrost Hub<br>=====================================

AgroFrost Hub is a full-stack web application built using React and Node.js. The frontend provides a user interface for customers to book cold storage units, while the backend handles API requests and database interactions. In this guide, we will walk you through the steps to get started with AgroFrost Hub.

1. Clone the Repository
-------------------------

First, clone the AgroFrost Hub repository from GitHub to your local machine. You can do this by running the following command in your terminal:
```bash
git clone https://github.com/agrofrost-hub/agrofrost-hub.git
```
2. Install Dependencies
-----------------------

Next, navigate to the `frontend` directory and install the dependencies for the frontend using npm:
```bash
cd agrofrost-hub/frontend
npm install
```
Similarly, navigate to the `server` directory and install the dependencies for the backend using npm:
```bash
cd agrofrost-hub/server
npm install
```
3. Set Up Environment Variables
-------------------------------

AgroFrost Hub uses environment variables to store sensitive information such as API keys and database credentials. To set up these variables, create a new file called `.env` in

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
