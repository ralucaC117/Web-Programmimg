function myFunction(id){
    var oldElem = document.getElementById(id);
    var originalList = oldElem.parentNode;

    originalList.removeChild(oldElem);
    if(originalList.id === "cars"){
        document.getElementById('dogs').appendChild(oldElem);
    }
    else{
        document.getElementById('cars').appendChild(oldElem);
    }
    
}
