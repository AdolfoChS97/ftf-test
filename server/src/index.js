const express = require('express')
const log = require('npmlog')
const cors = require('cors')
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const { options } = require('./docs')
require('dotenv').config()
const { env: { APP_PORT } } = process
const routes = require('./routes')

log.info('Starting Github API...', 'Bootstraping')

const app = express()
const port = APP_PORT || 3000
const specs = swaggerJsdoc(options)

app.use(cors())
app.use(express.json())
app.use('/api/v1', routes)
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

log.info(`Swagger Docs loaded at http://localhost:${port}/docs`, 'Bootstraping')


app.listen(port, async () => {
    log.info(`Github API listening at http://localhost:${port}`, 'Bootstraping')
})