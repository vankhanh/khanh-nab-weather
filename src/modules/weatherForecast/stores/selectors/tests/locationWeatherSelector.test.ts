import { appStateMock } from "../../../../../fixtures/appStateMock";
import locationWeathersSelector from "../locationWeathersSelector";

describe("locationWeathersSelector", () => {
    it("should return weathers on location info", () => {
        const result = locationWeathersSelector(appStateMock);
        expect(result).toEqual({
            isLoading: false,
            weatherItems: [
                {
                    locationId: 123456,
                    locationTitle: "Ho chi minh city",
                    weathers: [
                        {
                            id: 1,
                            applicableDate: "2020-07-14",
                            minTemp: 30,
                            maxTemp: 37,
                        },
                        {
                            id: 2,
                            applicableDate: "2020-07-15",
                            minTemp: 31,
                            maxTemp: 38,
                        },
                        {
                            id: 3,
                            applicableDate: "2020-07-16",
                            minTemp: 32,
                            maxTemp: 37,
                        },
                        {
                            id: 4,
                            applicableDate: "2020-07-17",
                            minTemp: 33,
                            maxTemp: 38,
                        },
                        {
                            id: 5,
                            applicableDate: "2020-07-18",
                            minTemp: 34,
                            maxTemp: 39,
                        },
                    ],
                },
            ],
            error: null,
        });
    });
});
