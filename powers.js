//function to remove "disabled" class from section w/ id of "flight" and replace with class "enabled"

function flightHandlerFunction () {
    var flightSection = document.getElementById("flight");
    flightSection.classList.replace("disabled", "enabled");
}

//click event listenor on "activate flight" button 
document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);