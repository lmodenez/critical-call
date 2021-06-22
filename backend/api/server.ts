import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';

import './database/connect';
import routes from './routes';
const cors = require('cors');

const app = express();

app.use(morgan('combined'));

app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.listen(3333, () => console.log('Servidor iniciado...🔥'));
