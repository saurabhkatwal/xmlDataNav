function loadDoc(url,callbackF){
    let xhttp=new XMLHttpRequest();
    xhttp.addEventListener('load',callbackF(this));
    xhttp.open('GET',url);
    xhttp.send();
}
loadDoc('temp.txt',fun1);
loadDoc('temp1.txt',fun2);
function fun1(this){
document.getElementById('demo1').innerHTML=this.responseText;
}
function fun2(this){
document.getElementById('demo2').innerHTML=this.responseText;
}