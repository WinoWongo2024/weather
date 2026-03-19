const mockData = {
    "london": { temp: 15, desc: "Cloudy" },
    "tokyo": { temp: 22, desc: "Sunny" },
    "new york": { temp: 18, desc: "Rainy" }
};

function getWeather() {
    const city = document.getElementById('cityInput').value.toLowerCase();
    const resultDiv = document.getElementById('weatherResult');
    
    if (mockData[city]) {
        document.getElementById('cityName').innerText = city.toUpperCase();
        document.getElementById('temp').innerText = `${mockData[city].temp}°C`;
        document.getElementById('desc').innerText = mockData[city].desc;
        resultDiv.style.borderColor = "#00d1b2";
    } else {
        alert("City not found in simulation! Try London, Tokyo, or New York.");
    }
}
