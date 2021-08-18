function decisao() {
    var escolha = prompt("A ou B ");
    if(escolha == "A") {
        window.location.href =("../html/gameOver.html");
}
    else if (escolha == "B") {
        window.location.href =("../html/person1-2.html");
   console.log("ta ruim")
}
    else{
        alert("Digita Certo")
    }
}