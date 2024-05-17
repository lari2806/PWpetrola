function mdc(){
     
    var number1 = window.prompt("Digite o primeiro número ");
    var number2 = window.prompt("Digite o segundo número ");
    var mdc1 = [];
    var mdc2 = [];
    
    for (var i = 1; i <= number1; i++){
        if (number1 % i == 0){
             mdc1.push(i);
        }
    }

    for (var i = 1; i <= number2; i++){
        if ( number2 % i == 0){
            mdc2.push(i);
        }
    }

    var maxmdc = Math.max(...mdc1);
    var maxmdc2 = Math.max(...mdc2);

    var mdcs = mdc2.find(elemento  => elemento === maxmdc || mdc1.find(elemento  => elemento === maxmdc2));

    console.log("O mdc de " + number1 + " e de " + number2+ " é " + mdcs);
    console.log(mdc1);
    console.log(mdc2);
}
mdc();