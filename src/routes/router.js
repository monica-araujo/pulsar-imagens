import { HomePage } from "../pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react";

export const R = () => {
    return (
        <Router>
            <Routes>
                <Route exact path={'/'} element={<HomePage/>}/>
            </Routes>
        </Router>
    )
}