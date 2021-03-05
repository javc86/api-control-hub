import express from 'express';
import { fibonacci } from '../actions';

const api = express.Router();

api.get('/fibonacci/:n', async (req, res) => {
    try {
        if (req.params.n.match(/^[0-9]+$/) && parseInt(req.params.n) > -1) {
            const result = fibonacci(parseInt(req.params.n));
            res.send({ result });
        } else {
            res.send({error: 'Must send a positive number (n)'});
        }
    } catch (error) {
        res.send({error: error.message});
    }
});

export default api;