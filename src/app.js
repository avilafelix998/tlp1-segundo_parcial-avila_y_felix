//importar express
const express = require("express");
const app = express();
const database = require("./database")
// middlewares
app.use(express.json());
app.use(express.text());
//mostrar la base de datos en el servidor 
app.get("/products",(req,res)=>{
    res.json(database)
    
    });
    // mostrar el producto por id
    app.get("/products/:id",(req,res)=>{
    const id = req.params.id;
    res.json(database[id]);
    })
    // agregamos un producto
app.post("/products/agregar",(req,res)=>{
    const {id, nombre} = req.body 
    database.push(req.body);
    res.send("producto agregado")
})
//editar un producto
app.put("/products/editar/:id",(req,res)=>{
    const idProducts = req.params
    database.splice(idProducts,1,req.body)  
    })
    app.delete("/products/eliminar/:id",(req, res)=>{
        const idProducts = req.params
        database.splice(idProducts,1)
    })


// se escucha el servidor 
app.listen(3000, ()=>{
    console.log("servidor funcionando en puerto ",3000);
});