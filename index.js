import mongoose from 'mongoose';
import { startServer } from './server.js'

const userMongo = process.env.USER_DB;
const passMongo = process.env.PASSWORD_DB;
const hostDBMongo = process.env.HOST_DB;
const hostDBMongoLocal = process.env.HOST_DB_LOCAL
const nameDB = process.env.NAME_DB;
const uri = `mongodb+srv://${userMongo}:${passMongo}@${hostDBMongo}/${nameDB}?retryWrites=true&w=majority`

await mongoose.connect(userMongo && password ? uri : hostDBMongoLocal).then(() => {
  console.log('La conexión con la base de datos se ha establecido correctamente')
  if(userMongo){
    console.log(`Conectado a Base de Datos Remota ${process.env.HOST_DB}`)
  }else {
    console.log(`Conectado a Base de Datos Local ${process.env.HOST_DB_LOCAL}`)
  }
  startServer()
}).catch((err) => {
  console.log('Error con la base de datos: '+err)
})
