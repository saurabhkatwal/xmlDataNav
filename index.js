let i=0;
let CDs;
function loadDoc(){
let xhttp=new XMLHttpRequest();
xhttp.addEventListener('load',function(){
    let xres=xhttp.responseXML;
    CDs=xres.getElementsByTagName('CD');
    myDisplay(CDs,i);
});
xhttp.open('GET','cd_catalog.xml');
xhttp.send();   
}
function myDisplay(CDs,i){
document.getElementById('demo').innerHTML="Title: "+CDs[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue+"<br>Artist: "+CDs[i].getElementsByTagName('ARTIST')[0].childNodes[0].nodeValue+"<br>Country: "+CDs[i].getElementsByTagName('COUNTRY')[0].childNodes[0].nodeValue;
}
loadDoc();
let prev=document.getElementById('prev');
let next=document.getElementById('next');
next.addEventListener('click',function(){
if(i==CDs.length-1){
    i=CDs.length-1;
}
else{
    i++;
    myDisplay(CDs,i);
}
})
prev.addEventListener('click',function(){
if(i==0){
    i=0;
}
else{
    i--;
    myDisplay(CDs,i);
}
})