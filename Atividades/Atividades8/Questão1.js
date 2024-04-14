document.getElementById('AreaPeso').addEventListener("submit", function(event){
    event.preventDefault();

    const peso = document.getElementById('Peso').value;
    const alt = document.getElementById('Altura').value;

    const imc = peso / (alt * alt); 

let categoria;
    switch (true) {
        case (imc < 18.5):
            categoria = "Abaixo do peso";
            break;
        case (imc < 25):
            categoria = "Peso normal";
            break;
        case (imc < 30):
            categoria = "Sobrepeso";
            break;
        case (imc < 35):
            categoria = "Obesidade grau I";
            break;
        case (imc < 40):
            categoria = "Obesidade grau II";
            break;
        default:
            categoria = "Obesidade grau III (obesidade mórbida)";
    }
});