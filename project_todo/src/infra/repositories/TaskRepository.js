"use strict"
import Task from '../../entities/TaskEntity';

export default class InMemoryTaskRepository {

    constructor() {
        this.tasks = [];
        this.id = 1;
    }

    create(nome) {
        this.tasks.push(
            new Task({
                id: this.id++,
                nome: 'TERMINAR CLEAN ARCHITETURE',
                status: false
            })
        )
    }

    update(id, status) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.status = status;
            return task;
        }
        return null;
    }

    delete(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }


}