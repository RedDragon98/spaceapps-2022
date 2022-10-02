import { App } from './app'
import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <div style={{ position: "relative", width: window.innerWidth, height: window.innerHeight }}>
            <App/>
        </div>
    </React.StrictMode>
);