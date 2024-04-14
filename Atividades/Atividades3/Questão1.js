document.getElementById('AreaPeso').addEventListener("submit", function(event){
    event.preventDefault();

    const peso = document.getElementById('Peso').value;
    const alt = document.getElementById('Altura').value;

    const imc = peso / (alt * alt);
    // isNaN serve pra verificar se é um número.
    if (isNaN(imc)) {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos.";
    } else {
        document.getElementById('resultado').innerHTML = "Seu IMC é: " + imc.toFixed(2);
    }
    // toFixed serve para indicar o máximo de números pós virgula. 

});