function fetchWeather (location) {
  let api = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?unitGroup=metric&key=CEEN3BJJEU6FJBDFW97JLWK2G&contentType=json";

  fetch(api)
   .then(response => response.json())
   .then(json => {
     displayToScreen(json.currentConditions.temp, json.description);
    })
    .catch(e => {alert(e)});
}

function displayToScreen (temp, desc) {
    //target temp html and replace with parameter temp
  let temphtml = document.querySelector(".temp");
  let deschtml = document.querySelector(".desc");
  temphtml.innerHTML = temp;
  deschtml.innerHTML = desc;
}

//add click event to button and fetch weather
let button = document.querySelector(".button");
let input = document.querySelector(".input");
button.addEventListener("click", function() {
    fetchWeather(input.value);
}); 
