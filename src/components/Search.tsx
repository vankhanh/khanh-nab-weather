import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { ActionMeta, components } from "react-select";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import debounce from "lodash/debounce";
import { IconButton } from "@material-ui/core";

import { ILocation } from "../interfaces/location";
import { updateLocationAction } from "../modules/weatherForecast/stores/actions/location";
import {
    fetchSuggestionsRequestedAction,
    clearSuggestionsAction,
} from "../modules/weatherForecast/stores/actions/autoSuggestions";
import { fetchLocationWeathersRequestedAction } from "../modules/weatherForecast/stores/actions/locationWeathers";
import searchSelector from "../modules/weatherForecast/stores/selectors/searchSelector";
import { StyledDivSearch, StyledSearchIcon, StyledSection } from "../styles/searchStyled";
import { ILocationWeathers } from "../interfaces/locationWeathers";
import locationWeathersSelector from "../modules/weatherForecast/stores/selectors/locationWeathersSelector";

type OptionMenuItem = {
    value: number;
    label: string;
};

const defaultSelected: OptionMenuItem = {
    label: "",
    value: 0,
};

function isSelectedLocation(locationId: number, locationWeathers: ILocationWeathers[]): boolean {
    return !!locationWeathers.find(
        (locationWeather: ILocationWeathers) => locationWeather.locationId === locationId,
    );
}

const Search = (): JSX.Element => {
    const dispatch = useDispatch();
    const {
        autosuggestion: { locationItems, isLoading, error },
    } = useSelector(searchSelector);
    const { weatherItems } = useSelector(locationWeathersSelector);
    const [selectedCity, setSelectedCity] = useState<OptionMenuItem>(defaultSelected);
    const [isDisplayError, setIsDisplayError] = useState<boolean>(!!error);

    const handleSearchLocation = debounce((inputValue) => {
        if (inputValue) {
            dispatch(fetchSuggestionsRequestedAction(inputValue));
        }
    }, 1000);

    const onSelectCity = (menuItem: OptionMenuItem | null, actionMeta: ActionMeta<OptionMenuItem>): void => {
        const { action } = actionMeta;

        if (action === "select-option" && menuItem !== null) {
            const { value, label } = menuItem;
            const isSelected = isSelectedLocation(value, weatherItems);

            if (isSelected) {
                setSelectedCity({
                    label,
                    value,
                });
            } else {
                dispatch(updateLocationAction(label));
                dispatch(fetchLocationWeathersRequestedAction(value));
            }
        }

        if (action === "clear") {
            dispatch(clearSuggestionsAction());
        }
    };

    const optionsMenu = useMemo(
        (): ReadonlyArray<OptionMenuItem> =>
            locationItems.map((location: ILocation) => ({
                label: location.title,
                value: location.id,
            })),
        [locationItems],
    );
    const { label, value: selectedValue } = selectedCity;

    return (
        <StyledSection>
            <StyledDivSearch>
                <Select
                    cacheOptions
                    isLoading={isLoading}
                    options={optionsMenu}
                    onInputChange={handleSearchLocation}
                    components={{
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null,
                        Control: ({ children, ...rest }) => (
                            <components.Control {...rest}>
                                <StyledSearchIcon />
                                {children}
                            </components.Control>
                        ),
                    }}
                    noOptionsMessage={() => "No city"}
                    isClearable
                    onChange={onSelectCity}
                    placeholder="Search city..."
                />
            </StyledDivSearch>

            {isDisplayError && (
                <Alert
                    className="alert-item error-message"
                    severity="error"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => setIsDisplayError(false)}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    {error?.message}
                </Alert>
            )}

            {!!selectedValue && (
                <Alert
                    className="alert-item warning-message"
                    severity="warning"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => setSelectedCity(defaultSelected)}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >{`${label} already existed on result list below.`}</Alert>
            )}
        </StyledSection>
    );
};

export default Search;
