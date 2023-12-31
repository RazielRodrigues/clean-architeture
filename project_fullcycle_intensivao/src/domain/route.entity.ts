import crypto from "crypto";

export type LatLng = { lat: number, lng: number };

export type RouteProps = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[]; // segunda regra de negocio os pontos podem ser nulos
}

export class Route {
    public readonly id: string;
    public props: Required<RouteProps>;
    // Primeira regra de negocio
    constructor(props: RouteProps, id?: string) {
        // assimilando o points sendo
        // como null
        this.id = id || crypto.randomUUID()
        this.props = {
            ...props,
            points: props.points || []
        }
    }

    updatePosition(startPosition: LatLng, endPosition: LatLng) {
        this.props.startPosition = startPosition;
        this.props.endPosition = endPosition;
    }

    // Resésitando a regra do S
    // e nao deixando a entidade anemica!
    updateTile(title: string) {
        // regras de negocio ficam aqui
        // mudar para minisculo
        // ter no minimo 4 caracters
        // isso nao é pra ficar em SERVICE, nem em CONTROLLER
        this.props.title = title;
    }

    updatePoints(points: LatLng[]) {
        this.points = points;
    }

    toJSON() {
        return {
            id: this.id,
            ...this.props
        }
    }

    get title() {
        return this.props.title;
    }

    // se fosse publico seria anemica e_e
    private set title(value: string) {
        this.props.title = value;
    }

    get startPosition() {
        return this.props.startPosition;
    }

    // se fosse publico seria anemica e_e
    private set startPosition(value: LatLng) {
        this.props.startPosition = value;
    }

    get endPosition() {
        return this.props.endPosition;
    }

    // se fosse publico seria anemica e_e
    private set endPosition(value: LatLng) {
        this.props.endPosition = value;
    }

    get points() {
        return this.props.points;
    }

    // se fosse publico seria anemica e_e
    private set points(value: LatLng[]) {
        this.props.points = value;
    }

}