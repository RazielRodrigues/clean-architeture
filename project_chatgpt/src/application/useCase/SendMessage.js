import MessageEntityRepositoryInterface from '../../domain/repositories/MessageEntityRepositoryInterface';
import InterfaceChatbotAPI from '../../interfaces/gateway/InterfaceChatbotAPI';
import MessageEntity from '../../domain/entities/MessageEntity';

export default class SendMessage {

    messageRepositoy;
    messageService;

    constructor(MessageEntityRepositoryInterface, InterfaceChatbotAPI) {
        this.messageRepositoy = new MessageEntityRepositoryInterface();
        this.messageService = new InterfaceChatbotAPI();
    }

    execute(input) {
        const messageEntity = new MessageEntity(input);
        this.messageRepositoy(messageEntity);
        const output = this.messageService(messageEntity).send();
        return output;
    }

}