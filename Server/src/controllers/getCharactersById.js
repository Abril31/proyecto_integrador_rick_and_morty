const axios = require('axios') ;
export const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    //guardar en una var y destructurar el obj que me llega de la api
    .then( (res) =>{
        const { id, name, gender, species, origin, image, status} = res.charData;

    //devuelve una respuesta en format JASON
    res
    .writeHead(200, {
        "content-type": "application/json"})
    .end(JASON.stringify({ id, name, gender, species, origin, image, status}));
    })
    .catch((error)=>{
        res.writeHead(500, {
            "content-type": "text/plain"})
        .end((error.message));
    })

}
module.exports = getCharById;
