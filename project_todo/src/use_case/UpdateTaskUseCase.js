"use strict"

export default class UpdateTaskUseCase {

    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }

    execute(status, id) {
        this.taskRepository.update(status, id)
    }

}