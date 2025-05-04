import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../src/components/Header/index.jsx';
import Footer from "../src/components/Footer/index.jsx";
import Router from "./Router/router.jsx";
import { HashRouter } from "react-router-dom";

import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Header />
      <Router />
      <Footer />
    </HashRouter>
  </StrictMode>,
)