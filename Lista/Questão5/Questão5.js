function vowels(){
    var words = window.prompt("Digite uma palavra");
    var word = "";
    for (var i = words.length; i >= 0; i--){
        word += words[i];
    var  vogais = word.replaceAll( /"[^áéíóúaeiouAEIOU]"/g, "");  //Substitui todas as consoantes por ""
    }
    console.log("no nome " + words + " existem essas vogais: " );
    console.log(vogais); 
    }
    vowels();
