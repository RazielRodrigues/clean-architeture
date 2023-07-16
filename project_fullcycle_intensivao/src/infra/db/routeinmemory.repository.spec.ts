import { RouteInMemoryRepository } from "./routeinmemory.repository"
import { Route } from '../../domain/route.entity';
import { RouteProps } from "../../domain/route.entity";

describe("RouteInMemoryRepository Test", () => {
    test("deve inserir uma rota na memoria", async () => {

        const repository = new RouteInMemoryRepository();

        const dados: RouteProps = {
            title: 'meu nome',
            startPosition: { lat: 12, lng: 12 },
            endPosition: { lat: 121, lng: 121 },
        }

        const entity = new Route(dados)
        const entity2 = new Route(dados)

        await repository.insert(entity)
        await repository.insert(entity2)

        expect(repository.items).toHaveLength(2)
        expect(repository.items).toStrictEqual([entity, entity2])

    })
})