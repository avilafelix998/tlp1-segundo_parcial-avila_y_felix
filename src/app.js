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
    // mostrar por id
    app.get("/products/:id",(req,res)=>{
    const id = req.params.id;
    res.json(database[id]);
    })
    // agregamos un usuario
app.post("/products/agregar",(req,res)=>{
    const {id, nombre} = req.body 
    database.push(req.body);
    res.send("usuario agregado")
})


// se escucha el servidor 
app.listen(3000, ()=>{
    console.log("servidor funcionando en puerto ",3000);
});