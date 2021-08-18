function escolhaPersonagem() {
    var person = prompt("Cloe \nLuna \nNick");
    if(person == "Cloe") {
        window.location.href =("../html/person-Cloe/person1.html");
    }
    else if (person =="Luna"){
        window.location.href =("../html/gameOver.html");
 
    }
    else if (person =="Nick"){
        window.location.href =("../html/gameOver.html");
    }

    else{
   alert("PÔE O COMANDO CERTO, CABEÇÃO!!");
       
    }
}
