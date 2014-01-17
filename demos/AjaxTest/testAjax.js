/**
 * Created by 2323 on 14-1-16.
 */
//同步传输模式

function RequestByGet(nProducttemp,nCountrytemp) {
    var xmlhttp

    if (window.XMLHttpRequest) {
        //isIE = false;
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        //isIE = true;
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //Web page location.
    var URL = "http://www.baidu.com/;
    xmlhttp.open("GET",URL,false);
    //xmlhttp.SetRequestHeader("Content-Type","text/html; charset=Shift_JIS")
    xmlhttp.send(null);
    var result = xmlhttp.status;

    //OK
    if (result == 200) {
        document.getElementById("div_RightBarBody").innerHTML = xmlhttp.responseText;
    }
    xmlhttp = null;
}

//异步传输模式

var xmlhttp

function RequestByGet(nProducttemp,nCountrytemp) {
    if (window.XMLHttpRequest) {
        //isIE = false;
        xmlhttp = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        //isIE = true;
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //Web page location.
    var URL = "http://www.baidu.com/";
    xmlhttp.open("GET",URL,true);
    xmlhttp.onreadystatechange = handleResponse;
    //xmlhttp.SetRequestHeader("Content-Type","text/html; charset=UTF-8")
    xmlhttp.send(null);
}

function handleResponse() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("div_RightBarBody").innerHTML = xmlhttp.responseText;
        xmlhttp = null;
    }
}