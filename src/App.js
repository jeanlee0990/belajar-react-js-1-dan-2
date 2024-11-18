import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Komponen Class */}
      <h2>Komponen Ini dibuat dengan class component</h2>
      <ClassComponent />

      {/* Komponen Functional */}
      <h2>Membuat komponen dengan functional component</h2>
      <FunctionalComponent />
    </div>
  );
}

export default App;
