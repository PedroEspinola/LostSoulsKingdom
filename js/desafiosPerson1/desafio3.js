function decisao() {
    var escolha = prompt("A ou B ");
    if(escolha == "A") {
        window.location.href =("../html/zerou.html");
}
    else if (escolha == "B") {
        window.location.href =("../html/gameOver.html");
   console.log("ta ruim")
}
    else{
        alert("Você não serve pra esse jogo, vá jogar damas!")
    }
}