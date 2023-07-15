import { RouteRepositoryInterface } from "../../domain/route.repository";
import { Route } from '../../domain/route.entity';

// UM EXEMPLO DE VALIDAÇÃO EM MEMORIA
export class RouteInMemoryRepository implements RouteRepositoryInterface {
    items: Route[] = [];
    async insert(route: Route): Promise<void> {
        this.items.push(route)
    }
}