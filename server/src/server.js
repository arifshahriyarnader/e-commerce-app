
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB=require('./db');
const { appConfig } = require('./config/index');

const app = express();


app.use(bodyParser.json());

app.use(cors({
  origin:appConfig.ALLOWED_ORIGIN,
}));
connectDB();

// In-memory array to store products
let products = [
    {
        id: 1,
        name: "Gaming Laptop",
        price: 1500,
        image:
          "https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-gaming-3/ideapad-gaming-3-001-228x228.jpg",
        categories: ["Laptops", "Gaming"],
        quantity:10,
      },
      {
        id: 2,
        name: "Wireless Mouse",
        price: 50,
        image:
          "https://www.startech.com.bd/image/cache/catalog/mouse/zoook/clique/clique-01-500x500.jpg",
        categories: ["Accessories", "Peripherals"],
        quantity:10,
      },
      {
        id: 3,
        name: "Gaming Keyboard",
        price: 100,
        image:
          "https://www.startech.com.bd/image/cache/catalog/keyboard/meetion/mt-k9320/mt-k9320-01-500x500.jpg",
        categories: ["Accessories", "Peripherals"],
        quantity:10,
      },
      {
        id: 4,
        name: "External Hard Drive",
        price: 120,
        image:
          "https://www.startech.com.bd/image/cache/catalog/portable-hdd%20/lacie/10tb-d2-professional/lacie-10tb-d2-professional-01-500x500.jpg",
        categories: ["Storage", "Accessories"],
        quantity:10,
      },
      {
        id: 5,
        name: "Graphics Card",
        price: 500,
        image:
          "https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-gt710-2gd3/geforce-gt710-2gd3-1-500x500.jpg",
        categories: ["Components", "Gaming"],
        quantity:10,
      },
      {
        id: 6,
        name: "Portable SSD",
        price: 200,
        image:
          "https://www.startech.com.bd/image/cache/catalog/ssd/colorful/sl500/sl500-500x500.JPG",
        categories: ["Storage", "Accessories"],
        quantity:10,
      },
      {
        id: 7,
        name: "Gaming Monitor",
        price: 300,
        image:
          "https://www.startech.com.bd/image/cache/catalog/monitor/gigabyte/gs32q/gs32q-01-500x500.webp",
        categories: ["Monitors", "Gaming"],
        quantity:10,
      },
      {
        id: 8,
        name: "Wireless Headphone",
        price: 500,
        image:
          "https://www.startech.com.bd/image/cache/catalog/headphone/wiwu/elite/elite-01-500x500.webp",
        categories: ["Accessories", "Peripherals"],
        quantity:15,
      },
      {
        id: 9,
        name: "All-in-One Printer",
        price: 150,
        image:
          "https://www.startech.com.bd/image/cache/catalog/printer/pantum/p2500/pantum-p2500-01-500x500.webp",
        categories: ["Peripherals", "Printers"],
        quantity:5
      },
];

// Get all products
app.get('/api/products', (req, res) => {
  const { category } = req.query;
  let filters = [];
  if (typeof category === 'string') {
    filters = [category.toLowerCase()];
  } else if (Array.isArray(category) && category.length) {
    filters = category.map((category) => category.toLowerCase());
  }
  if (!filters.length) {
   return res.json(products);
  }
  res.json(
    products.filter((product) =>
      product.categories.some((category) =>
        filters.includes(category.toLowerCase())
      )
    )
  );
});

// Get a product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// Create a new product
app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    vendor: req.body.vendor,
    category: req.body.category,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update an existing product
app.put('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.name = req.body.name || product.name;
  product.quantity = req.body.quantity || product.quantity;
  product.price = req.body.price || product.price;
  product.vendor = req.body.vendor || product.vendor;
  product.category = req.body.category || product.category;

  res.json(product);
});

// Delete a product
app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  if (productIndex === -1)
    return res.status(404).json({ message: 'Product not found' });

  const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct);
});

// Search for products
app.get('/api/search', (req, res) => {
  const { name, vendor, category } = req.query;
  let filteredProducts = products;

  if (name) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (vendor) {
    filteredProducts = filteredProducts.filter((product) =>
      product.vendor.toLowerCase().includes(vendor.toLowerCase())
    );
  }

  if (category) {
    filteredProducts = filteredProducts.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  res.json(filteredProducts);
});

app.use('/api/users', require('./routes/api/user'));

// Start the server
app.listen(appConfig.PORT, () => {
  console.log(`Server is running on port ${appConfig.PORT}`);
});
