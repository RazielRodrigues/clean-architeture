import { RouteInMemoryRepository } from "../infra/db/routeinmemory.repository"
import { CreateRouteUseCase } from "./createroute.usecase"

describe("CreateRouteUseCase", () => {
    test("deve criar a nova rota", async () => {
        const repository = new RouteInMemoryRepository()
        const createRoute = new CreateRouteUseCase(repository);

        const output = await createRoute.execute({
            title: 'aaa',
            startPosition: { lat: 122, lng: 12 },
            endPosition: { lat: 1212, lng: 22 }
        })
        expect(repository.items).toHaveLength(1)

        expect(output).toStrictEqual({
            id: repository.items[0].id,
            title: 'aaa',
            startPosition: { lat: 122, lng: 12 },
            endPosition: { lat: 1212, lng: 22 },
            points: []
        })

    })
})