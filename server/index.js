import express from 'express';
import bodyParser from 'body-parser';
import api from './api';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, File-Format")
  res.header("Content-Type", "application/json")
  next();
});

app.use('/api', api);

app.listen((process.env.SERVER_PORT || 3000), () => {
  console.log('**************************************************');
  console.log('SERVIDOR CORRIENDO EN EL PUERTO ' + (process.env.SERVER_PORT || 3000));
  console.log('**************************************************');
});