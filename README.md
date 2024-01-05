# Weather App

This Weather App is a React-based web application allowing users to view weather forecasts. It integrates Auth0 for authentication, utilizing React Router for navigation, and employs Material-UI for its component library. The app is built using Vite, TypeScript, and SCSS modules for efficient and type-safe development.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern frontend build tool that significantly improves the development experience.
- **TypeScript**: A superset of JavaScript that adds static types to the language.
- **SCSS Modules**: CSS modules with SCSS pre-processing for scoped and maintainable styles.
- **Material-UI**: A popular React UI framework with a comprehensive suite of components.
- **Auth0**: A flexible, drop-in solution to add authentication and authorization services to your applications.
- **React Router**: A standard library for routing in React.

## Features

- **User Authentication**: Integrated with Auth0, allowing users to log in using their GitHub credentials.
- **Weather Forecast**: Users can search for and view the weather forecast in different cities.
- **Responsive Design**: The app is fully responsive and works across different devices and screen sizes.
- **Protected Routes**: Certain routes are accessible only to authenticated users, enhancing security.

## Project Checklist

- [x] **React Setup**\
        - [x] Initialize project with Vite and TypeScript.\
        - [x] Set up SCSS Modules for styling.

- [x] **User Authentication**\
        - [x] Integrate Auth0 for secure user authentication.\
        - [x] Implement login functionality using GitHub credentials.

- [x] **Weather Forecast Functionality**\
        - [x] Fetch weather data using OpenWeatherMap API.\
        - [x] Display weather information in a table format.

- [x] **UI Components and Responsiveness**\
        - [x] Create a responsive header with logout functionality.\
        - [x] Implement a responsive layout for the WeatherPageTable.\
        - [x] Add a magnifying glass icon inside the city input field.\
        - [x] Ensure mobile responsiveness across the application.

- [x] **Protected Routes and Navigation**\
        - [x] Set up React Router for application routing.\
        - [x] Implement protected routes accessible only to authenticated users.\
        - [x] Add back navigation functionality on the WeatherPageTable.

- [x] **State Management**\
        - [x] Utilize React Context API for managing the city state across components.

- [x] **Loading and Error Handling**\
        - [x] Create a reusable Loading component.\
        - [x] Implement error handling for API requests and authentication.

- [x] **Documentation**\
        - [x] Write a comprehensive README.md file.

- [x] **Additional Features**\
        - [x] Add a user notification for non-authenticated access attempts.\
        - [x] Implement mobile-specific styles for better usability on smaller devices.

## Project Structure

The project is structured as follows:

- `src/`: This is where the main application code resides.
  - `App.tsx`: The main application component.
  - `assets/`: Contains static files like images.
  - `components/`: Contains reusable components like buttons and headers.
  - `context/`: Contains React context providers.
  - `screens/`: Contains the different screens of the application.
  - `utils/`: Contains utility functions.
- `public/`: Contains public assets that will be served directly by the server.
- `.env`: Contains environment variables. Make sure to create your own and not commit it to the repository.
- `vite.config.ts`: Contains the configuration for Vite, the build tool used in this project.
- `tsconfig.json`: Contains the configuration for the TypeScript compiler.

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository**:

    bash

- `git clone https://github.com/makoydev/react-weather-forecast.git`

  - **Navigate to the project directory**:

  bash

  - `cd react-weather-forecast`

  - **Install dependencies**:

`npm install`

or if you're using yarn:- `yarn install`

    -   **Set up environment variables**:
    -   Create a `.env` file in the root directory.
    -   Add your Auth0 domain and client ID:

1.  - `VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id`

## Running the Application

To run the application in development mode, execute:

`npm run dev`

or with yarn:

`yarn dev`

The application will be available at `http://localhost:5173` (or another port if specified).
