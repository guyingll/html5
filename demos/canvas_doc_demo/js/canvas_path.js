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

//    canvas.beginPath();
//    canvas.moveTo(50,50);
////    二次贝塞尔曲线
//    canvas.quadraticCurveTo(100,125,50,200);
//    canvas.moveTo(250,50);
////    三次贝塞尔曲线
//    canvas.bezierCurveTo(200,125,300,125,250,200);
//    canvas.stroke();

//    line attr
//    canvas.beginPath();
//    canvas.arc(200,150,50,0,Math.PI*2,false);
//    canvas.stroke();
//
//    canvas.lineWidth=10;
//    canvas.lineCap="round";
//    canvas.beginPath();
//    canvas.moveTo(230,150);
//    canvas.arc(200,150,30,0,Math.PI,false);
//    canvas.stroke();
//
//    canvas.lineWidth=5;
//    canvas.lineJoin="miter";
//    canvas.beginPath();
//    canvas.moveTo(170,135);
//    canvas.lineTo(180,125);
//    canvas.lineTo(190,135);
//
//    canvas.moveTo(205,135);
//    canvas.lineTo(215,125);
//    canvas.lineTo(225,135);
//
//    canvas.moveTo(195,135);
//    canvas.lineTo(215,155);
//    canvas.lineTo(195,155);
//    canvas.stroke();
//
//    //shadow
//    canvas.shadowColor="rgba(0,0,0,0.5)";
//    canvas.shadowOffsetX=4;
//    canvas.shadowOffsetY=4;
//    canvas.shadowBlur=5;
//
//    //text 文字
//    canvas.font="bold 24px  'Bookman Old Style','YaHei Consolas Hybrid'，verdana,sana-serif";
//    canvas.textAlign="start";
//    canvas.fillText("愚蠢的人类啊",115,80);

//    canvas.font="bold 24px  'Bookman Old Style','YaHei Consolas Hybrid'，verdana,sana-serif";
//    canvas.fillText("TEST",50,20);
//
//    //平移
//    canvas.translate(50,90);
//    //旋转
//    canvas.rotate(Math.PI/180*45);
//    //缩放
//    canvas.scale(1,2);
//    canvas.fillText("TEST",0,0);

    //注意转换效果为累加
//    canvas.font="bold 24px  'Bookman Old Style','YaHei Consolas Hybrid'，verdana,sana-serif";
//
//    canvas.transform(3,0,0,1,0,0);
//    canvas.fillText("TEST",20,20);
//
//    canvas.transform(1,0,0,10,0,0);
//    canvas.fillText("TEST",100,20);
    canvas.save();

    canvas.translate(50,70);
    canvas.font="bold 24px  'Bookman Old Style','YaHei Consolas Hybrid'，verdana,sana-serif";
    canvas.fillText("TEST1",0,30);
    canvas.restore();
    canvas.fillText("TEST2",0,30);
}

window.addEventListener('load',initiate,false);
