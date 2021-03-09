require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3333
const screenshot = require('./screenshot')
const theirtube = require('./theirtube')

app.get('/', (req, res) => res.status(200).json({ status: 'ok' }))

app.get('/screenshot', (req, res) => {
  const url = req.query.url
  ;(async () => {
    const buffer = await screenshot(url)
    res.setHeader('Content-Disposition', 'attachment; filename="screenshot.png"')
    res.setHeader('Content-Type', 'image/png')
    res.send(buffer)
  })()
})

app.get('/feed', async (req, res) => {
    try {
        //await theirtube.initialize();
        //await theirtube.login(process.env.PERSONA1_USERNAME, process.env.PERSONA1_PASSWORD);
        //await theirtube.switchAccount(process.env.PERSONA1_USERNAME);
        await theirtube.scrape([process.env.PERSONA1_USERNAME]);
        res.status(200).json({ updated: 'ok' })        
    } catch (error) {
        res.status(500).json({ updated: 'error' })        
    }

})

app.listen(port, () => console.log(`app listening on port ${port}!`))