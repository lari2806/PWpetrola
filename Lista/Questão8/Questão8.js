function primos(){
    var number = window.prompt("Digite um número");
    
        if (number%number == 0 && number%2 == 1 || number == 2){
            console.log(true);
            
        }
        else{
            console.log(false);
        }
    }
primos()