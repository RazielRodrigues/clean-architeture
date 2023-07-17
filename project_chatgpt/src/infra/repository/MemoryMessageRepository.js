import MessageEntityRepositoryInterface from '../../domain/repositories/MessageEntityRepositoryInterface'

export default class MemoryMessageRepository extends MessageEntityRepositoryInterface {

    items = [];

    save(message) {
        this.items.push(message)
    }

    getAll() {
        return this.items;
    }

}