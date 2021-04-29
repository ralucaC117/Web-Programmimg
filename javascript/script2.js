function myFunction(){
    var erori = "";

    var nume = document.getElementById('Nume');
    if (nume.value.trim() === ""){
        erori += "nume ";
        document.getElementById("Nume").style.border = "solid 1px red";
    }
    else{
        document.getElementById("Nume").style.border = "solid 1px black";
    }

    var data = document.getElementById('DataNasterii');
    if(data.value === ''){
        erori += 'data ';
        document.getElementById("DataNasterii").style.border = "solid 1px red";
    }
    else{
        document.getElementById("DataNasterii").style.border = "solid 1px black";
    }

    var varsta = document.getElementById('Varsta');
    if(varsta.value < 1 || varsta.value>100 || varsta.value === ''){
        erori += 'varsta ';
        document.getElementById("Varsta").style.border = "solid 1px red";
    }
    else{
        document.getElementById("Varsta").style.border = "solid 1px black";
    }

    var email = document.getElementById('Email');
    var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email_regex.test(email.value)){
        erori += 'email ';
        document.getElementById("Email").style.border = "solid 1px red";
    }
    else{
        document.getElementById("Email").style.border = "solid 1px black";
    }
    
    var mesaj = document.getElementById("mesaj");
    
    if(erori !== ''){
        mesaj.innerText = "Campurile " + erori + "nu sunt completate corect!";
    }else
        mesaj.innerText = "Datele sunt completate corect! ";
        
    
}