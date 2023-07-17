import SendMessage from "../../application/useCase/SendMessage.js";
import MessageEntityRepositoryInterface from '../../domain/repositories/MessageEntityRepositoryInterface.js';
import InterfaceChatbotAPI from '../gateway/InterfaceChatbotAPI.js';
import TextfilePresenter from '../presenter/TextFilePresenter.js';

export default class ChatController {

    constructor(messageEntityRepositoryInterface, interfaceChatbotAPI) {
        this.repository = messageEntityRepositoryInterface;
        this.interfaceChatbotAPI = interfaceChatbotAPI;
    }

    async sendMessage(message) {
        try {
            const saveCase = new SendMessage(this.repository, this.interfaceChatbotAPI);
            const output = await saveCase.execute(message);
            return output;
        } catch (error) {
            console.error(error)
        }
    }

    getAll() {
        try {
            return this.repository.getAll();
        } catch (error) {
            console.error(error)
        }
    }

    print() {
        try {
            return (new TextfilePresenter()).print();
        } catch (error) {
            console.error(error)
        }
    }

}