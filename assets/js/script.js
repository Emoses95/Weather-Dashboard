var btn = document.querySelector('.btn');
var cityField = document.querySelector('#city');
var cityTitle = document.querySelector('#city-title');
var weatherCards = document.querySelector('#weather-containers');
var cityButton = document.querySelector('#city-button');

function generateButtonNames() {
    dataNames = localStorage.getItem('buttonNames')
    if (dataNames === null) {
        return []
    } else {
        return JSON.parse(dataNames)
    }
}

var generateNames = generateButtonNames();

function getWeatherApi(lat, lon, generateNewBtn) {
    var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon${lon}&appid=91f70ee705cc15ae38e8e5bf4ba00fb0&units=imperial`;
    console.log(weatherUrl)
    fetch(weatherUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            RTCEncodedAudioFrame(data, generateNewBtn)
        })
}

function renderInfo(data, generateNewBtn) {
    weatherCards.innerHTML = '';
    for (leti = 0; i < 40; i += 9) {
        var newWeatherCard = document.createElement('section');
        var date = document.createElement('h4');
        var weatherIcon = document.createElement('h4');
        var weathScription = document.createElement('h4');
        var temp = document.createElement('h4');
        var wind = document.createElement('h4');
        var humidity = document.createElement('h4');


        date.textContent = `Date: ${data.list[i].dt_txt}`
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`
        weatherIcon.alt = 'weather icon'
        temp.textContent = `Temp:${data.list[i].main.temp} F`
        weathScription.textContent = `${data.list[i].weather[0].description}`
        wind.textContent = `Wind:${data.list[i].wind.speed}MPH`
        humidity.textContent = `Humidity: ${data.list[i].main.humidity}%`

        newWeatherCard.append(date);
        newWeatherCard.append(weathScription);
        newWeatherCard.append(weatherIcon);
        newWeatherCard.append(temp);
        newWeatherCard.append(wind);
        newWeatherCard.append(humidity);
        weatherCards.append(newWeatherCard);

        city = data.city.name
        country = data.city.country
        cityTitle.textContent = `${city}, ${country}`


    }
    if (generateNewBtn) {
        createButton(`${city},${country}`, true)
    }

}

function createButton(btnName, saveBtnNames) {
    var cityBtn = document.createElement("button");
    cityBtn.innerHTML = btnName;
    cityBtn.classList.add("ctyBtn");
    cityButtons.appendChild(cityBtn);
    cityBtn.addEventListener("click", function () {
        getMapApi(this.innerHTML, false);
    });
    if (saveBtnNames) {

    }
}


function getMapApi(cityName, newBtn) {
    var mapUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=478f90251fdefe4662977362541510d4&location=${cityName}`
    console.log(mapUrl)
    fetch(mapUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data.results[0].locations[0])
            var lat = data.results[0].locations[0].latLng.lat
            var lon = data.results[0].locations[0].latLng.lng
            getWeatherApi(lat, lon, newBtn)
        })
}


btn.addEventListener("click", function () {
    event.preventDefault();
    getMapApi(cityField.value, true)
    cityField.value = ""
})

var buttonNames = generateButtonNames();

buttonNames.forEach(function (btnName) {
    createButton(btnName, false);
});





















