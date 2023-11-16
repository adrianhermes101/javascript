let numeroSecreto = Math.floor(Math.random() *100) +1

let qtdTentativas = 0

let verificarBotao = document.getElementById("verificarbotao");
let tentativaEntrada = document.getElementById("tentativa");
let dica = document.getElementById("dica");

verificarBotao.addEventListener("click" , function () {

    cont tentativa = parseInt(tentativaEntrada.value);

    If(tentativa === numeroSecreto){
        dica.textContet = 'Parabens!!! Vocẽ acertou em ${qtdtentativas}.';
        verificarBotao.disable = true;
    
    }
    else if(tentativa < numeroSecreto){
        dica.textContet = "Tente um numero maior.";
        qtdtentativa++;
    
    }else{
        dica.textContet = "Tente um numero menor";
        qtdtentativa++;
    }
});