import SendMessage from "../../application/useCase/SendMessage";
import MessageEntityRepositoryInterface from '../../domain/repositories/MessageEntityRepositoryInterface';
import InterfaceChatbotAPI from '../gateway/InterfaceChatbotAPI';
import TextfilePresenter from '../presenter/TextFilePresenter';

export default class ChatController {

    constructor(MessageEntityRepositoryInterface, InterfaceChatbotAPI) {
        this.repository = MessageEntityRepositoryInterface;
        this.interfaceChatbotAPI = InterfaceChatbotAPI;
    }

    sendMessage(message) {
        try {
            const saveCase = new SendMessage(this.repository, this.interfaceChatbotAPI);
            const output = saveCase.execute(message);
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