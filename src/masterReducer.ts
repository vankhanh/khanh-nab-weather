import { combineReducers } from "redux";

import searchReducer from "./modules/weatherForecast/stores/reducers/searchReducer";
import LocationWeathersReducer from "./modules/weatherForecast/stores/reducers/locationWeatherReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    locationWeathers: LocationWeathersReducer,
});

export default rootReducer;
