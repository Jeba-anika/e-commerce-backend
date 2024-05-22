import cors from 'cors'
import express, { Request, Response } from 'express'
import { OrderRouter } from './app/modules/orders/orders.router'
import { ProductRoutes } from './app/modules/products/products.router'

const app = express()

//parsers
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/products', ProductRoutes)
app.use('/api/orders', OrderRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
})

export default app
