var abt = document.getElementById("about");
var how1 = document.getElementById("how");
abt.addEventListener("click",about);
how1.addEventListener("click",how);

function about()
{
    document.querySelector("#extra").innerHTML = "<div class='ext'> <h1> About </h1> <p> Created by John Gorriceta | Version: 1.1 </p> </div>"
}

function how()
{
    document.querySelector("#extra").innerHTML =
    "<div class='ext'>"+
    "<h1> How it Works </h1>"+
    "<br>"+
    "<p> Just Breathe is a website designed to help you control your breathing. <br> The circle will guide you through each breath. All you need to do is simply <br> match your breath pace with the circle. </p>" +
    "</div>"
}