import MemoryMessageRepository from '../../infra/repository/MemoryMessageRepository';


export default class TextfilePresenter {

    print() {
        const memoryMessageRepository = new MemoryMessageRepository();
        const data = memoryMessageRepository.getAll();
        // HANDLE DATA AND TRANSFORM IN A TXT FILE AFTER THAT SEND TO EXPRESS ROUTE
    }

}