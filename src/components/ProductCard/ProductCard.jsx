import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartPage/action";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card variant="outlined" sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, padding: 2, height: "100%" }}>
      <Box
        component="img"
        src={product.imageUrl}
        alt={product.name}
        sx={{
            marginTop: 2,
          width: { xs: "50%", sm: "20%" },
          height: { xs: "auto", sm: "100%" },
          borderRadius: 1,
        }}
      />
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Box sx={{width:'100%', flexGrow: 0.5}}>
      
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body2" color="textSecondary">
            {product.ratings} Ratings & {product.reviews} Reviews
          </Typography>
          <Box sx={{display: "flex",gap:'3%',alignItems:'center'}}>
          <Box >
          <Typography variant="h6">₹{product.price}</Typography>
          <Typography variant="body2" sx={{ textDecoration: "line-through" }}>
            ₹{product.originalPrice}
          </Typography>
          <Typography variant="body2" color="success.main">
            {product.discount}% off
          </Typography>
          </Box>
          <Box>
          <Typography variant="body2">Free delivery</Typography>
          <Typography variant="body2">Top Discount of the Sale</Typography>
          <Typography variant="body2">Upto ₹{product.exchangeDiscount} Off on Exchange</Typography>
          </Box>
          </Box>
         
        </Box>
        
        <Box sx={{ marginTop: 2 }}>
          <Button component={Link} to={`/product/${product.id}`} variant="outlined" color="primary">
            View Details
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddToCart} sx={{ marginLeft: 1 }}>
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
