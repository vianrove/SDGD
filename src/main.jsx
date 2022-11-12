import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
// ROUTES
import App from './App';
import NotFound from './routes/notfound';
import Login from"./routes/login"
import Register from "./routes/register"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />


                {/* pagina no encontrada */}            
                <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);
