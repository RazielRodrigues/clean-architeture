import { Route } from "./route.entity";

// Essa interface define a forma que será salva
export interface RouteRepositoryInterface {
    insert(route: Route): Promise<void>
    findAll(): Promise<Route[]>
}