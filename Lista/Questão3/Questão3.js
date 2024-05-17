function fatorial(){
    var factor = 1;
    var number = window.prompt("Digite un número");
    for(var i = 1; i<=number; i++){
        factor *= i;
        console.log(factor);

    }
    console.log("o fatorial do número " + number + " é " + factor);
}
fatorial();