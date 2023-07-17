import express from 'express';
import { json } from 'express';

const app = express();

app.use(json());

app.get("/message", (req, res) => {
    res.status(200).json("ok");
});

app.listen(3002, () => {
    console.log('agora okay rodando em 3002');
});
