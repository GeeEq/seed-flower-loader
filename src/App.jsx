import React from "react";
import SeedAndFlowerLoader from "./SeedAndFlowerLoader";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#111827" }}>
      {/* Adjust size (px) and seedScale (1 = normal, 1.5 = bigger, 0.7 = smaller) */}
      <SeedAndFlowerLoader size={150} seedScale={2.2} speed={5} />
    </div>
  );
}

export default App;