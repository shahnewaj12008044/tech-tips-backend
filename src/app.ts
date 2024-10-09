import express, { Request, Response } from'express'
import cors from 'cors'
const app = express()


app.use(cors())
app.use(express.json())

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World! from tech tips blog')
})


export default app;