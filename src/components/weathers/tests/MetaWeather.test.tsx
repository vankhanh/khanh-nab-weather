import React from "react";
import { mount } from "enzyme";
import MetaWeather from "../MetaWeather";
import { appStateMock } from "../../../fixtures/appStateMock";
import { ILocationWeathers } from "../../../interfaces/locationWeathers";
import WeatherItem from "../WeatherItem";

describe("MetaWeather", () => {
    const locationWeathers: ILocationWeathers = appStateMock.locationWeathers.weatherItems[0];

    it("should render MetaWeather with 5 weather items", () => {
        const wrapper = mount(<MetaWeather locationWeathers={locationWeathers} />);
        expect(wrapper.find(".weather-item.city")).toHaveLength(1);
        expect(wrapper.find(WeatherItem)).toHaveLength(5);
    });
});
