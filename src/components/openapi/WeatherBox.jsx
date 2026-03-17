/*
현재 위치, 섭씨, 화씨, 날씨 정보 출력
*/

const WeatherBox = ({weather}) => {
    return(
        <div className="weather-box">
            {/* 옵셔널 체이닝? */}
            <div>{weather?.sys.country}</div>
            <div>{weather?.name}</div>
            <div>{weather?.main.temp}</div>
            <div>{weather?.weather[0].main}</div>
            <div>{weather?.weather[0].description}</div>
        </div>
    )
}

export default WeatherBox;