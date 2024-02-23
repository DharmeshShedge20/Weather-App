const options = {
    method: 'GET',
    headers: {
        "X-RapidAPI-Key": "b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87",
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});
getWeather("Mumbai");


//Miami Weather

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Miami', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        temp_Miami.innerHTML = response.temp
        feels_like_Miami.innerHTML = response.feels_like
        humidity_Miami.innerHTML = response.humidity
        min_temp_Miami.innerHTML = response.min_temp
        max_temp_Miami.innerHTML = response.max_temp
        sunrise_Miami.innerHTML = response.sunrise
        sunset_Miami.innerHTML = response.sunset
        wind_degrees_Miami.innerHTML = response.wind_degrees
        wind_speed_Miami.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err));

//Los Angeles Weather

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Los angeles', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        temp_LA.innerHTML = response.temp
        feels_like_LA.innerHTML = response.feels_like
        humidity_LA.innerHTML = response.humidity
        min_temp_LA.innerHTML = response.min_temp
        max_temp_LA.innerHTML = response.max_temp
        sunrise_LA.innerHTML = response.sunrise
        sunset_LA.innerHTML = response.sunset
        wind_degrees_LA.innerHTML = response.wind_degrees
        wind_speed_LA.innerHTML = response.wind_speed

    })
    .catch(err => console.error(err));


    //New York Weather

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
.then(response => response.json())
.then((response) => {
    console.log(response);
    temp_NY.innerHTML = response.temp
    feels_like_NY.innerHTML = response.feels_like
    humidity_NY.innerHTML = response.humidity
    min_temp_NY.innerHTML = response.min_temp
    max_temp_NY.innerHTML = response.max_temp
    sunrise_NY.innerHTML = response.sunrise
    sunset_NY.innerHTML = response.sunset
    wind_degrees_NY.innerHTML = response.wind_degrees
    wind_speed_NY.innerHTML = response.wind_speed

})
.catch(err => console.error(err));


//Chicago Weather

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chicago', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        temp_Chicago.innerHTML = response.temp
        feels_like_Chicago.innerHTML = response.feels_like
        humidity_Chicago.innerHTML = response.humidity
        min_temp_Chicago.innerHTML = response.min_temp
        max_temp_Chicago.innerHTML = response.max_temp
        sunrise_Chicago.innerHTML = response.sunrise
        sunset_Chicago.innerHTML = response.sunset
        wind_degrees_Chicago.innerHTML = response.wind_degrees
        wind_speed_Chicago.innerHTML = response.wind_speed

        const weatherIconUrl = response.weather_icon; 
        document.getElementById('weatherIcon').src = weatherIconUrl;
    })
    .catch(err => console.error(err));
    
