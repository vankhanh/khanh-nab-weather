import React from "react";
import { Provider } from "react-redux";
import Select from "react-select";
import { mount } from "enzyme";

import Search from "../Search";
import getStore from "../../store";
import { appStateMock, appStateMockWithSearchErrorState } from "../../fixtures/appStateMock";
import Alert from "@material-ui/lab/Alert";

describe("Search", () => {
    it("should render Search component", () => {
        const store = getStore(appStateMock);
        const wrapper = mount(
            <Provider store={store}>
                <Search />
            </Provider>,
        );

        expect(wrapper.find(Select)).toHaveLength(1);
    });

    it("should render error message", () => {
        const storeWithError = getStore(appStateMockWithSearchErrorState);
        const wrapper = mount(
            <Provider store={storeWithError}>
                <Search />
            </Provider>,
        );

        expect(wrapper.find(Alert)).toHaveLength(1);
        expect(wrapper.find(Alert).text()).toEqual("Error message");
    });
});
