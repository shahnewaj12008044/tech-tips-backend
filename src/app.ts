import express, { Request, Response } from'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import router from './app/routes'
const app = express()


app.use(cors())
app.use(express.json())

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World! from tech tips blog')
})

//router 
app.use(router)

app.use(globalErrorHandler)
app.use(notFound)

export default app;