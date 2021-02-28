const bg = document.getElementById("bg");
const moon = document.getElementById("moon");
const mountain = document.getElementById("mountain");
const road = document.getElementById("road");
const text = document.getElementById("text");

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    bg.style.top = value * 0.5 + "px";
    moon.style.left = -value * 0.5 + "px";
    mountain.style.top = -value * 0.15 + "px";
    road.style.top = value * 0.15 + "px";
    text.style.top = value + "px";
});


// Make year of copyright current year
let year = new Date().getFullYear();

document.getElementById("copyright-text").innerText = "© Izhak Latovski " + year;
document.getElementById("copyright-text-2").innerText = "© Izhak Latovski " + year;