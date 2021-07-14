import React from "react";
import { mount } from "enzyme";
import WeatherItem, { WeatherItemProps } from "../WeatherItem";
import { formatDate } from "../../../utils/date";

describe("WeatherItem", () => {
    const weatherItem: WeatherItemProps = {
        applicableDate: "2020-07-14",
        minTemp: 30,
        maxTemp: 37,
    };

    it("should render WeatherItem component", () => {
        const wrapper = mount(<WeatherItem {...weatherItem} />);

        expect(wrapper.find("h3")).toHaveLength(1);
        expect(wrapper.find("p.min-temperature")).toHaveLength(1);
        expect(wrapper.find("p.max-temperature")).toHaveLength(1);
        expect(wrapper.find("h3").text()).toEqual(formatDate("2020-07-14"));
        expect(wrapper.find("p.min-temperature").text()).toEqual("Min: 30°C");
        expect(wrapper.find("p.max-temperature").text()).toEqual("Max: 37°C");
    });
});
