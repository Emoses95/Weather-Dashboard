const apiKey="478f90251fdefe4662977362541510d4";
// variable for searchButton 
var searchButton =document.querySelector('.searchbtn');
searchButton.addEventListener('click',searchButtonHandler);

function searchButtonHandler(){
    // get searchbar content
var targetCity = getCityInputText()
console.log(targetCity);
}
// gets user input value as a string
function getCityInputText(){
var cityInput= document.querySelector('#cityinput');
return cityInput.value
}
// TODO: if city name has a space use %20
function getForecastRequestUrl(cityName) {
    const url= `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    return url;
}


