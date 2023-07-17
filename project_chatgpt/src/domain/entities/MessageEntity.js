export default class MessageEntity {

    #Message;

    constructor(message) {
        this.#Message = this.#setMessage(message);
    }

    #setMessage(message) {
        if (!message?.length) {
            throw new Error("Can not be empty!");
        }

        if (typeof message !== 'string') {
            throw new Error("Message not valid!")
        }

        return message.toLowerCase()
    }

    get Message() {
        return this.#Message;
    }

}