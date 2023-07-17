import { assert } from 'chai';
import MessageEntityRepositoryInterface from '../../../domain/repositories/MessageEntityRepositoryInterface.js';

describe("MessageEntityRepositoryInterface", () => {
    it("save", () => {
        try {
            (new MessageEntityRepositoryInterface()).save();
        } catch (error) {
            assert.equal(error.message, "Method not implemented save");
        }
    });
    it("getAll", () => {
        try {
            (new MessageEntityRepositoryInterface()).getAll();
        } catch (error) {
            assert.equal(error.message, "Method not implemented getAll");
        }
    });
});
