
const express = require('express')
const controller = require('../../infra/controllers/TaskController')
const app = express();

app.use(json)
app.use('/tasks', controller)

module.exports = app