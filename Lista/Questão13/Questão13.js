function armstrong(){
    var number = window.prompt("Digite um número").split('');
    var numbers = number.length;
    var valor = 0;

    for (var i =  0; i < numbers; i++){
        valor += parseInt(number[i]) ** numbers;

    }
    if (number == valor){
        console.log("O número " + number + "é um valor de Armstrong, o valor é " + valor);
    }else {
        console.log("O número " + number + "é não é um valor de Armstrong o valor é " + valor);
    }
    console.log(valor);
}
armstrong();