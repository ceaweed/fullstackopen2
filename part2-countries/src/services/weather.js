import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;
const getCurrentWeather = (cityName) => {
    console.log(api_key);
    console.log(process.env);
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${api_key}`);
    return request.then(response => response.data)
}

export default { getCurrentWeather }