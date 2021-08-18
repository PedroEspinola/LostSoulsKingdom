function decisao() {
    var escolha = prompt("A ou B ");
    if(escolha == "A") {
        window.location.href =("../../html/gameOver.html");
    }
    else if (escolha == "B") {
        window.location.href =("../../html/person-Luna/person1-2.html");
    }
    else{
        alert("Digita Certo")
    }
}