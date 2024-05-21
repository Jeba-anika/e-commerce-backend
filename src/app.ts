import cors from 'cors'
import express, { Request, Response } from 'express'
import { ProductRoutes } from './app/modules/products/products.router'

const app = express()

//parsers
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/products', ProductRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
})

export default app
