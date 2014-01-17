/**
 * Created by 2323 on 14-1-17.
 */
function initiate()
{
    var elem = document.getElementById('getlocation');
    elem.addEventListener('click',getlocation,false);
}

function getlocation(){
    navigator.geolocation.getCurrentPosition(showinfo);
}

function showinfo(position){
    var location=document.getElementById('location');
    var data='';
    data+='Latitude:'+position.coords.latitude+'<br>';
    data+='Longitude:'+position.coords.longitude+'<br>';
    data+='Accuracy:'+position.coords.accuracy+'<br>';
    location.innerHTML=data;
}

window.addEventListener('load',initiate,false);
