const router = express.Router();
const handleLogin = require('../controllers/handleLogin');
const getCharById = require('../controllers/get.CharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');


router.get('/character/:id', getCharById)
router.get('/login', handleLogin)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;