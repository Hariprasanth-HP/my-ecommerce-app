import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";
import { Container } from "@mui/material";
import CartPage from "./Pages/CartPage/CartPage";
import ProductDetail from "./components/ProductCard/Productdetails/Productdetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Container sx={{ flex: 1, paddingTop: 2 }} maxWidth="lg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetail />} /> 
        </Routes>
      </Container>
    </Router>
  );
}

export default App;


