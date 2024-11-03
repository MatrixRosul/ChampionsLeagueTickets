import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Info from "./pages/Info/Info";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/register/register";

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/info" element={<Info/>} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
    );
};

export default App;
