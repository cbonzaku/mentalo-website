function searsh(){
    var i,a;
    var txt = document.getElementById('srsh');
    var text = txt.value.toUpperCase();
    var div = document.querySelectorAll('.fenetre');
    for(i=0;i<div.length;i++){
        a = div[i].getElementsByTagName('p')[0];
         if(a.innerHTML.toUpperCase().indexOf(text) > -1){
           div[i].style.display=''; 
    }
        else{
        div[i].style.display='none';}
    }
   
}

function preCour() {
    document.getElementById("fenetre1").style.height = "0";
}

function re() {
    document.getElementById("fenetre1").style.height = "200px";
}
function preCour1() {
    document.getElementById("fenetre11").style.height = "0";
}

function re1() {
    document.getElementById("fenetre11").style.height = "200px";
}

function preCour2() {
    document.getElementById("fenetre12").style.height = "0";
}

function re2() {
    document.getElementById("fenetre12").style.height = "200px";
}

function preCour3() {
    document.getElementById("fenetre13").style.height = "0";
}

function re3() {
    document.getElementById("fenetre13").style.height = "200px";
}

function preCour4() {
    document.getElementById("fenetre14").style.height = "0";
}

function re4() {
    document.getElementById("fenetre14").style.height = "200px";
}

function preCour5() {
    document.getElementById("fenetre15").style.height = "0";
}

function re5() {
    document.getElementById("fenetre15").style.height = "200px";
}