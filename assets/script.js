console.log("het");
let key = '6504515af8b3f29040303da22929a4c7';
let city = 'austin'
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`)
.then(data=>data.json())
.then(function(results){
    console.log(results)
});
