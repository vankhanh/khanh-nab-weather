import { IErrorWrapper } from "../../../../interfaces/error";
import {
    IFetchLocationWeathersFailedAction,
    IFetchLocationWeathersFinishedAction,
    IFetchLocationWeathersRequestedAction,
    ILocationWeathers,
} from "../../../../interfaces/locationWeathers";
import { ActionTypeKeys } from "./actionTypes";

export function fetchLocationWeathersRequestedAction(
    locationId: number,
): IFetchLocationWeathersRequestedAction {
    return {
        type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_REQUESTED,
        payload: { locationId },
    };
}

export function fetchLocationWeathersFinishedAction(
    locationWeathers: ILocationWeathers,
): IFetchLocationWeathersFinishedAction {
    return {
        type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_FINISHED,
        payload: {
            locationWeathers,
        },
    };
}

export function fetchWeathersOnLocationFailed(error: IErrorWrapper): IFetchLocationWeathersFailedAction {
    return {
        type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_FAILED,
        payload: { error },
    };
}
