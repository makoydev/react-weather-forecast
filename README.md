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

## Installation

To set up the project locally, follow these steps:

1.  **Clone the repository**:

    bash

- `git clone https://github.com/makoydev/react-weather-forecast.git`

  - **Navigate to the project directory**:

  bash

  - `cd weather-app`

  - **Install dependencies**:

`npm install`

or if you're using yarn:- `yarn install`

    -   **Set up environment variables**:
    -   Create a `.env` file in the root directory.
    -   Add your Auth0 domain and client ID:

        makefile

1.  - `VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id`

## Running the Application

To run the application in development mode, execute:

arduino

`npm run dev`

or with yarn:

`yarn dev`

The application will be available at `http://localhost:5173` (or another port if specified).
