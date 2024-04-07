
  <div align="center">
  <h1 align="center">AgroFrost Hub</h1>
  <h3>Codebase for the AgroFrost Hub platform</h3>
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

 This is a full-stack web application with a frontend and backend, built using React and Node.js. The frontend is a single-page application (SPA) that provides a user interface for customers to book cold storage units, while the backend is responsible for managing the data and providing APIs for the frontend to interact with. The application uses a MongoDB database to store customer and cold storage unit information, and a JWT authentication system to secure the API endpoints. The frontend is built using Tailwind CSS and Vite, while the backend uses Express.js and Mongoose.

---

## 🌟 Features

 Here is a list of features for the project:<br>
* User authentication (JWT)
* Cold storage unit booking and management
* Customer profile management
* Payment processing
* Admin dashboard with data visualization
* API endpoints for frontend interaction
* Single-page application (SPA) frontend built using React and Tailwind CSS
* Backend built using Node.js, Express.js, and Mongoose
* MongoDB database for storing customer and cold storage unit information

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
│       │   │   │   │   └── OwnerProfileModal.jsx
│       │   │   │   ├── Dashboard.jsx
│       │   │   │   ├── owner
│       │   │   │   │   ├── OwnerBooking.jsx
│       │   │   │   │   ├── OwnerOverview.jsx
│       │   │   │   │   ├── OwnerPayment.jsx
│       │   │   │   │   └── OwnerProfile.jsx
│       │   │   │   ├── SidebarDashboard.jsx
│       │   │   │   └── user
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
        ├── 1712335935941_select.png
        ├── 1712377492594_qr.jpg
        ├── 1712381388078_cold_storage_warehouse.jpg
        ├── 1712423598632_qr.jpg
        ├── 1712423671612_heroimg.jpeg
        └── 1712423919883_cold_storage_warehouse.jpg

