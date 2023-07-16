import { CreateRouteUseCase } from '../../../application/createroute.usecase';
import { ListAllRouteUseCase } from '../../../application/listall.usecase';
import { RouteInMemoryRepository } from '../../db/routeinmemory.repository';
import { Command } from 'commander';

class ConsoleCMD {

    async main() {
        const program = new Command();
        program.version('v1')
            .option('-t, --title [value]', 'Título da rota')
            .option('-s, --start [value]', 'Ponto inicial')
            .option('-e, --end [value]', 'Ponto final')
            .parse(process.argv);

        const options = program.opts();
        console.log(options);

        const routeRepository = new RouteInMemoryRepository();
        const createRoute = new CreateRouteUseCase(routeRepository);
        // const output = createRoute.execute(options);
        // console.log(output);
    }
}

(new ConsoleCMD()).main();
