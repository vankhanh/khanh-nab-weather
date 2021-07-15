import { combineReducers } from "redux";

import searchReducer from "./modules/weatherForecast/stores/reducers/searchReducer";
import locationWeathersReducer from "./modules/weatherForecast/stores/reducers/locationWeatherReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    locationWeathers: locationWeathersReducer,
});

export default rootReducer;
