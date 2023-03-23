const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();




router.get('/',function(req,res){

    res.sendFile(path.join(__dirname+'/home.html'));
})

router.get('/sobre',function(req,res){

    res.sendFile(path.join(__dirname+'/sobre.html'));
})

router.get('/cadastro',function(req,res){

    res.sendFile(path.join(__dirname+'/cadastro.html'));
})

router.get('/login',function(req,res){

    res.sendFile(path.join(__dirname+'/login.html'));
})

router.get('/addPr',function(req,res){

    res.sendFile(path.join(__dirname+'/addPr.html'));
})

router.get('/estoque',function(req,res){

    res.sendFile(path.join(__dirname+'/estoque.html'));
})

router.get('/menu',function(req,res){

    res.sendFile(path.join(__dirname+'/menu.html'));
})

router.get('/pedidoCozinha',function(req,res){

    res.sendFile(path.join(__dirname+'/pedidoCozinha.html'));
})

app.use('/',router);

app.listen(process.env.port || 3000);


console.log("Server rodando");