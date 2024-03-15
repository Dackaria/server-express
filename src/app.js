import express from 'express';
import ProductManager from '../ProductManager.js';
import CartManager from './CartManager.js';
import productsRouter from './products.routes.js';
import cartsRouter from './carts.routes.js';

const app = express();
const PORT = 8080;
const API_PREFIX = "api";

// Crear una instancia de ProductManager
const productManager = new ProductManager('productos.json');
const cartManager = new CartManager('carrito.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas para productos
app.use(`/${API_PREFIX}/products`, productsRouter); 

// Rutas para carritos
app.use(`/${API_PREFIX}/carts`, cartsRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});