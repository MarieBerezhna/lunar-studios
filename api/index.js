import express from 'express'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
const path = require("path")
const app = express()
app.use(bodyParser.json())
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}))

app.post('/upload', (req, res) => {
  const file = req.files.file
  const targetPath = path.join(__dirname, `../static/assets/${file.name}`)
  file.mv(targetPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(file.name);
  })
})
export default app