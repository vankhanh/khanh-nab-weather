import {
    IAutoSuggestionsFailedAction,
    IAutoSuggestionsFinishedAction,
    IAutoSuggestionsRequestedAction,
} from "../../../../../interfaces/autoSuggestions";
import { ILocation } from "../../../../../interfaces/location";
import { ActionTypeKeys } from "../../actions/actionTypes";
import { ILocationAction } from "../../actions/location";
import { autoSuggestionsReducer, initAutoSuggestState, locationReducer } from "../searchReducer";

describe("searchReducer", () => {
    describe("locationReducer", () => {
        it("should return location", () => {
            const action: ILocationAction = {
                type: ActionTypeKeys.UPDATED_LOCATION,
                payload: {
                    location: "Ho chi minh",
                },
            };
            const locationState = locationReducer("", action);
            expect(locationState).toEqual("Ho chi minh");
        });
    });

    describe("autoSuggestionsReducer", () => {
        it("should return suggestion location", () => {
            const locationItem: ILocation = {
                id: 1,
                title: "Ho chi minh",
                type: "city",
            };
            const action: IAutoSuggestionsFinishedAction = {
                type: ActionTypeKeys.FETCH_SUGGESTIONS_FINISHED,
                payload: {
                    locationItems: [locationItem],
                },
            };
            const state = autoSuggestionsReducer(initAutoSuggestState, action);
            expect(state.locationItems[0]).toEqual(locationItem);
        });

        it("should return loading state", () => {
            const action: IAutoSuggestionsRequestedAction = {
                type: ActionTypeKeys.FETCH_SUGGESTIONS_REQUESTED,
                payload: {
                    location: "Ho chi minh",
                },
            };
            const state = autoSuggestionsReducer(initAutoSuggestState, action);
            expect(state.isLoading).toBeTruthy();
        });

        it("should return error state", () => {
            const action: IAutoSuggestionsFailedAction = {
                type: ActionTypeKeys.FETCH_SUGGESTIONS_FAILED,
                payload: {
                    error: new Error("Error message"),
                },
            };
            const state = autoSuggestionsReducer(initAutoSuggestState, action);
            expect(state.error?.message).toEqual("Error message");
        });
    });
});
