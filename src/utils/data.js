
import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const generateData = () => {
  const products = [];
  for (let i = 0; i < 50; i++) {
    const product = {
      id: 1+i,
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      price: Number(faker.commerce.price()),
      image: faker.image.urlLoremFlickr({ category: 'clothes' })
    };
    products.push(product);
  }
  return products;
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(generateData());
  }, []);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const handleMinPriceChange = (e) => setMinPrice(Number(e.target.value));
  const handleMaxPriceChange = (e) => setMaxPrice(Number(e.target.value));

  const filteredProducts = products.filter((product) => product.price >= minPrice && product.price <= maxPrice);

  return (
    <div>
      <h1>Product List</h1>
      <div>
        <label htmlFor="min-price">Minimum Price:</label>
        <input
          type="number"
          id="min-price"
          name="min-price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
      </div>
      <div>
        <label htmlFor="max-price">Maximum Price:</label>
        <input
          type="number"
          id="max-price"
          name="max-price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

