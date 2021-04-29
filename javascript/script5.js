var listElements = document.getElementsByTagName("li");
var i=0;

setInterval(function() {      
    listElements[i].style.display = 'none';
    i++;
    if(i==listElements.length)
        i = 0;
    listElements[i].style.display = 'inline-flex';
    
    
}, 5000); 


function next(){
    listElements[i].style.display = 'none';
    i++;
    if(i==listElements.length)
        i = 0;
    listElements[i].style.display = 'inline-flex';
}


function prev(){
    listElements[i].style.display = 'none';
    i--;
    if(i==-1)
        i = listElements.length-1;
    listElements[i].style.display = 'inline-flex';
}