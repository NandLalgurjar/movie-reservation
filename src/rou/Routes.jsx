import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Provider from './Provider.js';
import Dashboard from '../routes/Dashboard.jsx';
import Login from '../routes/Login.jsx';
import SignUp from '../routes/SignUp.jsx';
import MoviesDetailPage from '../routes/movies/MoviesDetailPage.jsx';

function Routers() {

    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/login' element={<Provider Components={Login} />} />
            <Route path='/sign-up' element={<Provider Components={SignUp} />} />
            <Route path='/movisDetails' element={<MoviesDetailPage />} />
            {/* <Route path='/hello' element={<Provider Components={Dashboard} />} /> */}
        </Routes>
    )
}

export default Routers