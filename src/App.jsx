import React from "react";
import SeedAndFlowerLoader from "./SeedAndFlowerLoader";

export default function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#111827"
    }}>
      <SeedAndFlowerLoader size={100} />
    </div>
  );
}
