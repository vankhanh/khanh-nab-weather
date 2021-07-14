import { call, put } from "redux-saga/effects";
import { expectSaga, RunResult } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import {
    IFetchLocationWeathersRequestedAction,
    ILocationWeathers,
} from "../../../../../interfaces/locationWeathers";
import { getLocationWeather } from "../../../../../apis";
import {
    fetchLocationWeathersFinishedAction,
    fetchWeathersOnLocationFailed,
} from "../../actions/locationWeathers";
import { ActionTypeKeys } from "../../actions/actionTypes";
import { handleLocationWeatherRequested } from "../locationWeatherSaga";

describe("locationwearther saga", () => {
    const action: IFetchLocationWeathersRequestedAction = {
        type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_REQUESTED,
        payload: {
            locationId: 123,
        },
    };

    it("should return list weather on location successfully", async () => {
        const locationWearthers: ILocationWeathers = {
            locationId: 123,
            locationTitle: "Bangkok city",
            weathers: [
                {
                    id: 123,
                    applicableDate: "Wed 14 jul",
                    minTemp: 30,
                    maxTemp: 40,
                },
            ],
        };
        const saga: RunResult = await expectSaga(handleLocationWeatherRequested, action)
            .provide([[call(getLocationWeather, 123), locationWearthers]])
            .run();

        expect(saga.effects.put).toEqual([put(fetchLocationWeathersFinishedAction(locationWearthers))]);
    });

    it("should fetch wearther on location failed", async () => {
        const error = new Error("error message");
        const saga: RunResult = await expectSaga(handleLocationWeatherRequested, action)
            .provide([[call(getLocationWeather, 123), throwError(error)]])
            .run();

        expect(saga.effects.put).toEqual([put(fetchWeathersOnLocationFailed(error))]);
    });
});
