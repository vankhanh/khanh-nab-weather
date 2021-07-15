import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import MetaWeatherList from "../MetaWeatherList";
import getStore from "../../../store";
import {
    appStateMock,
    appStateMockWithLocationWeathersLoadingState,
    appStateMockWithLocationWeathersErrorState,
} from "../../../fixtures/appStateMock";
import MetaWeather from "../MetaWeather";
import Alert from "@material-ui/lab/Alert";

describe("MetaWeatherList", () => {
    it("should render MetaWeatherList component", () => {
        const store = getStore(appStateMock);
        const wrapper = mount(
            <Provider store={store}>
                <MetaWeatherList />
            </Provider>,
        );

        expect(wrapper.find("div.meta-weather-list")).toHaveLength(1);
        expect(wrapper.find(MetaWeather)).toHaveLength(1);
    });

    it("should render Loading...", () => {
        const storeWithLoading = getStore(appStateMockWithLocationWeathersLoadingState);
        const wrapper = mount(
            <Provider store={storeWithLoading}>
                <MetaWeatherList />
            </Provider>,
        );

        expect(wrapper.find("p.is-loading")).toHaveLength(1);
        expect(wrapper.find("p.is-loading").text()).toEqual("Loading...");
    });

    it("should render error message", () => {
        const storeWithError = getStore(appStateMockWithLocationWeathersErrorState);
        const wrapper = mount(
            <Provider store={storeWithError}>
                <MetaWeatherList />
            </Provider>,
        );

        expect(wrapper.find("div.error-message")).toHaveLength(1);
        expect(wrapper.find("div.error-message").text()).toEqual("Error message");
    });
});
