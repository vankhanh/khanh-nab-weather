import { ActionTypeKeys } from "../actionTypes";
import { updateLocationAction } from "../location";

describe("location action", () => {
    it("should return UPDATED_LOCATION action", () => {
        const result = updateLocationAction("Ho chi minh");
        expect(result).toEqual({
            type: ActionTypeKeys.UPDATED_LOCATION,
            payload: {
                location: "Ho chi minh",
            },
        });
    });
});
