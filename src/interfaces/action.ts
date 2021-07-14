import { ActionTypeKeys } from "../modules/weatherForecast/stores/actions/actionTypes";

export interface IAction<Payload> {
    type: ActionTypeKeys;
    payload: Payload;
}
