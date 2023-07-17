import MessageEntityRepositoryInterface from '../../domain/repositories/MessageEntityRepositoryInterface.js';
import InterfaceChatbotAPI from '../../interfaces/gateway/InterfaceChatbotAPI.js';
import MessageEntity from '../../domain/entities/MessageEntity.js';

export default class SendMessage {

    messageRepositoy;
    messageService;

    constructor(messageEntityRepositoryInterface, interfaceChatbotAPI) {
        this.messageRepositoy = messageEntityRepositoryInterface;
        this.messageService = interfaceChatbotAPI;
    }

    async execute(input) {
        const messageEntity = new MessageEntity(input);
        this.messageRepositoy.save(messageEntity.Message);
        const output = await this.messageService.send(messageEntity);
        return output;
    }

}