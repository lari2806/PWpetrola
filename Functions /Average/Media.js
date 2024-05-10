function numbers(){
    var valores = 0;

    var nota = window.prompt("Digite a quantidade de números para azer uma média deles");
    for(var i = 1; i <= nota; i++){
        var number = parseFloat(window.prompt("Digite o valor do " + i + "° Número"));

        if(!isNaN(number) && number >= 0){
        valores += number;
        }else{
            console.log("Digite um número. ");
            i--; 
        }
    }
    console.log(valores/nota);
}
numbers();
