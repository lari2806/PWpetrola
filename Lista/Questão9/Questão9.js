function pontuação() {
    var phrase = window.prompt("Digite uma palavra");
    var words = "";
    var frase = "";

    for (var i = 0; i <= phrase.length - 1; i++) { // frase é phrase sem espaço
        if (phrase[i] !== " ") {
            frase += phrase[i];
        }
    }
    for (var i = phrase.length - 1; i >= 0; i--) { // words recebe phrase sem espaço
        if (phrase[i] !== " ") {
            words += phrase[i];
        }
    }


    if (words.toLowerCase().replaceAll(/[.,;:]/g, '') == frase.toLowerCase().replaceAll(/[.,;:]/g, '')) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(frase.toLowerCase().replaceAll(/[.,;:]/g, ''));
    console.log(words.toLowerCase().replaceAll(/[.,;:]/g, ''));
}
pontuação();