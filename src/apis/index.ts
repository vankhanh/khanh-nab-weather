import axios from "axios";
import { ILocation, ILocationRes } from "../interfaces/location";
import { ILocationWeathers, ILocationWeathersRes, IWeather } from "../interfaces/locationWeathers";

export async function getLocation(location: string): Promise<ILocation[]> {
    const url = `/api/location/search/?query=${location}`;
    const { data } = await axios.get<ILocationRes[]>(url);

    return data.map<ILocation>((location: ILocationRes): ILocation => {
        const { title, location_type: type, woeid: id } = location;
        return {
            id,
            title,
            type,
        };
    });
}

export async function getLocationWeather(location: number): Promise<ILocationWeathers> {
    const url = `/api/location/${location}/`;
    const { data } = await axios.get<ILocationWeathersRes>(url);
    const { woeid: locationId, consolidated_weather: consolidatedWeather, title: locationTitle } = data;

    const weathers: IWeather[] = consolidatedWeather.slice(0, 5).map((weather): IWeather => {
        const { id, applicable_date: applicableDate, min_temp: minTemp, max_temp: maxTemp } = weather;
        return {
            id,
            applicableDate,
            minTemp,
            maxTemp,
        };
    });

    return {
        locationId,
        locationTitle,
        weathers,
    };
}
