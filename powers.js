//function to remove "disabled" class from section w/ id of "flight" and replace with class "enabled"

function flightHandlerFunction () {
    var flightSection = document.getElementById("flight");
    flightSection.classList.replace("disabled", "enabled");
}

function mindHandlerFunction () {
    var mindreadingSection = document.getElementById("mindreading");
    mindreadingSection.classList.replace("disabled", "enabled");
}

function xrayHandlerFunction () {
    var xraySection = document.getElementById("xray");
    xraySection.classList.replace("disabled", "enabled");
}
//click event listener on "activate flight" button 
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);

//click event listener on "mindreading" button
document.querySelector("#activate-mindreading").addEventListener("click", mindHandlerFunction);

//click event listener on "X-ray Vision" button
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);

//function to remove "disabled" classes and replace with "enabled" class for "Activate Powers" button -- opposite for "Deactive Powers" button
function enablePowers () {
    var enable = document.querySelectorAll(".disabled")
        for (var i = 0; i < enable.length; i++ ) {
              enable[i].classList.replace("disabled", "enabled")       
        }
}

function disablePowers () {
    var disabled = document.querySelectorAll(".enabled")
        for (var i = 0; i < disabled.length; i++ ) { 
            disabled[i].classList.replace("enabled", "disabled")       
        }
}
//click event listener on "Active All Powers" button
document.querySelector("#activate-all").addEventListener("click",enablePowers);



//click event listener on "Deactive All Powers" button
document.querySelector("#deactivate-all").addEventListener("click", disablePowers);
