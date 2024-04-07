
  <div align="center">
  <h1 align="center">AgroFrostHub</h1>
  <h3>Codebase for the AgroFrostHub platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-Node.js-004E89?logo=Node.js&style=flat" alt='Node.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Express.js-004E89?logo=Express.js&style=flat" alt='Express.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-MongoDB-004E89?logo=MongoDB&style=flat" alt='MongoDB\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React.js-004E89?logo=React.js&style=flat" alt='React.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Tailwind%20CSS-004E89?logo=Tailwind%20CSS&style=flat" alt='Tailwind CSS\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Vite-004E89?logo=Vite&style=flat" alt='Vite"' />
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

 This is a full-stack web application with a frontend and backend. The frontend is built using React, and the backend is built using Node.js and Express. The project includes a RESTful API for handling requests and responses, as well as a MongoDB database for storing data. The frontend has a responsive design and uses Tailwind CSS for styling. The backend has a user authentication system and handles payment processing using Stripe. The project also includes a chatbot using Dialogflow and a QR code scanner using Instascan.

---

## 🌟 Features

 Here is a list of features for the project:<br>
Frontend:

* Responsive design using Tailwind CSS
* User authentication system using JWT tokens
* Payment processing using Stripe
* Chatbot using Dialogflow
* QR code scanner using Instascan

Backend:

* RESTful API for handling requests and responses
* MongoDB database for storing data
* User authentication system using JWT tokens
* Payment processing using Stripe
* Integration with Dialogflow for chatbot functionality
* Integration with Instascan for QR code scanning functionality

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
        ├── 1712335935941_select.png
        ├── 1712377492594_qr.jpg
        ├── 1712381388078_cold_storage_warehouse.jpg
        ├── 1712423598632_qr.jpg
        ├── 1712423671612_heroimg.jpeg
        ├── 1712423919883_cold_storage_warehouse.jpg
        ├── 1712477018901_qr.jpg
        ├── 1712477135775_cold_storage_warehouse.jpg
        ├── 1712490698308_qr.jpg
        ├── 1712490706660_qr.jpg
        └── 1712495009926_cold_storage_warehouse.jpg

