const express = require('express');
const authRouter = require('../routers/authRouter');

const app = express();

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', authRouter);

module.exports = app;
