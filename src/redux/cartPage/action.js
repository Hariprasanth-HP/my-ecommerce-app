import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

// Action to add product to cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Action to remove product from cart
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
