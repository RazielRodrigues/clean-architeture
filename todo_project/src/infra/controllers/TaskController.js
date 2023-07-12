const express = require("express");
const CreateTaskUseCase = require('../../use_case/CreateTaskUseCase')
const InMemoryTaskRepository = require("../repositories/TaskRepository")

const app = express.Router()
const taskRepository = new InMemoryTaskRepository()

app.post((req, res) => {
    const task = new CreateTaskUseCase(taskRepository);
    task.execute(req.body.nome)
    res.status(201).json(task)
})

module.exports = app;