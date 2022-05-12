import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import Home from './Components/Home/Home'
import Weather from './Components/Weather/Weather'
import News from './Components/News/News'
import Navbar from './Components/Navbar/Navbar'
import useWeather from './Helpers/Hooks/useWeather'

export default function App() {
  // const navigate = useNavigate();
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

  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_APIKEY,
      onCommand: function (commandData) {
        // For weather
        if (commandData.command === "city") {
          setCity(commandData.cityname.value);
        }

        // For news 
        else if (commandData.command === "newHeadlines") {
          setNewsArticles(commandData.articles);
          setActiveArticle(-1);
        }
        else if (commandData.command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
        else if (commandData.command === "open") {
          const parsedNumber =
            commandData.number.length > 2
              ? wordsToNumbers(commandData.number, { fuzzy: true })
              : commandData.number;
          const article = commandData.articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            return;
          }
        }
        // For Routing
        if (commandData.command === "navigate") {
          window.location.replace(commandData.route)
        }
      },
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          exact
          path="/weather"
          element={
            <Weather
              city={city}
              results={results}
              isLoaded={isLoaded}
              setCity={setCity}
              error={error}
              cityRes={cityRes}
              fetchWeatherUsingCoordinates={fetchWeatherUsingCoordinates}
              changeUnit={changeUnit}
              useFahrenheit={useFahrenheit}
              setCityObj={setCityObj}
            />
          }
        />
        <Route
          exact
          path="/news"
          element={
            <News
              newsArticles={newsArticles}
              activeArticle={activeArticle}
            />
          }
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  )
}
