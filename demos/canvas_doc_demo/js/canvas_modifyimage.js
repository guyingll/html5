/**
 * Created by 2323 on 14-1-6.
 */
function initiate(){
    var elem=document.getElementById('canvas');
    canvas=elem.getContext("2d");


    var img=new Image();
    img.src="images/snow.jpg";
//    img.addEventListener("load",modimage1,false);

    window.addEventListener("mousemove",animation,false);
}

//半边图反化
function modimage(e){
    img=e.target;
    canvas.drawImage(img,0,0);
    var info=canvas.getImageData(0,0,175,262);

    var pos;
    for(x=0;x<=175;x++){
        for(y = 0;y<=262;y++){
            pos=(info.width*4*y)+(x*4);
            info.data[pos]=255-info.data[pos];
            info.data[pos+1]=255-info.data[pos+1];
            info.data[pos+2]=255-info.data[pos+2];
        }
    }
    canvas.putImageData(info,0,0);
}

//布满画板
function modimage1(e){
    img=e.target;
    var pattern=canvas.createPattern(img,'repeat');
    canvas.fillStyle=pattern;
    canvas.fillRect(0,0,500,300);
}

//点击事件触发动画
function animation(e){
    canvas.clearRect(0,0,300,500);

    var xmouse=e.clientX;
    var ymouse=e.clientY;
    var xcenter=220;
    var ycenter=150;
    var ang=Math.atan2(xmouse-xcenter,ymouse-ycenter);
    var x=xcenter+Math.round(Math.sin(ang)*10);
    var y=ycenter+Math.random(Math.cos(ang)*10);

    canvas.beginPath();
    canvas.arc(xcenter,ycenter,20,0,Math.PI*2,false);
    canvas.moveTo(xcenter+70,150);
    canvas.arc(xcenter+50,150,20,0,Math.PI*2,false);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(x+10,y);
    canvas.arc(x,y,10,0,Math.PI*2,false);
    canvas.moveTo(x+60,y);
    canvas.arc(x+50,y,10,0,Math.PI*2,false);
    canvas.fill();
}

window.addEventListener('load',initiate,false);
