import { User } from '../models/user.js'
import jwt from 'jsonwebtoken'

export async function register(req, res){
  try {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password,
    })
    const findUser = await User.findOne({ email:req.body.email }).exec()
      if(isNaN(findUser)){
        throw 'El Email ingresado ya está registrado'
      } else {
        await newUser.save()
        return res.status(200).json(newUser)
      }
  } catch (e) {
      return res.status(500).json({message:e})
  }
}

export async function login(req, res, next){
  //aquí debería generar token??
  //creo que si
  //porque aqui va la api-key para que no esté en el bundle del front
  //Busca usuario
  try {
    const userData = await User.find({ email: req.body.email, password:req.body.password}, 'email').exec()
      //Check de resultado
      if(isNaN(userData)){
        const token = jwt.sign({sub: userData[0]._id}, process.env.API_KEY, {expiresIn:'7d'})
        return res.status(200).json({email:userData[0].email, token})
      }else {
        throw 'Usuario no encontrado :('
      }
  } catch (e) {
    return res.status(500).json({message:e})
  }

}
