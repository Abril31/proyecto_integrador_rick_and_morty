const http = require('http');
const characters = require('./utils/data');
const PORT = 3001;

 http.createServer((req, res)=>{
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');

    //localhost:3001/rickandmorty/character/${id}ya tiene una barra por default

    if( url.includes("rickandmorty/character")){
        //extraer el id por medio de split y pop
        let urlID = url.split('/').pop()
        let findID = characters.find(character =>{
            character.id = Number(urlID)
        })
        res.writeHead(200, {
            "Content-Type": "application/jason"
        })
       
        return res.end(JSON.stringify(findID));
    }

}).listen(PORT);