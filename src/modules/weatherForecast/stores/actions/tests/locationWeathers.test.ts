import { ILocationWeathers } from "../../../../../interfaces/locationWeathers";
import {
    fetchLocationWeathersRequestedAction,
    fetchLocationWeathersFinishedAction,
    fetchWeathersOnLocationFailed,
} from "../locationWeathers";
import { ActionTypeKeys } from "../actionTypes";

describe("locationWeathersAction", () => {
    it("should return FETCH_LOCATION_WEATHERS_FINISHED action", () => {
        const locationWeathers: ILocationWeathers = {
            locationId: 1,
            locationTitle: "city",
            weathers: [],
        };
        const result = fetchLocationWeathersFinishedAction(locationWeathers);
        expect(result).toEqual({
            type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_FINISHED,
            payload: {
                locationWeathers,
            },
        });
    });

    it("should return FETCH_LOCATION_WEATHERS_REQUESTED action", () => {
        const result = fetchLocationWeathersRequestedAction(1);
        expect(result).toEqual({
            type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_REQUESTED,
            payload: {
                locationId: 1,
            },
        });
    });

    it("should return FETCH_LOCATION_WEATHERS_REQUESTED action", () => {
        const error = new Error("Error message");
        const result = fetchWeathersOnLocationFailed(error);
        expect(result).toEqual({
            type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_FAILED,
            payload: {
                error,
            },
        });
    });
});
