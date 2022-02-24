let key = '6504515af8b3f29040303da22929a4c7';
let cityTitleEl = document.getElementById('cityName');
let currentTempEl = document.getElementById('temp');
let windEl = document.getElementById('wind');
let humidityEl = document.getElementById('humidity');
let uvIndexEl = document.getElementById('uvIndex');
let iconEl = document.getElementById('icon');
let prevBtnList = document.getElementById('btnList');
let dateIconEl1 = document.getElementById('dateIcon1');
let dateIconEl2 = document.getElementById('dateIcon2');
let dateIconEl3 = document.getElementById('dateIcon3');
let dateIconEl4 = document.getElementById('dateIcon4');
let dateIconEl5 = document.getElementById('dateIcon5');
let temp1El = document.getElementById('temp1');
let temp2El = document.getElementById('temp2');
let temp3El = document.getElementById('temp3');
let temp4El = document.getElementById('temp4');
let temp5El = document.getElementById('temp5');
let wind1El = document.getElementById('wind1');
let wind2El = document.getElementById('wind2');
let wind3El = document.getElementById('wind3');
let wind4El = document.getElementById('wind4');
let wind5El = document.getElementById('wind5');
let humidity1El = document.getElementById('humidity1');
let humidity2El = document.getElementById('humidity2');
let humidity3El = document.getElementById('humidity3');
let humidity4El = document.getElementById('humidity4');
let humidity5El = document.getElementById('humidity5');
var lattitude = 0;
var longitude = 0;


//fucntion for pasting previous search button
var prevBtn = function(){
  var buttons = document.querySelectorAll('.buttons button')
  let prevBtnVal = document.getElementById('name').value;
  let prevBtnEl = document.createElement('button');
  prevBtnEl.innerHTML = prevBtnVal;
  prevBtnEl.className = "prevSearchBtn";
  if (buttons.length < 7){
    prevBtnList.appendChild(prevBtnEl);
  }
  console.log(buttons.length)
}


