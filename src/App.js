import React, { useEffect, useState } from 'react';
import Accordion from './Accordion';

function App() {

  const [data, setData] = useState({
    "categories": [
      {
        "name": "Technology",
        "total": 0,
        "products": [
          {
            "name": "Laptops",
            "quantity": 10,
            "price": 799,
            "total": 7990
          },
          {
            "name": "PC",
            "quantity": 20,
            "price": 499,
            "total": 9980
          }
        ]
      }
    ]

  });


  return (
    <div>
      <h1>Warehouse</h1>
      <div className="accordion">
        {data.categories.map(({ name, products }) => (
          <Accordion key={name} title={name} content={
            products.map(product => (
              <div key={product.name}>
                <p>{`${product.name} -- Quantity: ${product.quantity} -- Price: $${product.price}`}</p>
              </div>
            ))
          } />
        ))}
      </div>
    </div>
  );
};

export default App;