function decisao() {
    var escolha = prompt("A ou B ");
    if(escolha == "A") {
        window.location.href =("../html/person1-3.html");
}
    else if (escolha == "B") {
        window.location.href =("../html/gameOver.html");
   console.log("ta ruim")
}
    else{
        alert("Ainda não aprendeu??? -.-")
    }
}