import { ILocation } from "../../../../../interfaces/location";
import {
    fetchSuggestionsFailedAction,
    fetchSuggestionsFinishedAction,
    fetchSuggestionsRequestedAction,
} from "../autoSuggestions";
import { ActionTypeKeys } from "../actionTypes";

describe("autoSuggestionsAction", () => {
    it("should return FETCH_SUGGESTIONS_FINISHED action", () => {
        const locationItems: ILocation[] = [
            {
                id: 1,
                title: "Ho chi minh",
                type: "city",
            },
        ];
        const result = fetchSuggestionsFinishedAction(locationItems);
        expect(result).toEqual({
            type: ActionTypeKeys.FETCH_SUGGESTIONS_FINISHED,
            payload: {
                locationItems,
            },
        });
    });

    it("should return FETCH_SUGGESTIONS_REQUESTED action", () => {
        const result = fetchSuggestionsRequestedAction("Ho chi minh");
        expect(result).toEqual({
            type: ActionTypeKeys.FETCH_SUGGESTIONS_REQUESTED,
            payload: {
                location: "Ho chi minh",
            },
        });
    });

    it("should return FETCH_SUGGESTIONS_FAILED action", () => {
        const error = new Error("Error message");
        const result = fetchSuggestionsFailedAction(error);
        expect(result).toEqual({
            type: ActionTypeKeys.FETCH_SUGGESTIONS_FAILED,
            payload: {
                error,
            },
        });
    });
});
