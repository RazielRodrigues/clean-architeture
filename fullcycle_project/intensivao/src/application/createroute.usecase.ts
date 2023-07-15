import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

// ORGANIZA AS ENTIDADES
// O PRIMEIRO CLIENTE DAS ENTIDADES
// ELE É OBRIGADO A RETORNAR UMA SAIDA
export class CreateRouteUseCase {

    constructor(private routeRepo: RouteRepositoryInterface) { }

    async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
        const route = new Route(input)
        await this.routeRepo.insert(route);
        return route.toJSON();
    }
}

// DTO
type CreateRouteInput = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    paths?: LatLng[];
}

//SOLID
//SO TEM O SINGLE
type CreateRouteOutput = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    paths?: LatLng[];
}