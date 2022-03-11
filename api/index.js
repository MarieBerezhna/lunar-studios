import express from 'express'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
const Excel = require('exceljs')
const excelToJson = require('convert-excel-to-json')
const filename = 'data/lunar.xlsx';
const workbook = new Excel.Workbook();
const path = require("path")
const app = express()
app.use(bodyParser.json())
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}))

app.get('/content', async (req, res) => {
const file = await workbook.xlsx.readFile(filename)
const sheets = file._worksheets.filter(w => w.name.indexOf('section') !== -1).map(s => s.name)
const data = excelToJson({
    sourceFile: filename,
    sheets: sheets
});
  res.json(data)
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
export default app