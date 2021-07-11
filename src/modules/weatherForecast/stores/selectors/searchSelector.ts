import { createStructuredSelector } from "reselect";
import { AppState } from "../../../../interfaces/appState";
import { AutoSuggesstionState } from "../../../../interfaces/autoSuggestions";

const locationSelector = (state: AppState): string => state.search.location;

const autoSuggestionsSelector = (state: AppState): AutoSuggesstionState => state.search.autosuggestion;

const searchSelector = createStructuredSelector<
    AppState,
    { location: string; autosuggestion: AutoSuggesstionState }
>({
    location: locationSelector,
    autosuggestion: autoSuggestionsSelector,
});

export default searchSelector;
