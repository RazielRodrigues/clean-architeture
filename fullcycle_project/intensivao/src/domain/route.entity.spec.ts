import { LatLng, Route, RouteProps } from "./route.entity"

describe("Route entity", () => {
    test("constructor", () => {
        let routeProps: RouteProps = {
            title: 'teste',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 1, lng: 3 },
        }
        let route = new Route(routeProps);

        expect(route.id).toBeDefined();

        expect(route.props).toStrictEqual({
            ...routeProps, points: []
        })

        routeProps = {
            title: 'teste',
            startPosition: { lat: 0, lng: 1 },
            endPosition: { lat: 1, lng: 3 },
            points: [
                { lat: 1, lng: 3 }
            ]
        }
        route = new Route(routeProps);

        expect(route.props).toStrictEqual({
            ...routeProps, points: [
                { lat: 1, lng: 3 }
            ]
        })
    })
    test("updateTile", () => {
        const routeProp: RouteProps = {
            title: 'nome rotinha',
            startPosition: { lat: 12, lng: 13 },
            endPosition: { lat: 12, lng: 458 },
        }

        const route = new Route(routeProp);

        route.updateTile('agora mudou')

        expect(route.props.title).toStrictEqual("agora mudou")
    })
    test("updatePosition", () => {
        const routeProp: RouteProps = {
            title: 'nome rotinha',
            startPosition: { lat: 12, lng: 13 },
            endPosition: { lat: 12, lng: 458 },
        }

        const route = new Route(routeProp);

        const start: LatLng = { lat: 20, lng: 212 }
        const end: LatLng = { lat: 20, lng: 212 }

        route.updatePosition(start, end)

        expect(route.props.startPosition).toStrictEqual({ lat: 20, lng: 212 })
        expect(route.props.endPosition).toStrictEqual({ lat: 20, lng: 212 })
    })
    test("updatePoints", () => {
        const routeProp: RouteProps = {
            title: 'nome rotinha',
            startPosition: { lat: 12, lng: 13 },
            endPosition: { lat: 12, lng: 458 },
        }

        const route = new Route(routeProp);

        const start: LatLng = { lat: 20, lng: 212 }
        const end: LatLng = { lat: 20, lng: 212 }

        route.updatePoints([start, end])
        expect(route.props.points).toStrictEqual([
            { lat: 20, lng: 212 },
            { lat: 20, lng: 212 }
        ])
    })
})