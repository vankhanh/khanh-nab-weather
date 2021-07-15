import {
    IFetchLocationWeathersFailedAction,
    IFetchLocationWeathersFinishedAction,
    IFetchLocationWeathersRequestedAction,
    ILocationWeathers,
} from "../../../../../interfaces/locationWeathers";
import { ActionTypeKeys } from "../../actions/actionTypes";
import locationWeathersReducer, { initLocationWeatherState } from "../locationWeatherReducer";

describe("locationWeathersReducer", () => {
    it("should return weathers on location", () => {
        const locationWeathers: ILocationWeathers = {
            locationId: 123,
            locationTitle: "Ho chi minh",
            weathers: [
                {
                    id: 1,
                    applicableDate: "2021-07-14",
                    minTemp: 30,
                    maxTemp: 38,
                },
            ],
        };
        const action: IFetchLocationWeathersFinishedAction = {
            type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_FINISHED,
            payload: {
                locationWeathers,
            },
        };
        const locationWeatherState = locationWeathersReducer(initLocationWeatherState, action);
        expect(locationWeatherState.weatherItems[0].weathers[0]).toEqual({
            id: 1,
            applicableDate: "2021-07-14",
            minTemp: 30,
            maxTemp: 38,
        });
    });

    it("should return loading state", () => {
        const action: IFetchLocationWeathersRequestedAction = {
            type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_REQUESTED,
            payload: {
                locationId: 1,
            },
        };
        const locationWeatherState = locationWeathersReducer(initLocationWeatherState, action);
        expect(locationWeatherState.isLoading).toBeTruthy();
    });

    it("should return error state", () => {
        const action: IFetchLocationWeathersFailedAction = {
            type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_FAILED,
            payload: {
                error: new Error("Error message"),
            },
        };
        const locationWeatherState = locationWeathersReducer(initLocationWeatherState, action);
        expect(locationWeatherState.error?.message).toEqual("Error message");
    });
});
