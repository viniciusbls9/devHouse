import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Reserves from './pages/Reserves';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/reserves" component={Reserves} />
        </BrowserRouter>
    );
}

export default Routes;