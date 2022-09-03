import express from 'express';
import { register, login } from '../controllers/user.js'
import { User } from '../models/user.js';
import { apiHandler } from '../jwt/index.js'
import cors from 'cors';

export const userRouter = express.Router();

const optionsCORS = {
  origin: process.env.FRONT_URL,
  methods: ['POST'],
  allowedHeaders:  ['Content-Type', 'Authorization'],
  //credentials: true,
  optionsSuccessStatus: 200
}

userRouter.options('/register', cors(optionsCORS))
userRouter.options('/login', cors(optionsCORS))

userRouter.post('/register', cors(optionsCORS), apiHandler(register));   //ex: apiHandler(register) best ex: userRouter.post('/register', apiHandler(register))
userRouter.post('/login', cors(optionsCORS), apiHandler(login));
