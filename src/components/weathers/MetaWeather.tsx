import React from "react";

import { ILocationWeathers, IWeather } from "../../interfaces/locationWeathers";
import { StyledDivRow } from "../../styles/mainStyled";

import WeatherItem from "./WeatherItem";

export interface MetaWeatherProps {
    locationWeathers: ILocationWeathers;
}

export default function MetaWeather(props: MetaWeatherProps): JSX.Element {
    const {
        locationWeathers: { locationTitle, weathers },
    } = props;

    return (
        <StyledDivRow>
            <div className="weather-item city">
                <h2>{locationTitle}</h2>
            </div>

            {weathers.map((weather: IWeather) => {
                const { id, applicableDate, minTemp, maxTemp } = weather;
                return (
                    <div key={id} className="weather-item">
                        <WeatherItem applicableDate={applicableDate} minTemp={minTemp} maxTemp={maxTemp} />
                    </div>
                );
            })}
        </StyledDivRow>
    );
}