```

---

## 💻 Code Summary

<details><summary>\frontend\agrofrost-hub</summary>

| File | Summary |
| ---- | ------- |
| postcss.config.js |  The code defines a JavaScript object with a `plugins` property that contains two plugins: `tailwindcss` and `autoprefixer`. |
| tailwind.config.js |  The code defines a Tailwind CSS configuration file, which specifies the content to be styled, the theme colors and extend options, and the plugins to be used. |
| vite.config.js |  The code defines a Vite configuration file that imports the React plugin and sets environment variables for the project. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src</summary>

| File | Summary |
| ---- | ------- |
| App.jsx |  The code defines a React application that uses the `react-router-dom` library to manage client-side routing. It includes several routes for different pages, including a home page, a login page, a register page, and a dashboard page with various sub-routes for user profiles, bookings, payments, and overviews. The code also includes a guard component called `AuthGuard` that checks the user's role before rendering certain components. |
| main.jsx |  The code creates a React app by rendering the App component to the root element with ReactDOM.createRoot(). |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components</summary>

| File | Summary |
| ---- | ------- |
| About.jsx |  The code defines a React component called About that renders an about section with a left and right content column, featuring an image and two paragraphs of text. |
| Contact.jsx |  The code is a React component that renders a contact form with name, email, and message fields. When the form is submitted, it sends an HTTP POST request to an API endpoint with the form data, and displays a success or error message using the `toast` library. |
| CsDetails.jsx |  The code is a React component that displays details of a storage unit, including its name, area, capacity, timings, and price. It also includes a booking modal that allows users to make a reservation for the storage unit. The component fetches data from an API endpoint using axios, and it uses react-toastify to display error messages if any occur during the booking process. |
| FeatureSection.jsx |  The code is a React component that renders a section with three features, each featuring an image, title, and description. |
| Footer.jsx |  The code defines a React component called Footer that renders a footer element with a red background, containing copyright information and links to the About Us, Contact Us, and Privacy Policy pages. |
| HeroSection.jsx |  The code defines a React component called HeroSection that renders a hero section with a title, description, and image. |
| Home.jsx |  The code defines a React component named `Home` that renders a collection of other components, including a hero section, storage details card, feature section, about section, and contact section. |
| Layout.jsx |  The code defines a React component called Layout that renders a Navbar, its children, and a Footer. |
| Login.jsx |  The code defines a functional component named `LoginTabs` that renders a login form with three tabs (customer, owner, and admin) using the `useState` hook to manage the active tab. The component also includes an image on desktop screens but hides it on mobile devices. |
| Navbar.jsx |  The code defines a React component that renders a navigation bar with a logo, links to different pages, and a dropdown menu for mobile devices. It also includes a sidebar for mobile devices that can be toggled open and closed. |
| Register.jsx |  The code defines a React component called Register that renders two registration forms, one for customers and one for owners, based on the active tab. The component uses the `useState` hook to keep track of the active tab and the `handleTabChange` function to update the active tab when the user clicks on a button. |
| StorageDetailsCard.jsx |  The code is a React component that displays a list of storage units, including their name, address, price, and booking button. It also includes a search bar and a toggle button to sort the storage units by price (high to low or low to high). The component fetches data from an API endpoint using axios and uses the `useState` hook to manage state variables such as the search term, sort order, and filtered and sorted data. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard\admin</summary>

| File | Summary |
| ---- | ------- |
| AdminBooking.jsx |  The code is a React component that displays a list of bookings, allowing the user to filter the list by various criteria such as booking ID, customer ID, CS ID, check-in date, and check-out date. The component also includes a button to send an invoice to the customer for each booking. |
| AdminDatabase.jsx |  The code fetches customer and owner data from an API endpoint, filters the data based on user input, and displays it in a table. |
| AdminOverView.jsx |  The code is a React component that displays various charts and data related to the admin dashboard. It fetches data from an API endpoint using axios, and then uses Chart.js to render the charts. The component also includes a toast notification system using react-toastify. |
| AdminPayment.jsx |  The code is a React component that displays a list of payments, allowing the user to filter the payments by various criteria such as payment ID, booking ID, CS ID, customer ID, and payment date. The component uses the `axios` library to fetch data from an API endpoint, and it also uses the `react-toastify` library to display error messages if there are any issues with the API request. |
| AdminProfile.jsx |  The code is a React component that displays a profile page for an admin user, allowing them to edit their personal information and save changes. |
| AdminStorage.jsx |  The code is a React component that displays a list of storage units for an admin to approve or disapprove. It fetches data from an API endpoint and displays it in a grid layout, with buttons to approve or disapprove each storage unit. Additionally, it includes a modal component to display the owner's profile information when the View Profile button is clicked. |
| OwnerProfileModal.jsx |  The code defines a React component called OwnerProfileModal that renders a modal window with the owner's profile information, including their full name, email, and contact number. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard</summary>

| File | Summary |
| ---- | ------- |
| Dashboard.jsx |  The code defines a React component called Dashboard that renders a sidebar and a main content area, using the `Outlet` component from react-router-dom to render the current route's content. |
| SidebarDashboard.jsx |  The code defines a React component that renders a sidebar for the dashboard page of a web application. It uses the `react-toastify` library to display toast notifications, and the `react-router-dom` library to manage navigation between routes. The component fetches user data from local storage and updates the state with the fetched data. It also handles window resizing and clicks outside the sidebar to close it. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard\owner</summary>

| File | Summary |
| ---- | ------- |
| OwnerBooking.jsx |  The code fetches booking data from an API endpoint and displays it on the screen, allowing the user to filter the data by various criteria. |
| OwnerOverview.jsx |  The code is a React component that displays a dashboard for an owner, including a summary of their booking and payment data, as well as charts showing the trend of these data over time. |
| OwnerPayment.jsx |  The code is a React component that displays a list of payments for an owner, allowing them to filter the payments by various criteria such as payment ID, booking ID, CS ID, customer ID, and payment date. The component fetches the payments data from an API endpoint using Axios, and then filters the data based on the user's input. It also displays a toast message if there is an error while fetching the data. |
| OwnerProfile.jsx |  The code in the provided snippet is a React component that displays a profile page for an owner, allowing them to view and edit their personal information and storage details. It uses the `axios` library to make API requests to a backend server, and it also uses the `react-toastify` library to display toast messages. The component has several input fields, select boxes, and buttons, and it also includes a file upload feature for the owner's profile image. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\dashboard\user</summary>

| File | Summary |
| ---- | ------- |
| UserBooking.jsx |  The code fetches booking data from an API endpoint using Axios, filters the data based on user input, and displays the filtered data in a grid. It also includes a button to send an invoice for a specific booking. |
| UserOverView.jsx |  The code is a React component that displays a dashboard for a user, including a summary of their booking and payment data. It fetches this data from an API endpoint using axios, and then displays it in a bar chart format using the react-chartjs-2 library. The component also includes a toast notification system using react-toastify. |
| UserPayment.jsx |  The code is a React component that displays a list of payments made by a user, with filters to search for specific payments based on their ID, booking ID, CS ID, customer ID, and payment date. The component fetches the payments data from an API endpoint using Axios, and then filters the data based on the user's input. |
| UserProfile.jsx |  The code is a React component that displays a user's profile information, including their name, email, contact number, and address. It also allows the user to edit their profile information and save it. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\guards</summary>

| File | Summary |
| ---- | ------- |
| AuthGuard.jsx |  The code defines a React component called AuthGuard that checks if the user is logged in and has the appropriate role to access the current page. If the user is not logged in or does not have the required role, it redirects them to the login page. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\LoginForms</summary>

| File | Summary |
| ---- | ------- |
| AdminLogin.jsx |  The code is a React component that renders a login form for an admin user, with the ability to reset the password using OTP (One-Time Password) verification. |
| CustomerLogin.jsx |  The code is a React component that renders a login form for a customer to enter their email and password. It also includes functionality for forgot password, verifying OTP, and changing password. |
| OwnerLogin.jsx |  The code is a React component that renders a login form for an owner, allowing them to enter their email and password to log in. It also includes functionality for forgot password, where the user can enter their email to receive an OTP (one-time password) via SMS or email, and then verify the OTP to reset their password. |

</details>

---

<details><summary>\frontend\agrofrost-hub\src\components\RegisterForms</summary>

| File | Summary |
| ---- | ------- |
| CustomerRegistration.jsx |  The code is a React component that renders a form for customer registration, with input fields for full name, email, contact number, address, password, and confirm password. The form submits to an API endpoint using Axios, and displays a success or error message using React Toastify. |
| OwnerRegistration.jsx |  The code defines a React component for owner registration, which includes a form to input personal information and a QR code. The form submits data to an API endpoint using Axios, and displays a success or error message using Toastify. |

</details>

---

<details><summary>\server\controller</summary>

| File | Summary |
| ---- | ------- |
| AdminController.js |  The code defines a Node.js API for an admin panel, with routes for admin registration, login, update, and retrieval, as well as booking, payment, and customer data retrieval. It also includes functions for sending OTPs for password reset and verifying OTPs. |
| ColdStorageOwnerController.js |  The code defines a Node.js API for a cold storage facility management system, with routes for various functionalities such as registration, login, creating a new cold storage facility, updating details of a cold storage facility, and booking and payment. It also includes a forgot password feature, OTP verification, and changing password functionality. |
| CustomerController.js |  This code is a Node.js module that defines a set of routes for a web application, including customer registration, login, and booking management. The module also includes functionality for sending emails, generating OTPs for password reset, and verifying OTPs. The primary function of this code is to provide a RESTful API for managing customer data and bookings, as well as sending emails and generating OTPs for password reset. |

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
| ColdStorageOwner.js |  The code defines a schema and model for a Cold Storage Owner in MongoDB, using the mongoose library, with fields for owner ID, full name, email, contact number, QR code, password, and role. |
| Customer.js |  The code defines a Customer model in MongoDB using Mongoose, with fields for customer ID, full name, email, contact number, address, password, and role. |
| Otp.js |  The code defines a Mongoose schema for an OTP (One-Time Password) model, with fields for email, otp, expiration date, and verification status. |
| Payment.js |  The code defines a Payment model in MongoDB using Mongoose, with fields for payment ID, business ID, date, amount, customer service ID, and customer ID. |

</details>

---

<details><summary>\server\routes</summary>

| File | Summary |
| ---- | ------- |
| AdminRouter.js |  The code defines an Express.js router that mounts the AdminController at the admin route. |
| ColdstorageOwnerRouter.js |  The code defines an Express.js router that routes requests to the ColdStorageOwnerController for handling requests related to cold storage owners. |
| CustomerRouter.js |  The code defines an Express.js router that uses the CustomerController to handle requests for the user endpoint. |

</details>

---

<details><summary>\server</summary>

| File | Summary |
| ---- | ------- |
| server.js |  The code defines an Express.js server that listens on port 3000 and routes incoming requests to various API endpoints, including a root path handler and three separate routers for ColdstorageOwnerRouter, CustomerRouter, and AdminRouter. |

</details>

---

## 🚀 Getting Started

 Getting Started Guide<br>=========================

This guide will help you get started with the AgroFrost Hub project. It covers the basic setup and usage of the project, as well as some tips and tricks for working with the codebase.

### Setting up the Project

1. Clone the repository: `git clone https://github.com/AgroFrost/agrofrost-hub.git`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`
4. Start the client: `npm run start`

### Running the Application

1. Open a web browser and navigate to `http://localhost:3000`
2. Sign in using the login form on the top right corner
3. Once signed in, you can access the dashboard by clicking on the \Dashboard\ button on the sidebar

### Tips and Tricks

1. Use the \Dashboard\ button on the sidebar to access the dashboard
2. Use the \Booking\ button on the sidebar to access the booking page
3. Use the \Payment\ button on the sidebar to access the payment page
4. Use the \Profile\ button on the sidebar to access your profile page
5. Use the \Logout\ button on the top right corner to log

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
