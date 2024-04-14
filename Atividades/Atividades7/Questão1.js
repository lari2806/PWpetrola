document.getElementById('AreaPeso').addEventListener("submit", function(event){
    event.preventDefault();

    const peso = document.getElementById('Peso').value;
    const alt = document.getElementById('Altura').value;

    const imc = peso / (alt * alt); 
    let categoria;
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc < 25) {
        categoria = "Peso normal";
    } else if (imc < 30) {
        categoria = "Sobrepeso";
    } else if (imc < 35) {
        categoria = "Obesidade grau I";
    } else if (imc < 40) {
        categoria = "Obesidade grau II";
    } else {
        categoria = "Obesidade grau III (obesidade mórbida)";
    }

    document.getElementById('resultado').innerHTML = ("Seu IMC é: " + imc.toFixed(2) +"\nCategoria de IMC: " + categoria);

});