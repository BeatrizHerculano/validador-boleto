const Validate = require('../models/simulation.model');

class BoletoController {
    static titulo(req, res) {
        const { linhaDigitavel } = req.body;
        res.send(new Validate(true, 23.55, '01/02/2020', '23793381286001912262586000063304181470000010000'));
    }
}

module.exports = BoletoController;
