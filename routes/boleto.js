const router = require('express').Router();
const BoletoController = require('../src/app/controllers/boleto.controller');

router.route('/titulo').get(BoletoController.titulo);