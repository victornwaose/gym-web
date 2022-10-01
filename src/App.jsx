import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import { Footer, NavBar } from "./components";
import { ExerciseDetails, Homepage } from "./pages/index.";

function App() {
    return (
        <Box>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
                <Routes>
                    <Route path="/exercise/:id" element={<ExerciseDetails />} />
                </Routes>
            </div>
        </Box>
    );
}

export default App;
