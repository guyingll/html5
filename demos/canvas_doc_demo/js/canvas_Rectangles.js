/**
 * Created by 2323 on 14-1-6.
 */
function initiate(){
    var elem=document.getElementById('canvas');
    canvas=elem.getContext("2d");
    var grad=canvas.createLinearGradient(0,0,10,100);
    grad.addColorStop(0.5,'#0000ff');
    grad.addColorStop(1,'#000000');
    canvas.fillStyle=grad;

//    canvas.fillStyle="#000099";
//    canvas.strokeStyle="#990000";

//    canvas.strokeRect(100,100,120,120);
//    canvas.fillRect(110,110,100,100);
//    canvas.clearRect(120,120,80,80);
    canvas.fillRect(10,10,100,100);
    canvas.fillRect(300,10,200,100);
}

window.addEventListener('load',initiate,false);
