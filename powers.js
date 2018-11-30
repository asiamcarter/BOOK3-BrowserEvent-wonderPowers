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

