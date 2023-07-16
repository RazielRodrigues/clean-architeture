import express, { Express, Request, Response, json } from "express"
import { CreateRouteUseCase } from '../../../application/createroute.usecase';
import { RouteInMemoryRepository } from "../../db/routeinmemory.repository";
import { ListAllRouteUseCase } from "../../../application/listall.usecase";

const app: Express = express()

/**
 * AGORA ENTENDEU A SUJEIRA FICA AQUI SE EU QUISESSES
 * MUDAR PARA MYSQL EU MUDARIA APENAS CRIANDO UM NOVO
 * REPOSITORIO E DEPOIS MANDARIA ELE PRA CA
 */
const routeRepo = new RouteInMemoryRepository();

/**
 * SE EU QUISESSE FAZER A ENTRADA DE DADOS PRO 
 * CASO DE USO SER VIA TERMINA EU CONSEGUIRIA FACILMENTE!
 */

app.use(express.json())

// Aqui poderia chamar um controller
app.post('/routes', async (req: Request, res: Response) => {
    const createRouteUseCase = new CreateRouteUseCase(routeRepo);
    const output = await createRouteUseCase.execute(req.body)
    res.status(201).json(output);
})

app.get('/routes', async (req: Request, res: Response) => {
    const createRouteUseCase = new ListAllRouteUseCase(routeRepo);
    const output = await createRouteUseCase.execute()
    res.status(201).json(output);
})

app.listen(3000, () => {
    console.log('rodando em 3000 kakaka')
})