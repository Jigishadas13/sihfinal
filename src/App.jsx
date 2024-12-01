import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import IndiaMap from "./components/IndiaMap";

const App = () => {
  return (
    <div>
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <div style={{ display: "flex", marginTop: "100px" }}>
        {/* Left Half - Carousel */}
        <div style={{ flex: 1 }}>
          <Carousel />
        </div>

        {/* Right Half - Placeholder Content */}
        <div style={{ flex: 1, padding: "20px" }}>
          <h1>Welcome to Jal Shakti</h1>
          <p>
            Explore the initiatives and contributions for the betterment of
            society.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <div
          style={{
            flex: "0 0 60%", // 60% of the parent width
            aspectRatio: "1", // Square frame
           
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <IndiaMap />
        </div>
      </div>
    </div>
  );
};

export default App;

