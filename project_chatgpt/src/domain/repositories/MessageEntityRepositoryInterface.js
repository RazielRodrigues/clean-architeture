export default class MessageEntityRepositoryInterface {

    async save(message) {
        throw new Error("Method not implemented " + this.save.name)
    }

    async getAll() {
        throw new Error("Method not implemented " + this.getAll.name)
    }

}