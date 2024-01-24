import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import "./WeatherApp.css";
import {useState} from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike:24.82,
        temp:25.02,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div className="WeatherApp">
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}