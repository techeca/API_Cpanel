import express from 'express';
//import { getPets, getPetById } from '../controllers/pet.js'
import { User } from '../models/user.js';

export const mainRouter = express.Router();

mainRouter.get('/', function (req, res) {
  res.send('API ON!');
});
