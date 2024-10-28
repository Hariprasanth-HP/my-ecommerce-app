import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Container, Grid, Typography } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { getProducts } from "../../services/fakestoreApi/api";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
console.log(products);

  if (loading) return <CircularProgress />;
 

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexWrap: 'wrap', gap: '3%',background:'red' }}>
      {products.map((product) => (
        <Box key={product.id} sx={{ flex: '1 0 100%', md: '1 0 30%' }}>
          <ProductCard product={product} />
        </Box>
      ))}
    </Box>
  );
};

export default HomePage;
