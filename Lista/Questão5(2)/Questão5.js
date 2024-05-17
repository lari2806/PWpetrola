function vowels(){
    var words = window.prompt("Digite uma palavra");
        var vogais = words.replaceAll( /[^áéíóúaeiouAEIOU]/g, ""); 
        console.log("No nome " + words + " existem essas vogais: " );
        console.log(vogais); 
        console.log( "Há " + vogais.length + " vogais.");
    }
    vowels();