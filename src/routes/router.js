import { HomePage } from "../pages/HomePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react";
import {LoginPage} from '../pages/LoginPage/LoginPage'
import {SingUpPage} from '../pages/SingUpPage/SingUpPage'

export const R = () => {
    return (
        <Router>
            <Routes>
                <Route exact path={'/'} element={<HomePage/>}/>
            </Routes>
            <Routes>
                <Route exact path={'/login'} element={<LoginPage/>}/>
            </Routes>
            <Routes>
                <Route exact path={'/registro'} element={<SingUpPage/>}/>
            </Routes>
        </Router>
    )
}