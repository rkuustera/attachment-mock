const express = require('express')
const fs = require('fs')
const app = express()
const port = 29109

app.get('/attachments/:id', (req, res) => {
  try {
    const fileLocation = `./files/${req.params.id}.pdf`;
    const data = fs.readFileSync(fileLocation)
    res.contentType('application/pdf')
    return res.status(200).send(data)
  } catch (err) {
    console.log(err)
    return res.status(404).send()
  }
})

app.listen(port, () => {
  console.log(`Attachment mock app running at http://localhost:${port}`)
})
