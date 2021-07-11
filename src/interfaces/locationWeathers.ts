import { ActionTypeKeys } from "../modules/weatherForecast/stores/actions/actionTypes";

import { IAction } from "./action";
import { ILocationRes } from "./location";
import { ErrorState, IErrorAction, IErrorWrapper } from "./error";

export interface IWeatherRes {
    id: number;
    applicable_date: string;
    min_temp: number;
    max_temp: number;
}

export interface IWeather {
    id: number;
    applicableDate: string;
    minTemp: number;
    maxTemp: number;
}

export interface ILocationWeathersRes extends ILocationRes {
    title: string;
    consolidated_weather: IWeatherRes[];
}

export interface ILocationWeathers {
    locationId: number;
    locationTitle: string;
    weathers: IWeather[];
}

export interface ILocationWeathersRequestedPayload {
    locationId: number;
}
export interface IFetchLocationWeathersRequestedAction extends IAction<ILocationWeathersRequestedPayload> {
    type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_REQUESTED;
}

export interface ILocationWeathersFinishedPayload {
    locationWeathers: ILocationWeathers;
}
export interface IFetchLocationWeathersFinishedAction extends IAction<ILocationWeathersFinishedPayload> {
    type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_FINISHED;
}

export interface IFetchLocationWeathersFailedAction extends IErrorAction {
    type: ActionTypeKeys.FETCH_LOCATION_WEATHERS_FAILED;
}

export type LocationWeatherActions =
    | IFetchLocationWeathersRequestedAction
    | IFetchLocationWeathersFinishedAction
    | IFetchLocationWeathersFailedAction;

export type LocationWeathersState = {
    isLoading: boolean;
    weatherItems: ILocationWeathers[];
    error: ErrorState;
};
