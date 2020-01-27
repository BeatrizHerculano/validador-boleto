
const Boleto = require('../../app/controllers/boleto.controller');

describe('simulation controller test suite', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    test('Shold return the expected validation results', async () => {
        const req = {
            body: {
                linhaDigitavel: '1321321321321321',
            },
        };
        const res = {
            send: jest.fn(),
        };


        await Boleto.titulo(req, res);

        expect(res.send).toBeCalled();
    });
});
