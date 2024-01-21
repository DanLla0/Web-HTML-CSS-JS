document.addEventListener("DOMContentLoaded", function () {
// timer code
    var timerDiv = document.querySelector(".timer");
    var fechaDeseada = new Date("August 28, 2023 00:00:00").getTime();
    const timer = () => {
        var fechaActual = new Date().getTime();
        var diferenciaDias = fechaDeseada - fechaActual;
        var dias = Math.floor(diferenciaDias / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferenciaDias % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferenciaDias % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferenciaDias % (1000 * 60)) / 1000);
        timerDiv.innerHTML = "Quedan: " + dias + " días " + horas + " horas " + minutos + " mins " + segundos + " segs "
    }
    setInterval(timer,1000);

// fucntion that reset properties to the original ones
    function reset() {
        this.style = "";
    }

// Header links effects
    const links = document.querySelectorAll(".links_2");
    links.forEach(x => x.addEventListener("mouseover", function () {
        this.style.color = "#ec5242";
    }));
    links.forEach(x => x.addEventListener("mouseleave", reset));

// programs effects
    const programs = document.querySelectorAll(".programa");
    programs.forEach(x => x.addEventListener("mouseover", function () {
        this.style.border = "1px solid white";
    }));
    programs.forEach(x => x.addEventListener("mouseleave", reset));

// People img effects
    const images = document.querySelectorAll(".img");
    images.forEach(x => x.addEventListener("mouseover", function () {
        this.style.scale = "1.2";
        this.style.filter = "grayscale(100%)";
    }));
    images.forEach(x => x.addEventListener("mouseleave", reset));

// partners images effects
    const partners = document.querySelectorAll(".partner");
    partners.forEach(x => x.addEventListener("mouseover", function () {
        this.style.scale = "1.5";
    }));
    partners.forEach(x => x.addEventListener("mouseleave", reset));
});