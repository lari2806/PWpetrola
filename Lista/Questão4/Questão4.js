function palindromo(){
    var words = "";
    var word = window.prompt("Digite uma palavra");
    for (var i = word.length-1; i >= 0; i--){
        words += word[i];

        if(word == words){
            console.log(true);
        }else if (word != words){
            console.log(false)
        }else{
            console.log("error");
        }
    }
    console.log(words);
}
palindromo();