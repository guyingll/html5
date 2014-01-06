/**
 * Created by 2323 on 14-1-6.
 */
function initiate() {
    var elem = document.getElementById('canvas');
    canvas = elem.getContext("2d");
    canvas.fillStyle = "#000099";

//    stroke绘制成为轮廓（无填充）
//    canvas.beginPath();
//    canvas.moveTo(100,100);
//    canvas.lineTo(200,200);
//    canvas.lineTo(100,200);
//    canvas.stroke();


//    closepath自动连接终点和起点
//    canvas.beginPath();
//    canvas.moveTo(100,100);
//    canvas.lineTo(200,200);
//    canvas.lineTo(100,200);
//    canvas.closePath();
//    canvas.stroke();

//    fill自动填充
//    canvas.beginPath();
//    canvas.moveTo(100,100);
//    canvas.lineTo(200,200);
//    canvas.lineTo(100,200);
//    canvas.fill();


//    clip遮罩
//    canvas.beginPath();
//    canvas.moveTo(100,100);
//    canvas.lineTo(200,200);
//    canvas.lineTo(100,200);
//    canvas.clip();
//
//    canvas.beginPath();
//    for(f=0;f<300;f = f+10){
//        canvas.moveTo(0,f);
//        canvas.lineTo(500,f);
//    }
//    canvas.stroke();

    //以（100,100）为圆心 50px为半径画一个360°的弧线。 （即圆）
//    canvas.beginPath();
//    canvas.arc(100,100,50,0,Math.PI*2,false);
//    canvas.stroke();


//    canvas.beginPath();
//    canvas.arc(100,100,50,0,Math.PI /180*45,true);
//    canvas.stroke();

}

window.addEventListener('load',initiate,false);
