import express from 'express';
import cors from 'cors';
import http from 'http';
import { router } from './router';
const app = express()

app.use(cors())

const serverHttp = http.createServer(app);
app.use(express.json());
app.use(router);


export {serverHttp};