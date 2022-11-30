
const express = require('express')
const app = express()
const puerto = 3000
const items = require('./controllers/items')
const db = require('./config/db')
const cors = require('cors')
// BASE DE DATOS
db()

app.get('/',(req,res)=>{
    res.send('Hola mundo')
})
app.use(express.json())
app.use(cors())
app.use('/about', require('./routes/paginas'))
app.use('/api', require('./routes/api'))
app.use('/api/items', require('./routes/items'))
app.use('/api/generos', require('./routes/generos'))
app.use('/api/usuarios', require('./routes/usuarios'))

app.listen(puerto,()=>{
    console.log("Servidor activo puerto:" + puerto)
})
