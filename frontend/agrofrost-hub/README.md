
  <div align="center">
  <h1 align="center">AgroFrostHub Frontend</h1>
  <h3>Codebase for the AgroFrostHub Frontend platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=flat" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Vite-004E89?logo=Vite&style=flat" alt='Vite\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Tailwind%20CSS-004E89?logo=Tailwind%20CSS&style=flat" alt='Tailwind CSS\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-PostCSS-004E89?logo=PostCSS&style=flat" alt='PostCSS\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-ESLint-004E89?logo=ESLint&style=flat" alt='ESLint\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Autoprefixer-004E89?logo=Autoprefixer&style=flat" alt='Autoprefixer"' />
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

 This project appears to be a web application built using React, with a focus on providing a user-friendly interface for managing bookings and storage. The project includes a variety of components, including pages for the homepage, login, registration, and dashboard, as well as several subcomponents for each page. The project also includes a number of utility functions and classes for handling authentication and data manipulation.

---

## 🌟 Features

 Here is a list of features for the project:<br>
* User authentication (login, registration, and logout)
* Booking management (create, read, update, and delete)
* Storage management (create, read, update, and delete)
* Dashboard with various components for managing bookings and storage
* User-friendly interface for managing bookings and storage
* Utility functions and classes for handling authentication and data manipulation
* Support for multiple user types (admin, owner, and customer)
* Responsive design for mobile and desktop devices
* Customizable layout and styling using Tailwind CSS
* Integration with Vite for building and serving the application.

---

## 📁 Repository Structure

```sh
├── .env
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CsDetails.jsx
│   │   ├── dashboard
│   │   │   ├── admin
│   │   │   │   ├── AdminBooking.jsx
│   │   │   │   ├── AdminDatabase.jsx
│   │   │   │   ├── AdminOverView.jsx
│   │   │   │   ├── AdminPayment.jsx
│   │   │   │   ├── AdminProfile.jsx
│   │   │   │   ├── AdminStorage.jsx
│   │   │   │   └── OwnerProfileModal.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── owner
│   │   │   │   ├── OwnerBooking.jsx
│   │   │   │   ├── OwnerOverview.jsx
│   │   │   │   ├── OwnerPayment.jsx
│   │   │   │   └── OwnerProfile.jsx
│   │   │   ├── SidebarDashboard.jsx
│   │   │   └── user
│   │   │       ├── UserBooking.jsx
│   │   │       ├── UserOverView.jsx
│   │   │       ├── UserPayment.jsx
│   │   │       └── UserProfile.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── Footer.jsx
│   │   ├── guards
│   │   │   └── AuthGuard.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Home.jsx
│   │   ├── Layout.jsx
│   │   ├── Login.jsx
│   │   ├── LoginForms
│   │   │   ├── AdminLogin.jsx
│   │   │   ├── CustomerLogin.jsx
│   │   │   └── OwnerLogin.jsx
│   │   ├── Navbar.jsx
│   │   ├── Register.jsx
│   │   ├── RegisterForms
│   │   │   ├── CustomerRegistration.jsx
│   │   │   └── OwnerRegistration.jsx
│   │   └── StorageDetailsCard.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js

```

---

## 💻 Code Summary

<details><summary>Root</summary>

| File | Summary |
| ---- | ------- |
| postcss.config.js |  The code defines a JavaScript object with a `plugins` property that contains two plugins: `tailwindcss` and `autoprefixer`. |
| tailwind.config.js |  The code defines a Tailwind CSS configuration file that specifies the content to be processed, the theme colors and extend, and the plugins to be used. |
| vite.config.js |  The code defines a Vite configuration file that imports the React plugin and sets environment variables for the project. |

</details>

---

<details><summary>\src</summary>

| File | Summary |
| ---- | ------- |
| App.jsx |  The code defines a React application that uses the `react-router-dom` library to manage client-side routing. It includes several routes for different pages, including a home page, a login page, a register page, and a dashboard page with subroutes for various features such as profile, bookings, payments, and overview. The code also includes a guard component called `AuthGuard` that checks the user's role before rendering certain components. |
| main.jsx |  The code creates a React application by rendering the App component in the root element of the HTML document. |

</details>

---

<details><summary>\src\components</summary>

