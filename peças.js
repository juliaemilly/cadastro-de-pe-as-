let pesoPeca = 0;
let nomePeca = "";
let qtdPecaCaixa = 0;

pesoPeca = prompt("informe o peso da peça");

if (pesoPeca > 100) {
    nomePeca = prompt("Informe o nome da peça");

    if (nomePeca.legth >= 3){
        qtdPecasCaixa = prompt("Informe a quantidade de peças na caixa");

        if (qtdPecasCaixa >= 10) {
            console.log("A caixa já está cheia")
        } else {
            console.log("Processo concluido com sucesso");
        }
    } else {
        console.log("O nome da peça é muito pequeno");
    }
} else {
    console.log("A peça não tem o peso mínimo autorizado")
}