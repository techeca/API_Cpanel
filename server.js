import express from 'express';
import cors from 'cors';
import { mainRouter } from './routes/index.js'
import { userRouter } from './routes/user.js'
import { contentRouter } from './routes/content/home.js'

const app = express();
//*const host = process.env.HOST_FRONT;
const port = process.env.PORT_API;

export function startServer(){
  app.listen(port, () => {
    console.log('Starting APP...')
    app.use(express.urlencoded({extended:false}))  //Necesario para POST/PUT
    app.use(express.json());  //Necesario para POST/PUT
    //app.options('/api/content/home', cors(optionsCORS));
    //console.log('CORS enabled')
    //app.use(mainRouter)
    app.use('/api/user', userRouter)
    app.use('/api/content', contentRouter)
    console.log('ROUTES enabled')
    console.log('APP ON');
    console.log(`APP listening on port ${port}`)
    }
  )
}
