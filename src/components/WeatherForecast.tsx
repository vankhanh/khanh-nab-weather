import React from "react";
import { StyledContainer } from "../styles/mainStyled";

import Search from "./Search";
import MetaWeatherList from "./weathers/MetaWeatherList";

const WeatherForecast = (): JSX.Element => (
    <StyledContainer>
        <Search />
        <MetaWeatherList />
    </StyledContainer>
);

export default WeatherForecast;
