import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './routes';
import "./assets/styles/index.css";

/**
 * initialise our dom to be used by react using the id root from initial div
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <RoutesList />
    </BrowserRouter>
    
);
