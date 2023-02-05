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

// function (){
    
// }


