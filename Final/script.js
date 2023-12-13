function weatherFuntion() {
    const key = '99c9e15d25d01371a50d2fee57db0ab5'; 
    const searchInput = document.getElementById('searchInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${key}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            weatherData(data);
        })
      
}

function weatherData(data) {
    const weatherDivDiv = document.getElementById('weatherDiv');
    weatherDivDiv.innerHTML = '';

   

   

    const weatherInfo = document.createElement('div');
    weatherInfo.innerHTML = `
        <h1>CityName:${data.name} </h1>
         <h2>Country:${data.sys.country}</h2>
        <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
       
    `;

    weatherDivDiv.appendChild(weatherInfo);
}