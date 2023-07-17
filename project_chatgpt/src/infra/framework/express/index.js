import express from 'express';
import { json } from 'express';
import ChatController from '../../../interfaces/controller/ChatController.js';
import MemoryMessageRepository from '../../repository/MemoryMessageRepository.js';
import ChatGPTGateway from '../../gateway/ChatGPTGateway.js';

const app = express();
const controller = new ChatController(
    new MemoryMessageRepository(),
    new ChatGPTGateway()
);

app.use(json());
app.post("/message", async (req, res) => {
    res.status(201).json(
        await controller.sendMessage(req.body.message)
    );
});

app.get("/message", async (req, res) => {
    res.status(200).json(
        controller.getAll()
    );
});

app.get("/print", async (req, res) => {
    res.status(200).json(
        controller.print()
    );
});

app.listen(3005, () => {
    console.log('agora okay rodando em 3002');
});