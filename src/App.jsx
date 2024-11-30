import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Carousel";

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
    </div>
  );
};

export default App;
