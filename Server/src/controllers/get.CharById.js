const axios = require('axios');

const getCharById = (res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { name, gender, origin, status, image, species } = response.data;
      const character = {
        id,
        name,
        gender,
        origin,
        image,
        species,
        status,
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    });
};

module.exports = {
  getCharById,
};
