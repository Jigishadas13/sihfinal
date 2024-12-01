import React, { useEffect, useRef } from "react";
import * as AmCharts from "@amcharts/amcharts3-react";

const IndiaMap = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const map = AmCharts.makeChart(chartRef.current, {
      type: "map",
      zoomOnDoubleClick: false,
      zoomControl: {
        zoomControlEnabled: false,
        panControlEnabled: false,
      },
      theme: "light",
      dataProvider: {
        map: "indiaLow",
        areas: [
          { id: "IN-AN", value: "3", color: "#1eb5ef" },
          { id: "IN-AP", value: "3", color: "#1eb5ef" },
          { id: "IN-AR", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-AS", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-BR", value: "3", color: "#1eb5ef" },
          { id: "IN-CH", value: "3", color: "#1eb5ef" },
          { id: "IN-CT", value: "3", color: "#1eb5ef" },
          { id: "IN-DD", value: "3", color: "#1eb5ef" },
          { id: "IN-DL", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-DN", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-GA", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-GJ", value: "3", color: "#1eb5ef" },
          { id: "IN-HP", value: "3", color: "#1eb5ef" },
          { id: "IN-HR", value: "3", color: "#1eb5ef" },
          { id: "IN-JH", value: "3", color: "#1eb5ef" },
          { id: "IN-JK", value: "3", color: "#1eb5ef" },
          { id: "IN-KA", value: "3", color: "#1eb5ef" },
          { id: "IN-KL", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-LD", value: "3", color: "#1eb5ef" },
          { id: "IN-MH", value: "3", color: "#1eb5ef" },
          { id: "IN-ML", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-MN", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-MP", value: "3", color: "#1eb5ef" },
          { id: "IN-MZ", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-NL", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-OR", value: "3", color: "#1eb5ef" },
          { id: "IN-PB", value: "3", color: "#1eb5ef" },
          { id: "IN-PY", value: "3", color: "#1eb5ef" },
          { id: "IN-RJ", value: "3", color: "#1eb5ef" },
          { id: "IN-SK", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-TG", value: "3", color: "#1eb5ef" },
          { id: "IN-TN", value: "3", color: "#1eb5ef" },
          { id: "IN-TR", value: "3", color: "#1eb5ef", callout: true },
          { id: "IN-UP", value: "3", color: "#1eb5ef" },
          { id: "IN-UT", value: "3", color: "#1eb5ef" },
          { id: "IN-WB", value: "3", color: "#1eb5ef", callout: true },
        ],
      },
      areasSettings: {
        autoZoom: false,
        selectedColor: "#CC0000",
      },
      imagesSettings: {
        labelColor: "#fff",
        labelPosition: "middle",
      },
    });

    return () => {
      if (map) {
        map.clear();
      }
    };
  }, []);

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{
        width: "100%",
        height: "500px", // Reduced height
        margin: "auto",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    />
  );
};

export default IndiaMap;
