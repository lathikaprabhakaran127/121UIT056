import React, { useState, useEffect } from 'react';  
import './App.css';  

function App() {  
  const [products, setProducts] = useState([]);  
  
  useEffect(() => {  
    const sampleData = [  
      { "productName": "Smartphone 1", "price": 899, "rating": 4.9, "discount": 15, "availability": "yes" },  
      { "productName": "Smartphone 2", "price": 799, "rating": 4.8, "discount": 10, "availability": "out-of-stock" },  
      { "productName": "Smartphone 3", "price": 699, "rating": 4.7, "discount": 20, "availability": "yes" },  
      { "productName": "Smartphone 4", "price": 599, "rating": 4.6, "discount": 5, "availability": "yes" },  
      { "productName": "Smartphone 5", "price": 499, "rating": 4.5, "discount": 25, "availability": "out-of-stock" }  
    ];  
  
    // Simulate fetching data  
    setTimeout(() => {  
      setProducts(sampleData);  
    }, 1000);  
  }, []);  
  
  return (  
    <div className="App">  
      <header className="App-header">  
        <h1>Top Smartphones</h1>  
      </header>  
      <main>  
        <div className="product-list">  
          {products.map((product, index) => (  
            <div key={index} className="product-card">  
              <h2>{product.productName}</h2>  
              <p>Price: ${product.price}</p>  
              <p>Rating: {product.rating} / 5</p>  
              <p>Discount: {product.discount}%</p>  
              <p className={product.availability === 'yes' ? 'available' : 'out-of-stock'}>Availability: {product.availability}</p>  
            </div>  
          ))}  
        </div>  
      </main>  
      <footer className="App-footer">  
        <p>© 2024 My Custom Smartphone Store</p>  
      </footer>  
    </div>  
  );  
}  
  
export default App;
