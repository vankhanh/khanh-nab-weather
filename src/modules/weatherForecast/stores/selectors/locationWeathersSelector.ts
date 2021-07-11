import { createStructuredSelector } from "reselect";

import { AppState } from "../../../../interfaces/appState";
import { ILocationWeathers } from "../../../../interfaces/locationWeathers";
import { ErrorState } from "../../../../interfaces/error";

const weatherItemsSelector = (state: AppState): ILocationWeathers[] => state.locationWeathers.weatherItems;

const isLoadingSelector = (state: AppState): boolean => state.locationWeathers.isLoading;

const errorSelector = (state: AppState): ErrorState => state.locationWeathers.error;

const locationWeathersSelector = createStructuredSelector<
    AppState,
    { isLoading: boolean; weatherItems: ILocationWeathers[]; error: ErrorState }
>({
    isLoading: isLoadingSelector,
    weatherItems: weatherItemsSelector,
    error: errorSelector,
});

export default locationWeathersSelector;
