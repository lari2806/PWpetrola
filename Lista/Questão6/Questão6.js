function reverter(){
    var words = "";
    var word = window.prompt("Digite uma palavra");
    for (var i = word.length-1; i >= 0; i--){
        words += word[i];
    }
    console.log(words);
}
reverter();