import React, { useState } from "react";
import DataFetcher from "./DataFetcher";
import "../styles/Home.css";
import Footer from "./Footer";

const Home = () => {
  const [showChart, setShowChart] = useState(false);

  const handleClick = () => {
    setShowChart(true);
  };

  return (
    <div className="home">
      <h1>Welcome to the Data Visualization Test</h1>
      <p>Click the button below to view the bar chart of our data.</p>

      {/* Changing chart state when button cliced */}
      {!showChart && (
        <button className="btn-view-data" onClick={handleClick}>
          View Data
        </button>
      )}

      {/* Showing chart when button is clicked */}
      {showChart && <DataFetcher />}

      <Footer />
    </div>
  );
};

export default Home;