| File | Summary |
| ---- | ------- |
| About.jsx |  The code defines a React component called About that renders an about section with a left and right content column, featuring an image and two paragraphs of text. |
| Contact.jsx |  The code is a React component that renders a contact form with input fields for name, email, and message. When the form is submitted, it sends an HTTP POST request to an API endpoint with the form data, and displays a success or error message using the `toast` library. |
| CsDetails.jsx |  The code is a React component that displays details of a storage facility, including its name, area, capacity, timings, and price. It also includes a booking modal that allows users to make a booking for the storage facility. The component fetches data from an API endpoint using Axios and uses React Hooks to manage state and side effects. |
| FeatureSection.jsx |  The code defines a React component called FeatureSection that renders a section with three features, each represented by an image and a brief description. |
| Footer.jsx |  The code defines a React component called Footer that renders a footer element with a red background, a container, and a flexbox layout. It includes links to the About Us, Contact Us, and Privacy Policy pages. |
| HeroSection.jsx |  The code defines a React component called HeroSection, which renders a hero section with a title, description, and image. |
| Home.jsx |  The code defines a React component named `Home` that renders a series of other components, including a hero section, storage details card, feature section, about section, and contact section. |
| Layout.jsx |  The code defines a React component called Layout that renders a Navbar, its child components, and a Footer. |
| Login.jsx |  The code defines a functional component named LoginTabs that renders a login form with three tabs (customer, owner, and admin) using the `useState` hook to manage the active tab. The component also includes an image on desktop screens but hides it on mobile devices. |
| Navbar.jsx |  The code defines a React component that renders a navigation bar with a logo, links to different pages, and a dropdown menu for mobile devices. It also includes a sidebar for mobile devices that can be opened and closed by clicking on a button. |
| Register.jsx |  The code defines a React component called Register that renders two registration forms, one for customers and one for owners, using the `useState` hook to manage the active tab. The component also includes an image and a set of tabs to switch between the two forms. |
| StorageDetailsCard.jsx |  The code defines a React component called `StorageDetailsCard` that displays a list of storage units, along with a search bar and a toggle button to sort the list by price. The component fetches data from an API endpoint using Axios, filters and sorts the data based on the search term and sort order, and renders the filtered and sorted data in a grid layout. |

</details>

---

<details><summary>\src\components\dashboard\admin</summary>

| File | Summary |
| ---- | ------- |
| AdminBooking.jsx |  The code is a React component that displays a list of bookings, with the ability to filter the list by various criteria such as booking ID, customer ID, CS ID, check-in date, and check-out date. The component also includes a button to send an invoice to the customer for each booking. |
| AdminDatabase.jsx |  The code fetches customer and owner data from an API endpoint, displays it in a table, and allows the user to filter the data using a search bar. |
| AdminOverView.jsx |  The code is a React component that renders a dashboard for an admin user, displaying various statistics and charts related to the platform's data. It fetches data from an API endpoint using axios and displays it in a pie chart, bar chart, and line chart. The component also includes a toast notification system using react-toastify. |
| AdminPayment.jsx |  The code is a React component that displays a list of payments, with the ability to filter the list by various criteria such as payment ID, booking ID, CS ID, customer ID, and payment date. The component fetches the payment data from an API endpoint using Axios, and then filters the data based on the user's input. The filtered data is then displayed in a grid layout. |
| AdminProfile.jsx |  The code is a React component that displays a form for an admin user to update their personal information, including name, email, contact number, address, and account type. The form is fetched from an API endpoint using Axios, and the data is stored in state using the `useState` hook. The component also includes a Toastify notification system to display success or error messages when the form is submitted. |
| AdminStorage.jsx |  The code is a React component that displays a list of storage requests for approval and approved storage requests, along with the owner's profile information. It uses the `axios` library to fetch data from an API endpoint, and the `react-toastify` library to display toast messages. The component also includes a modal for displaying the owner's profile information. |
| OwnerProfileModal.jsx |  The code defines a React component called OwnerProfileModal that renders a modal window with the owner's profile information, including their full name, email, and contact number. |

</details>

---

<details><summary>\src\components\dashboard</summary>

| File | Summary |
| ---- | ------- |
| Dashboard.jsx |  The code defines a React component called Dashboard that renders a sidebar and a main content area, using the `Outlet` component from react-router-dom to render the current route. |
| SidebarDashboard.jsx |  The code defines a functional component named `SidebarDashboard` that renders a sidebar for a dashboard. It uses React hooks, such as `useState`, `useEffect`, and `useRef`, to manage state and sidebar visibility. The component also imports various dependencies, including `react-toastify`, `react-router-dom`, and `axios`. The sidebar is responsive and can be toggled open or closed on mobile devices. |

</details>

---

<details><summary>\src\components\dashboard\owner</summary>

