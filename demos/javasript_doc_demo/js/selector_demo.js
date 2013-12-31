/**
 * Created by 2323 on 13-12-31.
 */
function clickMe() {
//    document.querySelector("#main p:first-child").onclick=showAlert;
//    document.querySelectorAll("#main p")[0].onclick=showAlert;
//    document.getElementById("main").querySelectorAll("p")[0].onclick=showAlert;
    var ele = document.getElementById("main").querySelectorAll("p")[0];
    ele.addEventListener("click",showAlert,false);
}

function showAlert() {
    alert("you clicked me!");
}

//window.onload=clickMe;
window.addEventListener("load",clickMe,false);