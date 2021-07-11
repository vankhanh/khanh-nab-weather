import React from "react";
import { useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";

import { ILocationWeathers } from "../../interfaces/locationWeathers";
import locationWeathersSelector from "../../modules/weatherForecast/stores/selectors/locationWeathersSelector";
import { StyledMessage, StyledWeatherItem } from "../../styles/mainStyled";

import MetaWeather from "./MetaWeather";

export default function MetaWeatherList(): JSX.Element {
    const { weatherItems, isLoading, error } = useSelector(locationWeathersSelector);

    if (isLoading) {
        return <StyledMessage>Loading...</StyledMessage>;
    }

    if (error?.message) {
        return <Alert severity="error">{error.message}</Alert>;
    }

    return (
        <>
            {weatherItems.map(
                (locationWeathers: ILocationWeathers): JSX.Element => (
                    <StyledWeatherItem key={locationWeathers.locationId}>
                        <MetaWeather locationWeathers={locationWeathers} />
                    </StyledWeatherItem>
                ),
            )}
        </>
    );
}
