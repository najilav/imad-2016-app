console.log('Loaded!');
var element=document.getElementById('main-txt');
element.innerHTML="Najila Vilakkini";

var img=document.getElementById('dino');
img.onclick= function(){
    var interval = setInterval(moveRight(),100);
}

var marginLeft=0;
function moveRight()
{
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft+'px';
}