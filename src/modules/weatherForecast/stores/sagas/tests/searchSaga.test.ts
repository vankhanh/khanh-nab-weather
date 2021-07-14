import { call, put } from "redux-saga/effects";
import { expectSaga, RunResult } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import { ILocation } from "../../../../../interfaces/location";
import { IAutoSuggestionsRequestedAction } from "../../../../../interfaces/autoSuggestions";
import { getLocation } from "../../../../../apis";
import { fetchSuggestionsFailedAction, fetchSuggestionsFinishedAction } from "../../actions/autoSuggestions";
import { handleFetchSuggestionsRequested } from "../searchSaga";
import { ActionTypeKeys } from "../../actions/actionTypes";

describe("search saga", () => {
    const searchAction: IAutoSuggestionsRequestedAction = {
        type: ActionTypeKeys.FETCH_SUGGESTIONS_REQUESTED,
        payload: {
            location: "Bangkok",
        },
    };

    it("should return city successfully", async () => {
        const bangkokLocation: ILocation = {
            title: "Bangkok City",
            type: "City",
            id: 123,
        };
        const saga: RunResult = await expectSaga(handleFetchSuggestionsRequested, searchAction)
            .provide([[call(getLocation, "Bangkok"), [bangkokLocation]]])
            .run();

        expect(saga.effects.put).toEqual([put(fetchSuggestionsFinishedAction([bangkokLocation]))]);
    });

    it("should search city failed", async () => {
        const error = new Error("error message");
        const saga: RunResult = await expectSaga(handleFetchSuggestionsRequested, searchAction)
            .provide([[call(getLocation, "Bangkok"), throwError(error)]])
            .run();

        expect(saga.effects.put).toEqual([put(fetchSuggestionsFailedAction(error))]);
    });
});
