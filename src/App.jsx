import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css"
import MainComponent from "./components/MainComponent";



function App() {
  useState(0);

  return (
    <div className="App">
      <Navbar />
      
      <MainComponent/>
    </div>
  );
}

export default App;

