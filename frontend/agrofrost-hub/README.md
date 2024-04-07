
  <div align="center">
  <h1 align="center">AgroFrost Hub Front</h1>
  <h3>Codebase for the AgroFrost Hub Front platform</h3>
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

 This project appears to be a web application built using React, with a focus on user authentication and booking management. The project includes a variety of components, including pages for the homepage, login, registration, and dashboard, as well as various sub-components for each page. The project also includes a sidebar navigation component and a footer component. The project is using Tailwind CSS for styling and Vite for building and development.

---

## 🌟 Features

 Here is a list of features for the project:<br>
* User authentication (login, registration)
* Booking management (admin, owner, user)
* Dashboard with various sub-components
* Sidebar navigation
* Footer component
* Tailwind CSS styling
* Vite for building and development

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
| tailwind.config.js |  The code defines a Tailwind CSS configuration file that specifies the content to be processed, the theme colors and extend options, and the plugins to be used. |
| vite.config.js |  The code defines a Vite configuration file that imports the React plugin, sets up environment variables for the project, and defines a custom define function to stringify environment variables. |

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
| About.jsx |  The code defines a React component called About that renders an about section with a left and right column, featuring an image and some text content. |
| Contact.jsx |  The code is a React component that renders a contact form with name, email, and message fields. When the form is submitted, it sends an HTTP POST request to an API endpoint with the form data, and displays a success or error message using the `toast` library. |
| CsDetails.jsx |  The code is a React component that displays details of a storage unit, including its name, area, capacity, timings, and price. It also includes a booking modal that allows users to make a reservation for the storage unit. The component uses the `useParams` hook from `react-router-dom` to retrieve the ID of the storage unit from the URL, and the `useState` hook to manage the state of the form data and the booking modal. The component also uses the `axios` library to make API requests to fetch the storage unit details and save payment details. |
| FeatureSection.jsx |  The code defines a React component called FeatureSection that renders a section with three features, each represented by an image and a brief description. |
| Footer.jsx |  The code defines a React component called Footer that renders a footer element with a red background, containing links to the About Us, Contact Us, and Privacy Policy pages. |
| HeroSection.jsx |  The code defines a React component called HeroSection that renders a hero section with a title, description, and image. |
| Home.jsx |  The code defines a React component named `Home` that renders a series of other components, including a hero section, storage details card, feature section, about section, and contact section. |
| Layout.jsx |  The code defines a React component called Layout that renders a Navbar, its child components, and a Footer. |
| Login.jsx |  The code defines a React component called LoginTabs that renders three login forms (Customer, Owner, and Admin) in separate tabs. The active tab is determined by the activeTab state variable, which is set to customer by default. The component also includes an image on desktop screens but not on mobile. |
| Navbar.jsx |  The code defines a React component that renders a navigation bar with a logo, links to different pages, and a dropdown menu for mobile devices. It also includes a sidebar for mobile devices that displays the same links as the dropdown menu. |
| Register.jsx |  The code defines a React component called Register that renders two registration forms, one for customers and one for owners, using the `useState` hook to manage the active tab. |
| StorageDetailsCard.jsx |  The code is a React component that displays a list of storage units, including their name, address, price, and booking button. It also includes a search bar and a toggle button to sort the storage units by price (high to low or low to high). The component fetches data from an API endpoint using axios and uses the `useState` hook to manage state variables such as the search term, sort order, and filtered and sorted data. |

</details>

---

<details><summary>\src\components\dashboard\admin</summary>

| File | Summary |
| ---- | ------- |
| AdminBooking.jsx |  The code is a React component that displays a list of bookings, with filters to search for specific bookings based on various criteria such as booking ID, customer ID, CS ID, check-in date, and check-out date. The component fetches the booking data from an API endpoint using Axios, and then filters the data based on the user's input. The filtered data is then displayed in a grid layout. |
| AdminDatabase.jsx |  The code fetches customer and owner data from an API endpoint, displays it in a table, and allows the user to filter the data by searching for specific values. |
| AdminOverView.jsx |  The code is a React component that displays various statistics and charts related to an admin's overview, including booking count, customer count, approved storage, not approved storage, and total owners. It also displays a pie chart, bar charts for booking and payment data, and a doughnut chart for count data. The component uses the react-toastify library to display error messages if any occur during API calls. |
| AdminPayment.jsx |  The code is a React component that displays a list of payments, with the ability to filter the list by various criteria such as payment ID, booking ID, CS ID, customer ID, and payment date. The component uses the `axios` library to fetch data from an API endpoint, and the `react-toastify` library to display error messages. |
| AdminProfile.jsx |  The code is a React component that displays a form for an admin to update their personal information, including their full name, email, contact number, address, and account type. The form is fetched from an API endpoint using Axios, and the data is stored in state using the `useState` hook. The component also includes a Save button that updates the data in the API when clicked. |
| AdminStorage.jsx |  The code is a React component that displays a list of storage units, both approved and not approved, along with their details and actions. It also includes a modal for viewing the owner's profile. |
| OwnerProfileModal.jsx |  The code defines a React component called OwnerProfileModal that renders a modal window with the owner's profile information. |

</details>

---

<details><summary>\src\components\dashboard</summary>

| File | Summary |
| ---- | ------- |
| Dashboard.jsx |  The code defines a React component called Dashboard that renders a sidebar and a main content area, using the `Outlet` component from react-router-dom to render the current route's content. |
| SidebarDashboard.jsx |  The code defines a React component that renders a sidebar for a dashboard, with various links and buttons to navigate between different pages. It uses the `react-toastify` library to display toast notifications, and the `react-router-dom` library to manage routing. The component fetches user data from local storage and updates the state when the user's ID changes. It also handles window resizing and outside clicks to close the sidebar on mobile devices. |

