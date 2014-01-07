function initiate(){
    source1=document.getElementById('image');
    source1.addEventListener('dragstart',draged,false);

    drop=document.getElementById('dropbox');

    drop.addEventListener('dragenter',function(e){
        e.preventDefault();
    },false);

    drop.addEventListener('dragover',function(e){
        e.preventDefault();
    },false)

    drop.addEventListener('drop',dropped,false);
}

function draged(e){
//    var code='<img src="'+source1.getAttribute('src')+'">'
//    e.dataTransfer.setData('Text',code);

    e.dataTransfer.setData('Text',e.target.id);
}

function dropped(e){
    e.preventDefault();
//    drop.innerHTML= e.dataTransfer.getData('Text');
    var data=e.dataTransfer.getData('Text');
//appendChild后 被加入的节点从原来位置消失
    e.target.appendChild(document.getElementById(data));
}


window.addEventListener('load',initiate,false);

