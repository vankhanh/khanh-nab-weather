import React from "react";
import { Provider } from "react-redux";
import getStore from "../store";

import WeatherForecast from "./WeatherForecast";

const store = getStore();

export default function App() {
    return (
        <Provider store={store}>
            <WeatherForecast />
        </Provider>
    );
}
