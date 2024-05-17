function number(){
    var number = parseFloat(window.prompt("Digite um número"));
    if (number % 2 == 0){
        return console.log(true);
    }else if (number % 2 ==1){
        return console.log(false);
    }
    console.log("Erro")
  }
  number();