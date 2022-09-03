import { Content } from '../../models/content/home.js'
import { User } from '../../models/user.js'
import jwt from 'jsonwebtoken'

export async function getContentHome(req, res, next){
  try {
    const webData = await Content.find({ name: 'HOME'}).exec()
      //Check de resultado

      if(isNaN(webData)){
        //console.log(webData[0])
        //const token = jwt.sign({sub: userData[0]._id}, process.env.API_KEY, {expiresIn:'7d'})
        return res.status(200).json({primary:webData[0].primary, secondary:webData[0].secondary, third:webData[0].third, newsletter:webData[0].newsletter})
      }else {
        throw 'Contenido para HOME no encontrado :O'
      }
  } catch (e) {
    return res.status(500).json({message:e})
  }

}

export async function getStatsWeb(req, res, next){
  //console.log('hola')
  try {
    const webdStats = await User.estimatedDocumentCount();
      return res.status(200).json({totalUsers:webdStats})
  } catch (e) {
      return res.status(500).json({message:e})
  }
}
