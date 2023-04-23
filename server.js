//import exp from "constants";
import { claseInventario } from "./Inventario/inventario.js";
import { Producto } from "./Inventario/productos.js";

import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/producto/:id', (req, res) => {
    let productoId = req.params.id;
    let encontrarProducto = claseInventario.search(productoId);

    encontrarProducto ? res.json({encontrarProducto}) : res.json({msg:'No se encontro el producto'});

})

app.post('/producto/add', (req, res) => {
    let producto = req.body;
    claseInventario.addProduct(producto);
    res.json({producto});

})

app.post('/producto', (req, res) => {
    let productos = claseInventario.listProducts();
    res.json({productos});
})

app.listen(3000, () => {
    console.log('Escuchando');
})