import { LatLng, Route } from "../domain/route.entity";
import { RouteRepositoryInterface } from "../domain/route.repository";

// ORGANIZA AS ENTIDADES
// O PRIMEIRO CLIENTE DAS ENTIDADES
// ELE É OBRIGADO A RETORNAR UMA SAIDA
export class ListAllRouteUseCase {

    constructor(private routeRepo: RouteRepositoryInterface) { }

    async execute(): Promise<CreateRouteOutput> {
        const routes = await this.routeRepo.findAll();
        return routes.map(r => r.toJSON());
    }
}

//SOLID
//SO TEM O SINGLE
type CreateRouteOutput = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[];
}[]