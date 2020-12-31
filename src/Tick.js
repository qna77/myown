import React from "react";
import './App.css';

function Tick() {
    return (
        <div className="App">
            <h1>Witaj świecie!</h1>
            <h1>Aktualny czas: {new Date().toLocaleTimeString()}</h1>
        </div>
    );
}

export default Tick;