# PG Listing Portal
This is a PG (Paying Guest) Listing Portal built using React.js. It allows users to register, create a profile, and browse available PG listings with filtering options. The project incorporates user authentication, dark/light mode toggle, and profile management features.

# Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Functionality Walkthrough](#functionality-walkthrough)
- [Demonstration of Working](demonstration-of-working)
- [Future Improvements](#future-improvements)
- [License](#license)
- [Acknowledgement](#acknowledgement)
- [Contact](#contact)

# Overview
The PG Listing Portal is a React.js-based web application that streamlines the search for paying guest accommodations. It provides a simple, user-friendly interface for students and individuals to log in, create a one-time profile, and browse PG listings with intelligent filters for location, rent, and availability.

Key highlights of the system include:
  
* Secure login with session handling (username: user, password: password)
* One-time profile creation, stored locally for a seamless user experience
* Persistent dark/light mode toggle for personalized themes
* Client-side filtering for fast, responsive searches
* LocalStorage-based state management, eliminating the need for backend integration
---

# Features
**User Authentication**: Allows users to log in with a username and password. If the login is successful, the user session is stored locally.
(username : user , password: password for direct login)

**Profile Creation**: Users can create and update their profiles. This step only needs to be completed once, as the profile data is saved in localStorage.

**PG Listings**: Displays a list of PG accommodations that users can filter by rent, location, and availability.

**Dark/Light Mode**: The portal includes a toggle between dark and light modes, with the user's preference saved in localStorage for persistence across sessions.

**Logout**: Users can log out, which will clear their session and profile data.

---

# Tech Stack
**React.js**: A JavaScript library for building user interfaces, particularly single-page applications.

**JavaScript**: The core programming language for the frontend.

**HTML & CSS**: Standard web technologies for building and styling the interface.

**LocalStorage**: Used to store session and profile data to maintain user state across sessions.

---
# Project Structure
The project follows a simple folder structure for components and styling:
graphql

src/
│
├── components/

│   ├── LoginPage.js       # Handles user login

│   ├── ProfilePage.js     # Allows users to create and update their profile

│   ├── PGListings.js      # Displays the list of PGs with filtering options

│   ├── App.js                 # Main component that manages routing and state

│   ├── App.css                # Global styles for the app

└── index.js               # Entry point of the app

---
# Installation and Setup

1. Clone the repository
Start by cloning the repository to your local machine using the following command
git clone https://github.com/YOUR-USERNAME/pg-listin-portal.git
cd pg-listing-portal

2. Install Dependencies
Ensure you have Node.js and npm installed on your system. Once they are installed, run the following command to install the required dependencies:
npm install

3. Run the Application
Start the development server with the following command:
npm start
This will open the app in your default browser at http://localhost:3000.
---

# Functionality Walkthrough
**User Authentication**:When users visit the website, they are first presented with the LoginPage. Here, they can enter a username and password. The system will validate the credentials by checking them against a predefined set of users. If the login is successful, the user will be redirected to the PG listings page.

**Profile Creation**:After a successful login, if the user has not created a profile yet, they will be redirected to the ProfilePage. In this step, they will be required to fill in details like name, email, age, and gender. This profile data is saved in localStorage and will be used for personalizing the experience.

**PG Listings**:Once the profile is created or already exists, users will be redirected to the PGListings page. Here, they can view a list of PG accommodations and filter them based on rent, location, and availability. The PG listings are displayed in a structured format, and users can select their preferences through a filter section.

**Dark/Light Mode**:The app allows users to toggle between dark and light modes. The current theme preference is stored in localStorage and will persist even after the page is refreshed or the user logs out.

**Logout**:Users can log out at any time, which will clear the session and profile data stored in localStorage, and they will be redirected to the login page.

**LocalStorage Usage**:The application uses localStorage to persist the following:

**1.User session**: When a user logs in successfully, their session information is stored in localStorage to keep them logged in across page reloads.
**2.User profile**: Once the user creates their profile, it is saved in localStorage so that they don't need to input it again on subsequent visits.
**3.Theme preference**: The user’s choice of dark or light mode is stored in localStorage, ensuring that the theme remains consistent even after the browser is closed and reopened.

**Customization**
Feel free to customize the app by adding more features or changing the existing ones. The structure of the app is modular, making it easy to update components like the PG listing filter, add more user authentication mechanisms, or integrate external APIs.

# Demonstration of Working
**Login Page**

This is the login page for the portal which lets the user login if correct credentials has been entered. A new user can use the signup button to make a new account and later login.
![image](https://github.com/user-attachments/assets/e41b763c-40b9-45b3-a272-6a6a3b2955f5)


**Profile Page**

A profile page is given for user to be able to maintain their account data accordingly.
![image](https://github.com/user-attachments/assets/aa9712f3-c645-43a8-a890-b111872a4f82)


**View page [PG Listing Portal]**

This is how the PGListing Portal looks with the PGs listed and a profile button at top right corner along with the logout option and also the searching filters available for flexibility of the user.
![image](https://github.com/user-attachments/assets/0f75679d-e1aa-46f0-af53-eb80b5e5a4a3)


This is the View page of the PG Listing Portal in dark mode enabling the user to view in his favourite theme: light or dark!
![image](https://github.com/user-attachments/assets/69ae3003-4c2a-41df-b5af-d7f21ff46bef)


**Filter searching options**
1. Search by Location ![image](https://github.com/user-attachments/assets/7d3bae4a-e00f-4cc9-a17c-9c254e0327ba)

2. Search by Rent ![image](https://github.com/user-attachments/assets/4afca53f-5840-4d12-98b9-d5c5aa7905a8)

3. Search by Availability ![image](https://github.com/user-attachments/assets/94b93382-4ee6-4c54-9fc2-c1e00e064e59)

Thus, this is how the PG Listing Portal has been built with a login page, a profile page as well as the main page where PGs are listed and enabled with filtered options.  

# Future Improvements 
Here are **suggestions for future improvements** to enhance the functionality, user experience, and scalability of your PG Listing Portal:

---

## Future Improvements

**Backend Integration**

* Connect to a real backend using Node.js + Express or Firebase to manage user sessions, profiles, and listings securely.
* Replace `localStorage` with database-driven persistence.


**Admin Panel**

* Add a dedicated admin dashboard to:
* Add/edit/delete PG listings.
* View registered users and their activity.

**Maps Integration**

* Integrate **Google Maps API** to show PG locations on a map.
* Enable geolocation-based search.

**Booking Feature**

* Allow users to **book a PG** and track the booking status.
* Add a calendar view for availability tracking.

**Responsive Mobile App**

* Make the portal fully responsive.
* Optionally, build a mobile app version using React Native.

**Notifications**

* Add email or in-app notifications for:
* Booking confirmations
* New listings based on filters
* Availability updates

**Analytics Dashboard**
* Display statistics like:
  * Number of PGs listed
  * Most searched locations
  * User engagement
---
# License
This project is open-source and available under the MIT License.

---
# Acknowledgements
* React for providing a powerful framework for building the user interface.
* React Documentation for valuable resources and examples.
---

# Contact
Author: Shubham

Email: 10221shubham.s@gmail.com

GitHub: github.com/shubh-2601s



