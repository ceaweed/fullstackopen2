import weatherService from '../services/weather'
import { useState, useEffect } from 'react';

const Country = ({ country }) => {

  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    console.log("Callin getAll from country service");
    console.log("Country capital: ", country.capital[0]);
    weatherService
        .getCurrentWeather(country.capital[0])
        .then(weatherInfo => {
            console.log("WeatherInfo: ", weatherInfo);
            console.log("Icon: ", weatherData.weather && weatherData.weather.length > 0 ? weatherData.weather[0].icon : '');
            setWeatherData(weatherInfo);
        })
}, [country.capital]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <h2>Flag</h2>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />
      <h1>Weather in {country.capital}</h1>
      <p>Temp: {weatherData?.main?.temp} Farenheit</p>
      <img src={weatherData.weather && weatherData.weather.length > 0 ? `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` : ''} alt="Weather icon"/>
      <p>Wind: {weatherData?.wind?.speed} MPH</p>
    </div>
  );
};

export default Country
