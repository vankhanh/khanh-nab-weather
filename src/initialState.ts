import { AppState } from "./interfaces/appState";

const initialState: AppState = {
    search: {
        location: "",
        autosuggestion: {
            isLoading: false,
            locationItems: [],
            error: null,
        },
    },
    locationWeathers: {
        isLoading: false,
        weatherItems: [],
        error: null,
    },
};

export default initialState;
