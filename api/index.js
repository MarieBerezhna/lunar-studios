import express from 'express'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import sendMail from './mail'
const Excel = require('exceljs')
const excelToJson = require('convert-excel-to-json')
const filename = 'data/lunar.xlsx';
const workbook = new Excel.Workbook()
const path = require("path")
const app = express()
const cors = require('cors')
app.use(cors({
    origin: 'http://lunarstudios.webmarie.com' || 'http://localhost:3000'
}))
app.use(bodyParser.json())
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}))

const checkAdmin = (req, res) => {
  const { email } = req.query
  return email === process.env.ADMIN
}

app.get('/check', (req, res) => {
  const admin = checkAdmin(req)
  console.log(admin)
  res.send({admin})
})
app.get('/content', async (req, res) => {
  const file = await workbook.xlsx.readFile(filename)
  const sheets = file._worksheets.filter(w => w.name.indexOf('section') !== -1).map(s => s.name)
  const data = excelToJson({
      sourceFile: filename,
      sheets: sheets
  });
  const arr = []
  Object.keys(data).map(key => {
      if (!data[key].length) return
      const name = key.replace('-section', '')
      const headers = data[key][0]
      const items = []
      data[key].map((entry, idx) => {
          let item = {}
          if (idx !== 0) {
              Object.keys(entry).map(key => {
                  Object.assign(item, {[headers[key]] : entry[key]})
              })
          }
          if (Object.keys(item).length) items.push(item)
      })
      arr.push({name, data: items})
  })
  res.json(arr)
})
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

app.post('/contact', async (req, res) => {
  const { email, name, message } = req.body
  sendMail(process.env.ADMIN, email, `Message from ${name} via Lunar Studios contact form`, message, res)
})
export default app