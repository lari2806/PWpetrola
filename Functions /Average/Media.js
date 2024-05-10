function numbers(values){
    var valores = 0;
    for(var i = 1; i <= values; i++){
        var number = parseFloat(window.prompt("Digite o valor do " + i + "° Número"));

        if(!isNaN(number) && number >= 0){
        valores += number;
        }else{
            console.log("Digite um número. ");
            i--; 
        }
    }
    console.log(valores/values);
}
numbers(2);
