function frase(){
    var word = window.prompt("Digite uma palavra");
    console.log("Você digitou: " + word );
    var frase = word.split(' ');
    console.log("Há " + frase.length + " palavras");
}
frase();