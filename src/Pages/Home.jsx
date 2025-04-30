import React, { useState, useContext } from 'react';
import { ProductContext } from '../Contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
import FashionFilter from '../components/Filtering';

const Home = () => {
  const { product } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('All');  
  const filterClothing = product.filter((i) => {
    if (selectedCategory === 'All') {
      return i;
    } else {
      return i.category === selectedCategory;
    }
  });

  return (
    <div>
      <Hero />
      <FashionFilter onCategorySelect={setSelectedCategory} />  
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px' }}>
            {filterClothing.map((i) => (
              <Product key={i.id} product={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
