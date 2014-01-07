/**
 * Created by 2323 on 14-1-6.
 */
function initiate(){
    var elem=document.getElementById('canvas');
    canvas=elem.getContext("2d");

//    替换  这个属性暂时不是所有的浏览器都支持
//    canvas.fillStyle="#990000";
//    canvas.fillRect(100,100,300,100);
//
//    canvas.globalCompositeOperation="destination-atop";
//
//    canvas.fillStyle="#AAAAFF";
//    canvas.font="bold 24px  'Bookman Old Style','YaHei Consolas Hybrid'，verdana,sana-serif";
//    canvas.textAlign="center";
//    canvas.textBaseline="middle";
//    canvas.fillText("TEST",250,110);

    var img=new Image();
    img.src="images/snow.jpg";
    img.addEventListener("load",function(){
//        canvas.drawImage(img,0,0,elem.width,elem.height);
//        获取图像中（135,30）开始尺寸为（50,50）像素的正方形区域，将这块区域调整为（200,200）像素并绘制在（0,0）位置
        canvas.drawImage(img,135,30,50,50,0,0,200,200);
    },false);

}

window.addEventListener('load',initiate,false);
