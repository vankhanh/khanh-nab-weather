import { LocationWeatherActions, LocationWeathersState } from "../../../../interfaces/locationWeathers";
import { ActionTypeKeys } from "../actions/actionTypes";

const initLocationWeatherState: LocationWeathersState = {
    isLoading: false,
    weatherItems: [],
    error: null,
};

export default function LocationWeathersReducer(
    state: LocationWeathersState = initLocationWeatherState,
    action: LocationWeatherActions,
): LocationWeathersState {
    switch (action.type) {
        case ActionTypeKeys.FETCH_LOCATION_WEATHERS_REQUESTED:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypeKeys.FETCH_LOCATION_WEATHERS_FINISHED:
            return {
                ...state,
                weatherItems: [action.payload.locationWeathers, ...state.weatherItems],
                isLoading: false,
                error: null,
            };
        case ActionTypeKeys.FETCH_LOCATION_WEATHERS_FAILED:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            };
        default:
            return state;
    }
}
