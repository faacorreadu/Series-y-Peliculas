// const c = require('colors')
// console.log("HOLAMUNDO".blue.bgGreen)
// console.log("fabio".america.bgMagenta)

const fs = require('fs')
const puerto = 3000 
const http = require("http")

http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url == "/registro"){
        const file = fs.readFileSync('registro.html')
        res.write(file)
        return res.end()
    }
    res.write('<h1>ERROR 404</h1>')
    res.end()
}).listen(puerto)