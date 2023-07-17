import { assert } from 'chai';
import MessageEntity from '../../../domain/entities/MessageEntity.js';

describe("MessageEntity", () => {
    it("deve inicializar a entidade com a mensagem correta", () => {
        const message = "olá";
        const entity = new MessageEntity(message);
        assert.strictEqual(entity.Message, message);
    });
    it("deve retornar erro quando sem mensagem", () => {
        try {
            new MessageEntity();
        } catch (error) {
            assert.equal(error.message, "Can not be empty!");
        }
    });
    it("deve retornar erro quando nao string", () => {
        try {
            new MessageEntity([{}]);
        } catch (error) {
            assert.equal(error.message, "Message not valid!");
        }
    });
});
