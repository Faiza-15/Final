function searchWeather() {
    const apiKey = 'YOUR_API_KEY';
    const searchBox = document.getElementById('search-box');
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
    const iconElement = document.getElementById('weather-icon');
    const weatherContainer = document.getElementById('weather-container');

    const country = searchBox.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            locationElement.innerText = data.name + ', ' + data.sys.country;
            temperatureElement.innerText = 'Temperature: ' + (data.main.temp - 273.15).toFixed(2) + '°C';
            descriptionElement.innerText = 'Weather: ' + data.weather[0].description;
            iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            weatherContainer.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}
