let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};
let city = prompt("Enter a city");
city = city.toLowerCase();
let temper = 0;
let humid = 0;
let response = "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney";
if (weather[city] !== undefined){
    temper = weather[city].temp;
    humid = weather[city].humidity;
    let temperature = Math.round(temper);
    let fah = Math.round((temper * 9) / 5 + 32);
    response = `it is currently ${temperature}°C(${fah}°F) in ${city} with a humidity of ${humid}%`;
    alert(response);
}
else {
        alert(response)
}
