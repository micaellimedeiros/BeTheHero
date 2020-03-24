const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Micaelli Medeiros'
  })
});

module.exports = routes;