| File | Summary |
| ---- | ------- |
| OwnerBooking.jsx |  The code is a React component that displays a list of bookings for an owner, allowing them to filter the bookings by various criteria such as booking ID, customer ID, CS ID, check-in date, and check-out date. The component also includes a button to send an invoice to the customer for each booking. |
| OwnerOverview.jsx |  The code is a React component that displays a dashboard for an owner, including various statistics and charts. It fetches data from an API endpoint using axios and uses Chart.js to render the charts. The component also includes a toast container for displaying error messages. |
| OwnerPayment.jsx |  The code is a React component that displays a list of payments for an owner, allowing them to filter the list by various criteria such as payment ID, booking ID, CS ID, customer ID, and payment date. The component fetches the data from an API endpoint using Axios, and then filters the data based on the user's input. |
| OwnerProfile.jsx |  The code in the provided snippet is a React component that displays a profile page for an owner, allowing them to view and edit their personal information and storage details. It uses the `axios` library to make API requests to a server, and the `react-toastify` library to display toast messages. The component fetches data from the server using the `fetchProfile` and `fetchColdStorageProfile` functions, and updates the state with the received data. It also includes input fields for editing the owner's personal information and storage details, as well as buttons for saving and updating the data. |

</details>

---

<details><summary>\src\components\dashboard\user</summary>

| File | Summary |
| ---- | ------- |
| UserBooking.jsx |  The code fetches booking data from an API endpoint using Axios, filters the data based on user input, and displays the filtered data in a grid. It also includes a button to send an invoice to the customer. |
| UserOverView.jsx |  The code is a React component that displays a dashboard for a user, including various statistics and charts. It fetches data from an API endpoint using axios, and then uses Chart.js to render the charts. The component also includes a toast notification system using react-toastify. |
| UserPayment.jsx |  The code is a React component that displays a list of payments made by a user, with the ability to filter the payments based on various criteria such as payment ID, booking ID, CS ID, customer ID, and payment date. The component fetches the payments data from an API endpoint using Axios, and then filters the data based on the user's input. The filtered data is then displayed in a grid layout. |
| UserProfile.jsx |  The code is a React component that displays a user's profile information, including their name, email, contact number, and address. It also allows the user to edit their profile information and save it. |

</details>

---

<details><summary>\src\components\guards</summary>

| File | Summary |
| ---- | ------- |
| AuthGuard.jsx |  The code defines a React component called `AuthGuard` that checks if the user is logged in and has the required role to access a protected route. If the user is not logged in or does not have the required role, it redirects them to the login page. |

</details>

---

<details><summary>\src\components\LoginForms</summary>

| File | Summary |
| ---- | ------- |
| AdminLogin.jsx |  The code is a React component that renders a login form for an admin user, with the ability to reset the password using OTP (One-Time Password) verification. It uses the `axios` library to make API calls and the `react-toastify` library to display toast messages. The component also uses the `react-router-dom` library to navigate between pages. |
| CustomerLogin.jsx |  The code is a React component for a customer login page that includes a form for entering email and password, as well as buttons for forgot password and login. It also includes modals for verifying OTP and changing password. |
| OwnerLogin.jsx |  The code is a React component for an owner login form that includes a forgot password feature, which allows the user to reset their password by entering their email address and receiving an OTP (one-time password) via SMS or email. The component also includes a modal for verifying the OTP and changing the password. |

</details>

---

<details><summary>\src\components\RegisterForms</summary>

| File | Summary |
| ---- | ------- |
| CustomerRegistration.jsx |  The code is a React component that renders a form for customer registration, with input fields for full name, email, contact number, address, password, and confirm password. The form submits the data to an API endpoint using Axios, and displays a success or error message using React Toastify. |
| OwnerRegistration.jsx |  The code defines a React component for owner registration, which includes a form with input fields for full name, email, contact number, QR code, password, and confirm password. The form submits the data to an API endpoint using Axios, and displays a success or error message using Toastify. |

</details>

---

## 🚀 Getting Started

 Getting Started with Agrofrost-Hub<br>=====================================

Agrofrost-Hub is a web application built using React, designed to provide a user-friendly interface for managing bookings and storage. This guide will help you get started with the project and set up your development environment.

1. Installing Dependencies
---------------------------

Before you can start working on the project, you need to install the necessary dependencies. Open your terminal and navigate to the project directory. Run the following command to install the dependencies:
```
npm install
```
2. Setting Up the Environment
------------------------------

Once the dependencies are installed, you need to set up the environment. Create a new file called `.env` in the root directory of the project and add the following code:
```
REACT_APP_API_URL=http://localhost:3001/api
```
This sets the API URL for the project.

3. Running the Project
-----------------------

To run the project, open your terminal and navigate to the project directory. Run the following command to start the development server:
```
npm run dev
```
This will start the development server and open the project in your default web browser.

4. Creating Components
----------------------

Agrofrost-Hub uses a component-based architecture, which means that each page or feature is implemented

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
