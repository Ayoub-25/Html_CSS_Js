const apikey = "57eebf19fc7a4f006c20c22bea8bd3a5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const WeatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function CheckWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    var data = await response.json();

    
    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";


    }else{
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    
    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "clouds.png";
    }else
    if(data.weather[0].main == "Clear"){
        WeatherIcon.src = "clear.png";
    }else
    if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "drizzle.png";
    }else
    if(data.weather[0].main == "Mist"){
        WeatherIcon.src = "mist.png";
    }else
    if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "rain.png";
    }else
    if(data.weather[0].main == "Snow"){
        WeatherIcon.src = "snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }

}

searchBtn.addEventListener("click",()=>{

    CheckWeather(searchBox.value);
})
