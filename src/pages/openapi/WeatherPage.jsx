import "./css/index.css";
import WeatherBox from "../../components/openapi/WeatherBox";
import WeatherButton from "../../components/openapi/WeatherButton";
import { useEffect, useState } from "react";

const WeatherPage = () => {
    
    const apiKey = process.env.REACT_APP_OPENAPI_KEY;

    const cities = ["seoul", "tokyo", "osaka", "fukuoka"];

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    //현재 위치 (위도, 경도) 정보를 바탕으로 날씨 정보를 얻어온다면?

    const getCurLoc = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log(">>> lat : ", lat, ">>> lon : ", lon);

            getCurWeather(lat, lon);
        });
    }
    /*
    Quiz)
    - fetch api 이용해서 데이터를 전달
    - 전달된 데이터를 weather에 담는다
    - 디버그 콘솔을 활용해 weather 정보를 확인
    */
    const getCurWeather = async(lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        try{
            const response = await fetch(url);
            const jsonData = await response.json();
            console.log(">>> fetch response ", jsonData);

            setWeather(jsonData);
        }
        catch(err){

        }
    }
    const getCityWeather = async(cityName) => {
        
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        try{
            const response = await fetch(url);
            const jsonData = await response.json();
            console.log(">>> fetch response ", jsonData);

            setWeather(jsonData);
        }
        catch(err)
        {
            console.log(">>> err : ", err);
        }
    }
    
    useEffect(() => {
        getCurLoc();
    }, []);
    const cityHandler = (curCity) => {
        setCity(curCity);
        console.log("getCurCity >>> ", curCity);
    }
    useEffect(() => {
        if(city != ""){
            getCityWeather(city);
        }
        else{
            getCurLoc();
        }
    }, [city])

    return(
        <div className="container">
            <WeatherBox weather={weather}/>
            <WeatherButton cities={cities} handler={cityHandler} city={city}/>
        </div>
    )
}

export default WeatherPage;