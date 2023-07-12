"use strict"

export default class DeleteTaskUseCase {

    constructor(taskRepository) {
        this.taskRepository = taskRepository
    }

    execute(id) {
        this.taskRepository.delete(id)
    }

}