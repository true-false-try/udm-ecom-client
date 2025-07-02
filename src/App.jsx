import './App.css';
import "./index.css";
import Products from "./components/products/Products.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/shared/Navbar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import {Toaster} from "react-hot-toast";
import React, {useState} from "react";
import Cart from "./components/cart/Cart.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {

    return (
        <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/products" element={ <Products />} />
                    <Route path="/about" element={ <About />} />
                    <Route path="/contact" element={ <Contact />} />
                    <Route path="/cart" element={ <Cart />} />
                    <Route path='/' element={<PrivateRoute publicPage />}>
                        <Route path="/login" element={ <LogIn />} />
                    </Route>
                </Routes>
            </Router>
            <Toaster position='bottom-center' />
        </React.Fragment>
    )
}

export default App;