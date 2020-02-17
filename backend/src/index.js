const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require ('http')
const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const server = http.Server(app)

setupWebsocket(server)

mongoose.connect('mongodb+srv://arthur:omnistack@cluster0-wkoea.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

// Métodos HTTP: get, post, put, delete

// Tipos de parâmetros

// Query Params: req.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteação de um registro)

// MongoDB (Banco Não-Relacional)

app.post('/users', (request, response) => {
    console.log(request.body)
    return response.json({ message: 'Hello World'})
})

server.listen(3333)





