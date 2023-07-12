"use strict"

export default class CreateTaskUseCase {

    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }

    execute(nome) {
        this.taskRepository.create(nome)
    }

}