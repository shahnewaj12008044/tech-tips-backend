import express, { Request, Response } from'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import router from './app/routes'
import path from 'path'
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:['http://localhost:3000',"https://tech-tips-frontend.vercel.app"]}))

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World! from tech tips blog')
})

//router 
app.use(router)
app.use(express.static(path.join(__dirname, '')));

app.use(globalErrorHandler)
app.use(notFound)

export default app;