import React, { useState, useEffect } from "react";

// Import images from the assets folder
import Image1 from "../assets/images (1).jpg";
import Image2 from "../assets/images.jpg";

const Carousel = () => {
  // Array of imported images
  const images = [Image1, Image2];

  // State to track current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div
      style={{
        width: "50%",
        height: "300px",
        overflow: "hidden",
        position: "relative",
        border: "2px solid #ddd",
        borderRadius: "8px",
        marginLeft: "40px", // Add margin to shift the carousel right
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
