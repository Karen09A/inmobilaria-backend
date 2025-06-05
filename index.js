import express from 'express'
const app = express()
const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/respuesta', (req, res) => {
  res.json({message: 'Hola mundillo'})
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})