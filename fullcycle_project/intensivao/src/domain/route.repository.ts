import { Route } from "./route.entity";

export interface RouteRepositoryInterface {
    insert(route: Route): Promise<void>
}

//DIP AQUI É A INVERSÃO DE DEPENDENCIA
