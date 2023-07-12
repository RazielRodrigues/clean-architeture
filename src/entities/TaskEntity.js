"use strict"

export default class Task {

    #id;
    #nome;
    #status;

    constructor(input) {
        this.#setId(input?.id)
        this.#setNome(input?.nome)
        this.#setStatus(input?.status)
    }

    #setId(id) {
        this.#id = id;
    }

    get id() {
        return this;
    }

    #setNome(nome) {
        this.#nome = nome;
    }

    get nome() {
        return this;
    }

    #setStatus(status) {
        this.#status = status;
    }


    get status() {
        return this;
    }

}