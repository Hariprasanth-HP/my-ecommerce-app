import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { removeFromCart } from "../../redux/cartPage/action";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography align="center">Your cart is empty</Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6">
                    {item.name} - ${item.price} x {item.quantity}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h5" align="right">
              Total: ${getTotal()}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default CartPage;