```

---

## 💻 Code Summary

<details><summary>\frontend\agrofrost-hub</summary>

| File | Summary |
| ---- | ------- |
| postcss.config.js |  The code defines a JavaScript object with a `plugins` property that contains two plugins: `tailwindcss` and `autoprefixer`. |
| tailwind.config.js |  The code defines a Tailwind CSS configuration file that specifies the content to be processed, the theme colors and their corresponding values, and the plugins to be used. |
| vite.config.js |  The code defines a Vite configuration file that imports the React plugin and sets environment variables for the project. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src</summary>

| File | Summary |
| ---- | ------- |
| App.jsx |  The code defines a React application with a router that routes users to different pages based on their role. It also includes components for authentication, user profile, and dashboard pages. |
| main.jsx |  The code creates a React application by rendering the App component in the root element of the HTML document. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components</summary>

| File | Summary |
| ---- | ------- |
| About.jsx |  The code defines a React component called About that renders an about section with a left and right content column, featuring an image and two paragraphs of text. |
| Contact.jsx |  The code is a React component that renders a contact form with name, email, and message fields. It also includes a toast notification system using the react-toastify library. When the form is submitted, it sends an HTTP POST request to an API endpoint with the form data and displays a success or error message depending on the response from the server. |
| CsDetails.jsx |  The code is a React component that displays details of a storage unit, including its name, area, capacity, timings, and price. It also includes a booking modal that allows users to book the storage unit for a specific period of time. The component uses the `useParams` hook from `react-router-dom` to retrieve the ID of the storage unit from the URL, and the `useEffect` hook to fetch the storage unit's details from an API endpoint. The component also uses the `axios` library to make HTTP requests to the API. |
| FeatureSection.jsx |  The code is a React component that renders a section with three features, each featuring an image, title, and description. |
| Footer.jsx |  The code defines a React component called Footer that renders a footer element with a red background, a container, and a flexbox layout. It includes links to the About Us, Contact Us, and Privacy Policy pages. |
| HeroSection.jsx |  The code defines a React component called HeroSection that renders a hero section with a title, description, and image. |
| Home.jsx |  The code defines a React component named `Home` that renders a series of other components, including a hero section, storage details card, feature section, about section, and contact section. |
| Layout.jsx |  The code defines a React component called Layout that renders a Navbar, its children, and a Footer. |
| Login.jsx |  The code defines a functional component called LoginTabs that renders three login forms (Customer, Owner, and Admin) in separate tabs. The active tab is determined by the activeTab state variable, which is set to customer by default. The component also includes an image on desktop screens but not on mobile. |
| Navbar.jsx |  The code defines a React component for a navigation bar that displays the user's profile information and provides links to various pages on the website. The component uses the `useState` hook to manage the state of the sidebar, which is displayed on mobile devices only. The sidebar can be opened and closed by clicking the hamburger menu button in the top right corner of the navigation bar. |
| Register.jsx |  The code defines a React component called Register that renders two registration forms, one for customers and one for owners, based on the active tab. The active tab is determined by the activeTab state variable, which is set to customer by default. The component also includes a button to switch between the two tabs. |
| StorageDetailsCard.jsx |  The code defines a React component called `StorageDetailsCard` that displays a list of storage units, along with a search bar and a toggle button to sort the list by price. The component fetches data from an API endpoint using Axios, filters and sorts the data based on the search term and sort order, and renders the filtered and sorted data in a grid layout. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard\admin</summary>

| File | Summary |
| ---- | ------- |
| AdminBooking.jsx |  The code is a React component that displays a list of bookings, with filters to search for specific bookings based on various criteria such as booking ID, customer ID, CS ID, check-in and check-out dates, and goods quantity. The component fetches the booking data from an API endpoint using Axios, and then filters the data based on the user's input. The filtered data is then displayed in a grid layout. |
| AdminDatabase.jsx |  The code fetches customer and owner data from an API endpoint using the Axios library, and displays it in a table. It also includes a search bar to filter the data based on the user's input. |
| AdminOverView.jsx |  The code is a React component that displays various charts and data related to the admin dashboard. It fetches data from an API endpoint using axios, and then uses Chart.js to render the charts. The component also includes a toast notification system using react-toastify. |
| AdminPayment.jsx |  The code in this file is a React component that displays a list of payments, with the ability to filter the list by various criteria such as payment ID, booking ID, CS ID, customer ID, and payment date. The component fetches the payment data from an API endpoint using Axios, and then filters the data based on the user's input. The filtered data is then displayed in a grid layout. |
| AdminProfile.jsx |  The code is a React component that displays a form for an admin user to edit their profile information, including name, email, contact number, address, and account type. The form is fetched from an API endpoint using Axios, and the data is stored in state using the `useState` hook. The component also includes a Save button that updates the profile information when clicked, using the `handleSave` function. |
| AdminStorage.jsx |  The code is a React component that displays a list of storage requests for approval and approved storage requests, along with the owner's profile information. It uses the `axios` library to fetch data from an API endpoint, and the `react-toastify` library to display toast messages. The component also includes a modal for displaying the owner's profile information. |
| OwnerProfileModal.jsx |  The code defines a React component called OwnerProfileModal, which renders a modal window with the owner's profile information. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard</summary>

| File | Summary |
| ---- | ------- |
| Dashboard.jsx |  The code defines a React component called Dashboard that renders a sidebar and a main content area, using the `Outlet` component from react-router-dom to render the current route's content. |
| SidebarDashboard.jsx |  The code defines a functional component named `SidebarDashboard` that renders a sidebar for a dashboard. It uses React Hooks, including `useState`, `useEffect`, and `useRef`, to manage state and sidebar visibility. The component also imports various icons from the Font Awesome library and utilizes the `react-toastify` library for displaying toasts. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard\owner</summary>

| File | Summary |
| ---- | ------- |
| OwnerBooking.jsx |  The code is a React component that displays a list of bookings for an owner, allowing them to filter the bookings by various criteria such as booking ID, customer ID, CS ID, check-in and check-out dates, and goods quantity. The component fetches the booking data from an API endpoint using Axios, and filters the data based on the user's input. It also displays a toast message if there are any errors while fetching or filtering the data. |
| OwnerOverview.jsx |  The code is a React component that displays various statistics and charts related to a user's cold storage profile, including the total number of bookings, the last booking ID, and the last payment made by the user. The component fetches data from an API endpoint using axios and Chart.js, and then renders the data in a bar chart and line chart. |
| OwnerPayment.jsx |  The code is a React component that displays a list of payments for an owner, allowing the owner to filter the payments by various criteria such as payment ID, booking ID, CS ID, customer ID, and payment date. The component fetches the payments data from an API endpoint using Axios, and then filters the data based on the user's input. It also displays a toast message if there is an error fetching the data or filtering the data. |
| OwnerProfile.jsx |  The code is a React component that displays a profile page for an owner, allowing them to view and edit their personal information and storage details. It fetches data from an API endpoint using Axios, and updates the state with the response data. The component also includes functionality for uploading images and updating the storage details. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard\user</summary>

| File | Summary |
| ---- | ------- |
| UserBooking.jsx |  The code fetches booking data from an API endpoint using Axios, and displays it in a table with filters for booking ID, customer ID, CS ID, check-in date, and check-out date. The filters are applied to the booking data using the `filter` method, and the filtered data is displayed in a grid layout. |
| UserOverView.jsx |  The code is a React component that displays various charts and statistics related to a user's bookings and payments. It fetches data from an API endpoint using Axios, and then uses Chart.js to render the charts. The component also includes a ToastContainer for displaying error messages. |
| UserPayment.jsx |  The code is a React component that displays a list of payments made by a user, with the ability to filter the payments based on various criteria such as payment ID, booking ID, CS ID, customer ID, and payment date. |
| UserProfile.jsx |  The code is a React component that displays a user's profile information, including their name, email, contact number, and address. It also allows the user to edit their profile information and save it. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\guards</summary>

| File | Summary |
| ---- | ------- |
| AuthGuard.jsx |  The code defines a React component called `AuthGuard` that checks if the user is logged in and has the required role to access certain routes. If the user is not logged in or does not have the required role, it redirects them to the login page. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\LoginForms</summary>

| File | Summary |
| ---- | ------- |
| AdminLogin.jsx |  The code defines a React component for an admin login form, which allows users to enter their email and password to authenticate with the application. The form submits a POST request to an API endpoint using Axios, and upon successful authentication, redirects the user to the dashboard page. |
| CustomerLogin.jsx |  The code defines a React component for customer login, which includes a form with email and password fields, a submit button, and a toast message for displaying success or error messages. The component also imports various dependencies such as axios, react-toastify, and react-router-dom. |
| OwnerLogin.jsx |  The code defines a React component for an owner login form, which allows the user to enter their email and password and submit the form to log in. The form is validated using the `useState` hook to store the email and password values, and the `axios` library to make a POST request to the server with the entered data. The response from the server is then handled to display a success or error message using the `toast` library. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\RegisterForms</summary>

| File | Summary |
| ---- | ------- |
| CustomerRegistration.jsx |  The code is a React component that renders a form for customer registration, with input fields for full name, email, contact number, address, password, and confirm password. The form submits to an API endpoint using Axios, and displays a success or error message using React Toastify. |
| OwnerRegistration.jsx |  The code defines a React component for owner registration, which includes a form for inputting personal information and a QR code. The form data is sent to the server using Axios, and the response is displayed as a toast notification. |

</details>

---

<details><summary>\server\controller</summary>

| File | Summary |
| ---- | ------- |
| AdminController.js |  The code defines a set of routes for an Express.js API that provides CRUD operations for administrators, bookings, payments, and other data. It also includes authentication middleware and functions to generate IDs and fetch data for charts. |
| ColdStorageOwnerController.js |  The code defines a router for a cold storage facility management system, which includes routes for registration, login, and booking/payment. It also includes middleware for authentication and authorization. The primary function of the code is to provide a RESTful API for managing cold storage facilities and their associated bookings and payments. |
| CustomerController.js |  The code defines a Node.js API for a customer registration and login system, as well as routes for managing customer details, storage, bookings, payments, and sending emails. The primary function of the code is to provide a RESTful API for a customer management system, with features such as customer registration, login, updating customer details, fetching customer data, creating orders, saving payments, and sending emails. |

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
| authentication.js |  The code defines a function called authenticateToken that verifies a JSON Web Token (JWT) and extracts the user information from it, returning an error response if the token is invalid or expired. |

</details>

---

<details><summary>\server\model</summary>

| File | Summary |
| ---- | ------- |
| Admin.js |  The code defines a MongoDB schema for an Admin model, with fields for an ID, full name, email, contact number, address, password, and role. |
| Booking.js |  The code defines a Booking model in MongoDB using Mongoose, with fields for booking ID, customer ID, check-in and check-out dates, and the number of goods. |
| ColdStorage.js |  The code defines a schema for a Cold Storage model in MongoDB, including fields for owner ID, name, image, area, capacity, address, price, time, and status, as well as a reference to the owner model. |
| ColdStorageOwner.js |  The code defines a schema and model for a Cold Storage Owner in a MongoDB database, with fields for owner ID, full name, email, contact number, QR code, password, and role. |
| Customer.js |  The code defines a MongoDB schema for a Customer model, with fields for customer ID, full name, email, contact number, address, password, and role. |
| Payment.js |  The code defines a Payment model in MongoDB using Mongoose, with fields for payment ID, business ID, date, amount, customer service ID, and customer ID. |

</details>

---

<details><summary>\server\routes</summary>

| File | Summary |
| ---- | ------- |
| AdminRouter.js |  The code defines an Express.js router that routes requests to the AdminController when the URL starts with admin |
| ColdstorageOwnerRouter.js |  The code defines an Express.js router that uses the ColdStorageOwnerController to handle requests for the owner endpoint. |
| CustomerRouter.js |  The code defines an Express.js router that uses the CustomerController to handle requests for the user endpoint. |

</details>

---

<details><summary>\server</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code defines an Express.js server that listens on port 3000 and routes incoming requests to different API endpoints based on the URL path, using middleware for JSON parsing, CORS support, and error handling. |

</details>

---

## 🚀 Getting Started

 Getting Started with AgroFrost Hub<br>=====================================

AgroFrost Hub is a full-stack web application built using React and Node.js. The frontend provides a user interface for customers to book cold storage units, while the backend manages the data and provides APIs for the frontend to interact with. In this guide, we will walk you through the steps to get started with AgroFrost Hub.

1. Clone the Repository
-------------------------

First, clone the AgroFrost Hub repository from GitHub to your local machine. You can do this by running the following command in your terminal:
```bash
git clone https://github.com/agrofrost/agrofrost-hub.git
```
2. Install Dependencies
-----------------------

Next, navigate to the `frontend` directory and install the dependencies for the frontend using npm or yarn:
```bash
cd agrofrost-hub/frontend
npm install
```
3. Set up Environment Variables
-------------------------------

Create a new file called `.env` in the root directory of the project and add the following environment variables:
```bash
MONGO_URI=mongodb://localhost:27017/agrofrost-hub
JWT_SECRET=your-secret-key
```
Replace `your-

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
