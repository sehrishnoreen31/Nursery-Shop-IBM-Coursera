import React from 'react';
import ProductCard from './ProductCard';
import { plants } from '../data/plants'; // Sample data

const ProductList = () => {
  return (
    <div>
      <h2 className="product-header">Available Plants</h2>
      <div className="product-grid">
        {plants.map((plant) => (
          <ProductCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;