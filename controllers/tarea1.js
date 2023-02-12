require('dotenv').config();
const controller = {};
controller.getInfo = (req, res) => {
    return res.status(200).json({ Nombre: 'César Alejandro Sosa Enríquez', Carnet: '201800555' });
}
module.exports = controller;
