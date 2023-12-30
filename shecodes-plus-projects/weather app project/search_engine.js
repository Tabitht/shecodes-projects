function realdate(now){
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let fdate = now.getDay();
    let intime = now.getHours();
    let inmin = now.getMinutes();
    if (intime < 10){
        intime = `0${intime}`;
    }
    if (inmin < 10){
        inmin = `0${inmin}`;
    }
    let indate = week[fdate]; 
    return `${indate} ${intime}:${inmin}`;
}
function search(event){
    event.preventDefault();
    let city = document.querySelector("#city");
    let search_city = document.querySelector("#search-city");
    city.innerHTML = search_city.value; 
}
let put_date = document.querySelector("#display");
let dtime = new Date();
put_date.innerHTML = realdate(dtime);
let search_buttton = document.querySelector("#search-button");
search_buttton.addEventListener("click", search);

function applydetail(response) {
  let temperature = document.querySelector("#temp");
  let changed = response.data;
  temperature.innerHTML = `${changed}&degC`;
}
function execute() {
  let search_city = document.querySelector("#search-city");
  let city = search_city.value;
  let apikey = "c1o355et4b9aed09b1a6435d6694e4ff";
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
  axios.get(apiurl).then(applydetail);
}
let click = document.querySelector("#search-button");
click.addEventListener("click", execute);