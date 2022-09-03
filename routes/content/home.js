import express from 'express';
import { getContentHome, getStatsWeb } from '../../controllers/content/home.js'
import { Content } from '../../models/content/home.js';
import { apiHandler } from '../../jwt/index.js'
import cors from 'cors';

export const contentRouter = express.Router();

const optionsCORS = {
  origin: process.env.FRONT_URL,
  methods: ['GET'],
  allowedHeaders:  ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
  //credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200
}

contentRouter.options('/home', cors(optionsCORS))
contentRouter.options('/stats', cors(optionsCORS))

//userRouter.post('/register', register);   //ex: apiHandler(register) best ex: userRouter.post('/register', cors(optionsCORS) ,apiHandler(register)) antes hay que entregarlo al options

contentRouter.get('/home', cors(optionsCORS), apiHandler(getContentHome))
contentRouter.get('/stats', cors(optionsCORS), apiHandler(getStatsWeb))
