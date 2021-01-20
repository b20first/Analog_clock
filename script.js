

let hour = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hour.style.transform = `rotate(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotate(${mm}deg)`;
    sec.style.transform = `rotate(${ss}deg)`;

}, 1000);