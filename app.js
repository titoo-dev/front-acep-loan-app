import express from 'express'
import { resolve } from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'


const app = express()


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(resolve('public')))


app.listen(8000, () => {
    console.log("Server Started at 8000");
})