</details>

---

<details><summary>\src\components\dashboard\owner</summary>

| File | Summary |
| ---- | ------- |
| OwnerBooking.jsx |  The code fetches booking data from an API endpoint and displays it on the screen, allowing the user to filter the data by various criteria such as booking ID, customer ID, CS ID, check-in date, and check-out date. |
| OwnerOverview.jsx |  The code is a React component that displays various charts and statistics related to a user's cold storage profile, including booking count, last booking, and last payment. It fetches data from an API endpoint using axios and Chart.js, and displays the data in a bar chart and line chart format. |
| OwnerPayment.jsx |  The code is a React component that displays a list of payments for an owner, with the ability to filter the payments based on various criteria such as payment ID, booking ID, CS ID, customer ID, and payment date. The component fetches the payments data from an API endpoint using Axios, and then filters the data based on the user's input. It also displays a toast message if there is an error while fetching the data. |
| OwnerProfile.jsx |  The code in the provided snippet is a React component that renders a profile page for an owner, allowing them to view and update their personal information and storage details. It uses the `axios` library to make API requests to a backend server, and it also uses the `react-toastify` library to display toast messages. The component fetches data from the backend using the `fetchProfile` and `fetchColdStorageProfile` functions, which are called in the `useEffect` hook with the `user?.id` dependency. The component then updates the state of the form data and cold storage data using the `handleInputChange`, `handleColdStorageInputChange`, and `handleColdStorageTimeChange` functions, respectively. Finally, the component renders a form and a table to display the user's profile information and storage details, and it includes buttons to save changes and upload images. |

</details>

---

<details><summary>\src\components\dashboard\user</summary>

| File | Summary |
| ---- | ------- |
| UserBooking.jsx |  The code fetches booking data from an API endpoint using Axios, and displays it in a table with filters for booking ID, customer ID, CS ID, check-in date, and check-out date. The filters are applied to the booking data using the `filter` method, and the filtered data is displayed in a grid layout. |
| UserOverView.jsx |  The code is a React component that displays a dashboard for a user, including some basic statistics and charts. It fetches data from an API endpoint using axios and stores it in the component's state. The component also includes a toast notification system using react-toastify. |
| UserPayment.jsx |  The code is a React component that displays a list of payments made by a user, along with filters to search for specific payments based on their ID, booking ID, CS ID, customer ID, and payment date. The component fetches the payments data from an API endpoint using Axios, and then filters the data based on the user's input. |
| UserProfile.jsx |  The code is a React component that displays a user's profile information, including their name, email, contact number, and address. It also allows the user to edit their profile information and save it back to the server. |

</details>

---

<details><summary>\src\components\guards</summary>

| File | Summary |
| ---- | ------- |
| AuthGuard.jsx |  The code defines a React component called AuthGuard that checks if the user is logged in and has the required role to access certain pages. If the user is not logged in or does not have the required role, they are redirected to the login page. |

</details>

---

<details><summary>\src\components\LoginForms</summary>

| File | Summary |
| ---- | ------- |
| AdminLogin.jsx |  The code defines a React component for an admin login form, which allows the user to enter their email and password and click a button to log in. The component uses the `axios` library to make a POST request to the server with the entered credentials, and displays a success or error message based on the response from the server. |
| CustomerLogin.jsx |  The code defines a React component for customer login, which includes a form with email and password fields, a submit button, and a toast notification system using react-toastify. The component also uses axios for HTTP requests and localStorage for storing the user's token and data. |
| OwnerLogin.jsx |  The code defines a React component for an owner login form, which allows the user to enter their email and password and click the Login button to authenticate. The component uses the `axios` library to make a POST request to the server with the entered credentials, and displays a success or error message using `react-toastify`. |

</details>

---

<details><summary>\src\components\RegisterForms</summary>

| File | Summary |
| ---- | ------- |
| CustomerRegistration.jsx |  The code is a React component that renders a form for customer registration, with input fields for full name, email, contact number, address, password, and confirm password. The form submits to an API endpoint using Axios, and displays a success or error message using React Toastify. |
| OwnerRegistration.jsx |  The code defines a React component for owner registration, which includes a form for inputting personal information and a file input for uploading a QR code. The form data is sent to the server using Axios, and the response is displayed as a toast notification. |

</details>

---

## 🚀 Getting Started

 Getting Started with AgroFrost Hub<br>=====================================

AgroFrost Hub is a web application built using React, with a focus on user authentication and booking management. This guide will help you get started with the project and provide an overview of its features.

1. Installation
----------------

To get started with AgroFrost Hub, you need to have Node.js and npm installed on your system. Once you have Node.js and npm installed, run the following command in your terminal to install the dependencies:
```
npm install
```
2. Running the Application
-------------------------

To run the application, run the following command in your terminal:
```
npm start
```
This will start the development server and open the application in your default browser. You can now navigate to `http://localhost:3000` to access the application.

3. Features
------------

AgroFrost Hub includes several features, including:

* User authentication: Users can log in to the application using their email and password.
* Booking management: Users can view and manage their bookings, including creating new bookings and editing existing ones.
* Dashboard: Users can view their dashboard, which includes information about their bookings, payments, and other relevant details.
* Sidebar navigation: The application includes a sidebar navigation component that allows

---

Generated with ❤️ by [ReadMeAI](https://www.readmeai.co/).
