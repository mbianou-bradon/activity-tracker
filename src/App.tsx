import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ActivityForm from "./components/ActivityForm/ActivityForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <ActivityForm />
      </header>
    </div>
  );
}

export default App;
