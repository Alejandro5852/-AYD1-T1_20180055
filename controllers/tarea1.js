require('dotenv').config();
const controller = {};
controller.getInfo = (req, res) => {
    return res.status(200).json({ Nombre: 'César Alejandro Sosa Enríquez', Carnet: '201800555' });
}
controller.calculadora = (req, res) => {
    return res.status(200).json({ resultado: req.body.num1 * req.body.num2 });
}
module.exports = controller;
