import React from "react";
import "./home.css";
function Home(props) {
  return (
    <div className="mt-3">
      {/* <h1 className="text-6xl font-bold text-center">
        <span style={{ color: "#4285F4" }}>A</span>
        <span style={{ color: "#EA4335" }}>X</span>
        <span style={{ color: "#FBBC05" }}>I</span>
        <span style={{ color: "#4285F4" }}>X</span>
        <span style={{ color: "#34A853" }}>A</span>
        {/* <span style={{ color: "#EA4335" }}>e</span> */}
      {/* </h1> */} 
      <h1 class="display-5 fw-bold text-center">
        <span class="text-primary">A</span>
        <span class="text-danger">X</span>
        <span class="text-warning">I</span>
        <span class="text-primary">X</span>
        <span class="text-success">A</span>
      </h1>
    </div>
  );
}

export default Home;
