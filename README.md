# Data Visualization Frontend Test

## Overview

This project is a React application designed to fetch data from an API and visualize it using a bar chart. It demonstrates best practices in React development, including the use of custom hooks, component-based architecture, and basic testing.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Chart.js**: A library for creating interactive charts.
- **React-Chartjs-2**: A React wrapper for Chart.js.
- **Axios**: A promise-based HTTP client for making API requests.
- **CSS**: For styling the application.

## Project Structure

The project is organized as follows:

```
src/
|-- components/
|   |-- BarChart.js
|   |-- DataFetcher.js
|   |-- Home.js
|   |-- common/
|       |-- ErrorMessage.js
|       |-- LoadingSpinner.js
|-- hooks/
|   |-- useFetchData.js
|-- styles/
|   |-- App.css
|   |-- BarChart.css
|   |-- Home.css
|-- setupTests.js
|-- App.js
|-- index.js
|-- tests/
|   |-- components/
|       |-- BarChart.test.js
```

- **`BarChart.js`**: A component that renders a bar chart using Chart.js.
- **`DataFetcher.js`**: A component that uses a custom hook to fetch data and display the bar chart.
- **`Home.js`**: The main component with a button to fetch data and display the chart.
- **`common/`**: Contains helper components like `ErrorMessage` and `LoadingSpinner`.
- **`hooks/`**: Contains the custom hook `useFetchData` for managing data fetching.
- **`styles/`**: Contains CSS files for styling the application.
- **`tests/`**: Contains unit tests for components.

## Key Features

- **Custom Hook**: Created a custom hook `useFetchData` to handle data fetching logic. This promotes code reuse and separation of concerns.
- **Error Handling**: Includes an `ErrorMessage` component to display error messages in case of data fetching failures.
- **Loading Indicator**: Utilizes a `LoadingSpinner` component to show a loading spinner while data is being fetched.
- **Responsive Design**: The application is designed to be responsive for mobile devices.
- **Testing**: Implemented a basic test for the `BarChart` component to ensure its functionality. Tests are located in the `tests/` folder.
- **Code Comments**: Added comments throughout the code to explain complex logic and ensure clarity.

## How to Run

1. **Clone the repository:**

   ```bash
   git clone https://github.com/redianmarku/data-visualization-frontend
   ```

2. **Navigate to the project directory:**

   ```bash
   data-visualization-frontend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Run tests:**

   ```bash
   npm test
   ```
