function decisao() {
    var escolha = prompt("A ou B ");
    if(escolha == "A") {
        window.location.href =("../html/introducao.html");
    }
    else if (escolha == "B") {
        window.location.href =("../html/index.html");
    }
    else{
        window.location.href =("../html/gameOver.html")
    }
}