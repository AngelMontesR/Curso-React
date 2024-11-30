import React from 'react';
import ReactDOM from 'react-dom/client';
import {FirstApp} from './FirstApp'
import './app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Angel"/>
    </React.StrictMode>
)