function mmc(){
     
    var number1 = window.prompt("Digite o primeiro número ");
    var number2 = window.prompt("Digite o segundo número ");
    var mmc1 = [];
    var mmc2 = [];
    
    for (var i = 1; i <= number1; i++){
        if (number1 % i == 0){
             mmc1.push(i);
             
        }
    }

    for (var i = 1; i <= number2; i++){
        if ( number2 % i == 0){
            mmc2.push(i);
        }
    }

    var maxmmc = Math.max(...mmc1);
    var maxmmc2 = Math.max(...mmc2);

    var mmcs = mmc2.find(elemento  => elemento === maxmmc || mmc1.find(elemento  => elemento === maxmmc2));

    var mmc = (number1 * number2)/mmcs

    console.log(mmc)
    console.log("O mmc de " + number1 + " e de " + number2+ " é " + mmcs);
    console.log(mmc1);
    console.log(mmc2);
}
mmc();