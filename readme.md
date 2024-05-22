### Live Link: https://e-commerce-backend-node-xi.vercel.app/

### To run the application locally: clone this repository,run the command:

```
npm install
```

Then run the command

```
npm run start:dev
```

The application will start at port 3000. To run the routes locally just replace the live link with : http://localhost:3000/

### Application Routes:

#### Products

- Route: https://e-commerce-backend-node-xi.vercel.app/api/products (POST)

```sample json:
{
  name: "Smartphone X200",
  description: "A high-end smartphone with a 6.5-inch display and advanced camera system.",
  category: "Electronics",
  price: 1000,
  variants: [
    { type: "Color", value: "Black" },
    { type: "Storage", value: "128GB" }
  ],
  tags: ["smartphone", "electronics", "high-end", "new"],
  inventory: {
    quantity: 50,
    inStock: true
  }
}
```

- Route: https://e-commerce-backend-node-xi.vercel.app/api/products (GET)
- Route: https://e-commerce-backend-node-xi.vercel.app/api/products?searchTerm=smartphone (GET filtered data)
- Route: https://e-commerce-backend-node-xi.vercel.app/api/products/664cd0ab8d951b3af28d635b (Single GET)
- Route: https://e-commerce-backend-node-xi.vercel.app/api/products/664cd0ab8d951b3af28d635b (PUT)
- Route: https://e-commerce-backend-node-xi.vercel.app/api/products/664cd0ab8d951b3af28d635b (DELETE)

### Orders

- Route: https://e-commerce-backend-node-xi.vercel.app/api/orders(POST)

```sample json:
{
    "email": "abc@gmail.com",
    "productId": "664ce67ce5cb22926085bcba",
    "price": 1200,
    "quantity": 20
}
```

- Route: https://e-commerce-backend-node-xi.vercel.app/api/orders (GET)
- Route: https://e-commerce-backend-node-xi.vercel.app/api/orders?email=abc@gmail.com (GET filtered data)
