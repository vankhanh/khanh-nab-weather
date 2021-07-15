import React from "react";

import { IWeather } from "../../interfaces/locationWeathers";
import { StyledDivRowWrap } from "../../styles/mainStyled";
import { formatDate } from "../../utils/date";

export type WeatherItemProps = Omit<IWeather, "id">;

export default function WeatherItem(props: WeatherItemProps) {
    const { applicableDate, minTemp, maxTemp } = props;
    return (
        <StyledDivRowWrap>
            <h3>{formatDate(applicableDate)}</h3>
            <p className="min-temperature">Min: {`${Math.floor(minTemp)}°C`}</p>
            <p className="max-temperature">Max: {`${Math.floor(maxTemp)}°C`}</p>
        </StyledDivRowWrap>
    );
}
