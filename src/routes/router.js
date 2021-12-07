import { HomePage } from "../pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from "react";
import {LoginPage} from '../pages/LoginPage/LoginPage'
import {SignUpPage} from '../pages/SignUpPage/SignUpPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage/>
                </Route>
                <Route exact path={'/login'}> 
                    <LoginPage/>
                </Route>
                <Route exact path={'/registro'}>
                    <SignUpPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}