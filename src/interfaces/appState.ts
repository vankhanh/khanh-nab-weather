import { SearchState } from "./autoSuggestions";
import { LocationWeathersState } from "./locationWeathers";

export interface AppState {
    search: SearchState;
    locationWeathers: LocationWeathersState;
}
