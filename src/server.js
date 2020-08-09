// Servidor
const express = require('express')
const server = express()

const  { pageLanding, pageStudy, pageGiveClasses } = require('./pages')

// Configurar Nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


// Início e config do server
server
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5000)