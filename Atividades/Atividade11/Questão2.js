document.getElementById('values').addEventListener('submit', function(event) {
    event.preventDefault();

    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    var value3 = parseFloat(document.getElementById('value3').value);

    var sum = (value1 + value2 + value3);
    var average = sum / 3;
    var product = value1 * value2 * value3;
    var min = Math.min(value1, value2, value3);
    var max = Math.max(value1, value2, value3);

    if (value1 == value2 || value1 == value3 || value2 == value3){
        console.log("Existem valores iguais, os três valores devem ser diferentes um do outro.");
    }else{
        console.log("A soma dos três valores é " + sum );
        console.log(" A média dos três valores é " + average);
        console.log("O Produto destes três valores é " + product);
        console.log("O menor destes três números é " + min);
        console.log("O maior destes três números é " + max);
    }

  });