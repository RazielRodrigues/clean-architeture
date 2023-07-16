import { Route } from "./route.entity";

export interface RouteRepositoryInterface {
    insert(route: Route): Promise<void>
    findAll(): Promise<Route[]>
}

//DIP AQUI É A INVERSÃO DE DEPENDENCIA
