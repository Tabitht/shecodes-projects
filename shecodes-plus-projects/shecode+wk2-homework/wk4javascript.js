function realdate(now){
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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
put_date.innerHTML = realdate(dtime)
let search_buttton = document.querySelector("#search-button")
search_buttton.addEventListener("click", search);
