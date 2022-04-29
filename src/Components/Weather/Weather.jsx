import React, { useEffect } from "react";
import MyMap from '../MyMap/MyMap';
import Loader from "../Loader/Loader";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
// import HourlyForecast from "../HourlyForecast/HourlyForecast";
import RequiredItems from "../RequiredItems/RequiredItems";
import useWeather from '../../Helpers/Hooks/useWeather'
import SearchOption from '../../Helpers/SearchOption'

const Weather = () => {
    const {
        city,
        results,
        isLoaded,
        setCity,
        error,
        cityRes,
        fetchWeatherUsingCoordinates,
        changeUnit,
        useFahrenheit,
        setCityObj,
    } = useWeather();

    // useEffect(() => {
    //     //adding alan ai button on home page
    //     alanBtn({
    //         key: process.env.REACT_APP_ALAN_APIKEY,
    //         onCommand: function (commandData) {
    //             if (commandData.command === "city") {
    //                 //setting city to show the weather of the vity asked through voice command
    //                 setCity(commandData.cityname.value);
    //             }
    //         },
    //         zIndex: 10000000,
    //     });
    // }, []);

    return (
        <>
            {!isLoaded && (
                <div className="loader-wrapper">
                    <Loader />
                </div>
            )}

            {results && (
                <div>
                    <div className="locator">
                        <div className="searchbox">
                            <div>
                                <h2>Enter a city below 👇</h2>
                            </div>
                            <SearchOption
                                city={city}
                                onChange={(event) => setCity(event.target.value)}
                                updateCity={(city) => setCity(city)}
                                updateCityObj={(city) => setCityObj(city)}
                            />
                        </div>

                        <div className="mymap">
                            {cityRes && (
                                <MyMap
                                    lon={cityRes?.coord?.lon}
                                    lat={cityRes?.coord?.lat}
                                    name={cityRes?.name}
                                    fetchWeatherUsingCoordinates={fetchWeatherUsingCoordinates}
                                    temp={cityRes?.main.feels_like}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}

            {isLoaded && results && error == null && (
                <>
                    <WeatherInfo
                        results={results}
                        city={cityRes}
                        changeUnit={changeUnit}
                    />
                    <div>
                        <RequiredItems results={cityRes} />
                    </div>
                </>
            )}
        </>
    );
};

export default Weather;
