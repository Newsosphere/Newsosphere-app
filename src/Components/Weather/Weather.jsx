import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import MyMap from '../MyMap/MyMap';
import Loader from "../Loader/Loader";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
// import HourlyForecast from "../HourlyForecast/HourlyForecast";
import alanBtn from "@alan-ai/alan-sdk-web";
import RequiredItems from "../RequiredItems/RequiredItems";
import useWeather from '../../Helpers/Hooks/useWeather'
import SearchOption from '../../Helpers/SearchOption'

// Styles
import './Weather.css'

const Weather = (props) => {
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
    } = props;

    const navigate = useNavigate();

    // useEffect(() => {
    //     alanBtn({
    //         key: process.env.REACT_APP_ALAN_APIKEY,
    //         onCommand: function (commandData) {
    //             if (commandData.command === "city") {
    //                 //setting city to show the weather of the vity asked through voice command
    //                 setCity(commandData.cityname.value);
    //             }
    //             if (commandData.command === "navigate") {
    //                 navigate(commandData.route);
    //             }
    //         },
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
                <div className="Weather">
                    <div className="Weather-container">
                        <div className="Weather-search-map">
                            <div className="Weather-subheading">
                                <h2>Enter a city below 👇</h2>
                            </div>
                            <div className="searchbox">
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
                    </div>
                </div>
            )}
        </>
    );
};

export default Weather;
