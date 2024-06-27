//importar express
const express = require("express");
const app = express();
const database = require("./database.js")
// middlewares
app.use(express.json());
app.use(express.text());

// se escucha el servidor 
app.listen(3000, ()=>{
    console.log("servidor funcionando en puerto ",3000);
});