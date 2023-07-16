"use strict"

export default class ReadTaskUseCase {

    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }

    execute() {
        return this.taskRepository.getAll()
    }

}