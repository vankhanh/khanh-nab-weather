import { appStateMock } from "../../../../../fixtures/appStateMock";
import searchSelector from "../searchSelector";

describe("searachSelector", () => {
    it("should return search info", () => {
        const result = searchSelector(appStateMock);
        expect(result).toEqual({
            location: "Ho chi minh city",
            autosuggestion: {
                isLoading: false,
                locationItems: [],
                error: null,
            },
        });
    });
});
