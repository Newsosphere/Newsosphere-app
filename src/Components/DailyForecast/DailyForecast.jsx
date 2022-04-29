import React, { useState } from 'react'
import weatherIcon from '../../Helpers/weatherIcon';
import { Droplet, Wind, Thermometer } from 'react-feather';

function DailyForecast({ results }) {


    const [arr, setArr] = useState(results.daily.slice(1, 7));
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayss = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <>
            <h2>Daily Forecast</h2>
            <div className="daily-forecast">
                {results.daily.map((dayWeather, index) => {
                    const t = new Date(dayWeather.dt * 1000);
                    const avgTemp = (dayWeather.temp.min + dayWeather.temp.max) / 2;
                    return (
                        index === 0 || index === 7 ? <></> :
                            <div className="daily-div">
                                <h3>
                                    {dayss[t.getDay()]}, {t.getDate()} {month[t.getMonth()]}
                                </h3>

                                <div className="dailyweather-icondiv">
                                    {weatherIcon(dayWeather.weather[0].icon)}
                                    <span>{avgTemp.toPrecision(4)} {results.unitText}</span>
                                </div>
                                <div className="dailyweather-desc">{dayWeather.weather[0].main}</div>
                                <div className="dailyweather-down">
                                    <span>
                                        <Droplet size={20} />{dayWeather.humidity} %
                                    </span>
                                    <span>
                                        <Wind size={20} />{dayWeather.wind_speed}
                                    </span>
                                </div>
                            </div>
                    )
                })}
            </div>
        </>
    )
}

export default DailyForecast