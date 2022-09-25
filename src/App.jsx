import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Footer, NavBar } from "./components";
import { ExerciseDetails, Homepage } from "./pages/index.";

function App() {
    return (
        <div>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
                <Routes>
                    <Route path="/exercise/:id" element={<ExerciseDetails />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
