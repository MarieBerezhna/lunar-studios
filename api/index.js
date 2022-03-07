import express from 'express'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
const path = require("path")
const app = express()
app.use(bodyParser.json())
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}))
app.get('/api', (req, res) => {
  res.status(200).json('test - get').end()
})
app.post('/api', (req, res) => {
  res.status(200).json('test - post').end()
})
app.post('/upload', (req, res) => {
  const file = req.files.file
  const targetPath = path.join(__dirname, `../assets/${file.name}`)
  console.log(file, targetPath)
  file.mv(targetPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(file.name);
  })
})
export default app