//function handleCitySearch(event) {
    var cords = function (city) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`)
    .then(data=>data.json())
    .then(function(results){
    lattitude = results.coord.lat;
    longitude = results.coord.lon;
    currentCity = results.name;
    currentTemp = results.main.temp;
    wind = results.wind.speed;
    humidity = results.main.humidity;
    cityTitleEl.innerHTML = currentCity;
    currentTempEl.innerHTML = "Temp: " + currentTemp;
    windEl.innerHTML = 'Wind: ' + wind + ' MPH';
    humidityEl.innerHTML = 'Humidity: ' + humidity + ' %';
    console.log(currentCity);
    weatherData(lattitude, longitude);
    forecast(lattitude, longitude);
    console.log(lattitude, longitude);
    console.log(results);
    });
    }

    // api for uv Index
  var weatherData = function (lattitude, longitude){
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lattitude + "&lon=" + longitude + "&exclude=alerts&units=imperial&lang=en&appid=" + key;
        fetch(apiURL)
          .then(function (response) {
            // request was successful
            if (response.ok) {
              response.json().then(function (data) {
                console.log(data);
                icon = data.current.weather[0].icon;
                uvindex = data.current.uvi;
                uvIndexEl.innerHTML = 'UV Index: ' + uvindex;
                iconEl.innerHTML =  "<img src='https://openweathermap.org/img/wn/" + icon + "@2x.png' width='50px' height='50px'>";

                //weatherIcon.html("<img src='https://openweathermap.org/img/wn/" + icon + "@2x.png' width='50px' height='50px' alt='" + iconDesc + "'>");
                if (parseFloat(uvindex) <= 2) {
                  document.getElementById('uvIndex').style.backgroundColor = 'green';
                } else if (parseFloat(uvindex) <= 8) {
                  document.getElementById('uvIndex').style.backgroundColor = 'yellow';
                } else {
                  document.getElementById('uvIndex').style.backgroundColor = 'red';
                }
      
              })
            } else {
              console.log('Error: Weather Data Not Found');
            }
          })
          .catch(function (error) {
            console.log("Unable to connect to Open Weather One Call API");
          })

  }

  // api for 5 day forecast
  var forecast = function (lattitude, longitude){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lattitude}&lon=${longitude}&units=imperial&appid=${key}`)
    .then(data=>data.json())
    .then(function(results){
      console.log(results);
      dateIcon1 = results.list[8].weather[0].icon;
      dateIcon2 = results.list[16].weather[0].icon;
      dateIcon3 = results.list[24].weather[0].icon;
      dateIcon4 = results.list[32].weather[0].icon;
      dateIcon5 = results.list[39].weather[0].icon;
      dateTemp1 = results.list[8].main.temp;
      dateTemp2 = results.list[16].main.temp;
      dateTemp3 = results.list[24].main.temp;
      dateTemp4 = results.list[32].main.temp;
      dateTemp5 = results.list[39].main.temp;
      wind1 = results.list[8].wind.speed;
      wind2 = results.list[16].wind.speed;
      wind3 = results.list[24].wind.speed;
      wind4 = results.list[32].wind.speed;
      wind5 = results.list[39].wind.speed;
      humidity1 = results.list[8].main.humidity;
      humidity2 = results.list[16].main.humidity;
      humidity3 = results.list[24].main.humidity;
      humidity4 = results.list[32].main.humidity;
      humidity5 = results.list[39].main.humidity;
      dateIconEl1.innerHTML = "<img src='https://openweathermap.org/img/wn/" + dateIcon1 + "@2x.png' width='50px' height='50px'>"
      dateIconEl2.innerHTML = "<img src='https://openweathermap.org/img/wn/" + dateIcon2 + "@2x.png' width='50px' height='50px'>"
      dateIconEl3.innerHTML = "<img src='https://openweathermap.org/img/wn/" + dateIcon3 + "@2x.png' width='50px' height='50px'>"
      dateIconEl4.innerHTML = "<img src='https://openweathermap.org/img/wn/" + dateIcon4 + "@2x.png' width='50px' height='50px'>"
      dateIconEl5.innerHTML = "<img src='https://openweathermap.org/img/wn/" + dateIcon5 + "@2x.png' width='50px' height='50px'>"
      temp1El.innerHTML = "Temp: " + dateTemp1;
      temp2El.innerHTML = "Temp: " + dateTemp2;
      temp3El.innerHTML = "Temp: " + dateTemp3;
      temp4El.innerHTML = "Temp: " + dateTemp4;
      temp5El.innerHTML = "Temp: " + dateTemp5;
      wind1El.innerHTML = "Wind: " + wind1 + " MPH";
      wind2El.innerHTML = "Wind: " + wind2 + " MPH";
      wind3El.innerHTML = "Wind: " + wind3 + " MPH";
      wind4El.innerHTML = "Wind: " + wind4 + " MPH";
      wind5El.innerHTML = "Wind: " + wind5 + " MPH";
      humidity1El.innerHTML = "Humidity: " + humidity1 + " %";
      humidity2El.innerHTML = "Humidity: " + humidity2 + " %";
      humidity3El.innerHTML = "Humidity: " + humidity3 + " %";
      humidity4El.innerHTML = "Humidity: " + humidity4 + " %";
      humidity5El.innerHTML = "Humidity: " + humidity5 + " %";
    })
  }


  //click function to run all other functions
document.getElementById('searchB').addEventListener('click', function(){
    
    let city = document.getElementById('name').value;
    console.log(city);
    cords(city);
    prevBtn();
    function update() {
      $('#currentDayOne').html(moment().format('l'));
    }
    setInterval(update, 1000);
    function updateOne(){
      $('#date1').html(moment().add(1, 'day').format('l'));
    }
    setInterval(updateOne, 1000);
    function updateTwo(){
      $('#date2').html(moment().add(2, 'days').format('l'));
    }
    setInterval(updateTwo, 1000);
    function updateThree(){
      $('#date3').html(moment().add(3, 'days').format('l'));
    }
    setInterval(updateThree, 1000);
    function updateFour(){
      $('#date4').html(moment().add(4, 'days').format('l'));
    }
    setInterval(updateFour, 1000);
    function updateFive(){
      $('#date5').html(moment().add(5, 'days').format('l'));
    }
    setInterval(updateFive, 1000);
})

