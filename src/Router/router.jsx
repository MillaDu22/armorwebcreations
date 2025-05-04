import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { CookiesProvider } from '../components/CookiesContext';
import Home from "../pages/Home/index";
import { Routes, Route } from "react-router-dom";


const Router =  () => {
    return (
        <HelmetProvider>
            <CookiesProvider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </CookiesProvider>
        </HelmetProvider>
    );
};

export default Router;