// components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router
import CircularProgress from '@mui/material/CircularProgress';
import { getProductById } from '../../../services/fakestoreApi/api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
      />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Rating:</strong> {product.rating.rate} ⭐ (Count: {product.rating.count})</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetails;
