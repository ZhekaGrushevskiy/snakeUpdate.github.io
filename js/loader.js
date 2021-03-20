
document.body.onload=function(){
    setTimeout(function(){
        var boxPreload=document.getElementById('boxPreload');
        var cntue = document.getElementById('cntue');
        if(!boxPreload.classList.contains('done')){
            boxPreload.classList.add('done');
            cntue.classList.add('close');
        }
    },500);
};

var preload = document.getElementById('preload');
var boxPreload = document.getElementById('boxPreload');

var cntue = document.getElementById('cntue');

cntue.addEventListener('click', contFun, false);
document.addEventListener('keydown', contFun1, false);
function contFun(EO){
    EO = EO || window.event;
    var loader=document.getElementById('loader');
    loader.classList.add('done');
    cntue.classList.add('done');
}
function contFun1(EO){
    EO = EO || window.event;
    var loader=document.getElementById('loader');
    if(EO.keyCode==13||EO.keyCode==32)
    loader.classList.add('done');
    cntue.classList.add('done');
}




