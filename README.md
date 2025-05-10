# PG Listing Portal
This is a PG (Paying Guest) Listing Portal built using React.js. It allows users to register, create a profile, and browse available PG listings with filtering options. The project incorporates user authentication, dark/light mode toggle, and profile management features.

# Features
**User Authentication**: Allows users to log in with a username and password. If the login is successful, the user session is stored locally.
(username : user , password: password for direct login)

**Profile Creation**: Users can create and update their profiles. This step only needs to be completed once, as the profile data is saved in localStorage.

**PG Listings**: Displays a list of PG accommodations that users can filter by rent, location, and availability.

**Dark/Light Mode**: The portal includes a toggle between dark and light modes, with the user's preference saved in localStorage for persistence across sessions.

**Logout**: Users can log out, which will clear their session and profile data.

# Technologies Used
**React.js**: A JavaScript library for building user interfaces, particularly single-page applications.

**JavaScript**: The core programming language for the frontend.

**HTML & CSS**: Standard web technologies for building and styling the interface.

**LocalStorage**: Used to store session and profile data to maintain user state across sessions.

# Folder Structure
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

# Customization
Feel free to customize the app by adding more features or changing the existing ones. The structure of the app is modular, making it easy to update components like the PG listing filter, add more user authentication mechanisms, or integrate external APIs.

# License
This project is open-source and available under the MIT License.

# Acknowledgements
* React for providing a powerful framework for building the user interface.
* React Documentation for valuable resources and examples.

![image](https://github.com/user-attachments/assets/b997d155-af10-4b04-b7c9-76c21bdef42e)
