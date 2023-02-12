const router = require('express').Router();
const tareaController = require('../controllers/tarea1');
router.get('/api/info-carnet-/201800555', tareaController.getInfo);
router.post('/api/calculadora/201800555', tareaController.calculadora);
module.exports = router;