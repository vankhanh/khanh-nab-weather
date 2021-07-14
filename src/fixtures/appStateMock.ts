import { AppState } from "../interfaces/appState";

export const appStateMock: AppState = {
    search: {
        location: "Ho chi minh city",
        autosuggestion: {
            isLoading: false,
            locationItems: [],
            error: null,
        },
    },
    locationWeathers: {
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
    },
};

export const appStateMockWithSearchErrorState: AppState = {
    search: {
        location: "Ho chi minh city",
        autosuggestion: {
            isLoading: false,
            locationItems: [],
            error: new Error("Error message"),
        },
    },
    locationWeathers: {
        isLoading: false,
        weatherItems: [],
        error: null,
    },
};

export const appStateMockWithLocationWeathersLoadingState: AppState = {
    search: {
        location: "Ho chi minh city",
        autosuggestion: {
            isLoading: false,
            locationItems: [],
            error: new Error("Error message"),
        },
    },
    locationWeathers: {
        isLoading: true,
        weatherItems: [],
        error: null,
    },
};

export const appStateMockWithLocationWeathersErrorState: AppState = {
    search: {
        location: "Ho chi minh city",
        autosuggestion: {
            isLoading: false,
            locationItems: [],
            error: new Error("Error message"),
        },
    },
    locationWeathers: {
        isLoading: false,
        weatherItems: [],
        error: new Error("Error message"),
    },
};
