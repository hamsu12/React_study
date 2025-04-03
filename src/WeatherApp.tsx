import {useState} from 'react';

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<any>(null);

    const API = "a874eef716ec3ddfb774e5dddaee78ee"

    const fetchWeather = async()=>{
        if(!city) return;
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
        );
        const data = await response.json();
        setWeather(data);
    };

    return (
        <div>
            <h1>날씨 조회</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="도시 입력"/>
            <button onClick={fetchWeather}>검색</button>
            {weather&&(
                <div>
                <h2>{weather.name}의 날씨</h2>
                <p>온도 : {weather.main.temp}°C</p>
                <p>날씨 : {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}


export default WeatherApp;