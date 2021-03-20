
var records=document.getElementById('records');
var mas=[];
for ( let i=0; i<localStorage.length; i++ ) {
            let k=localStorage.key(i);
      mas[i]={'score':localStorage[k],'nik':k};

}
mas.sort(compareScore);

for(let i=0;i<mas.length;i++){
    var divBox=document.createElement('div');
divBox.style.position='relative';
divBox.style.display='flex';
divBox.style.alignItems='center';
divBox.style.paddingLeft=10+'px';
divBox.style.marginBottom=10+'px';

var colors=color();

var divCircle=document.createElement('div');
divCircle.style.position='absolute';
divCircle.style.width=30+'px';
divCircle.style.height=30+'px';
divCircle.style.borderRadius=50+'%';
divCircle.style.border='2px solid black';
divCircle.style.backgroundColor=colors;
divCircle.style.display='flex';
divCircle.style.alignItems='center';
divCircle.style.justifyContent='center';
divCircle.style.fontSize=22+'px';
divCircle.innerHTML=mas[i].score;

var divRec=document.createElement('div');
divRec.id='divRec';
divRec.style.background='linear-gradient(90deg,'+colors+' 0%,rgba(0, 0, 0, 0) 100% )';
divRec.style.width=90+'%';
divRec.style.height=25+'px';
divRec.style.marginLeft=25+'px';
divRec.style.paddingLeft=25+'px';
divRec.style.display='flex';
divRec.style.alignItems='center';
divRec.innerHTML=mas[i].nik;

divBox.appendChild(divCircle);
divBox.appendChild(divRec);
records.appendChild(divBox);
}

function compareScore(a,b){
    return b.score-a.score;
}

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function color() {
var colors=[ '', 'red', 'orange', 'yellow', 'green', 'blue', 'pink', 'grey' ];
    var n=randomDiap(1,7);
    var colorName=colors[n];
    return colorName;
}

var buttonRecord=document.getElementById('button-record');
var tableRec=document.getElementById('tableRec');
buttonRecord.addEventListener('click',clickRec);



function clickRec(EO){
    EO=EO||window.event;
    tableRec.classList.add('done'); 
}

var closeTableRec=document.getElementById('closeTableRec');
closeTableRec.addEventListener('click',clickRecClose);

function clickRecClose(EO){
    EO=EO||window.event;
    tableRec.classList.remove('done');
}