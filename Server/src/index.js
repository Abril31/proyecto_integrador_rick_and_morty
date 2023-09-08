const http = require('http');
const getCharById = require('./controllers/')
const PORT = 3001;

 http.createServer((req, res)=>{
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');

    //localhost:3001/rickandmorty/character/${id} ya tiene una barra por default

    if( url.includes("rickandmorty/character")){
        //extraer el id por medio de split y pop
        let urlID = url.split('/').pop();
        getCharById(res, urlID)
    }
}).listen(PORT);