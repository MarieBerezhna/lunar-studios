import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/api', (req, res) => {
  res.status(200).json('test - get').end()
})
app.post('/api', (req, res) => {
  res.status(200).json('test - post').end()
})

export default app