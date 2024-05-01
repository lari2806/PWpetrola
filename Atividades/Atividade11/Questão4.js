document.getElementById('Tabela').addEventListener('submit', function(event) {
    event.preventDefault();

    var produto = parseFloat(document.getElementById('value').value);
    var parcelas = parseFloat(document.getElementById('times').value);
    const checkup = document.getElementById('vista').checked;
    const parcelou = document.getElementById('parcelado').checked;

    if (checkup == true && parcelou == true){
        console.log("VOCÊ SÓ PODE SELECIONAR UMA OPÇÃO, MARQUE SOMENTE UM DOS ITENS");
    }
    else if (checkup == true){
        const aVista = produto * 0.025;
        console.log("Você recebeu 2,5% de desconto por comprar a vista, você deve pagar " + (produto - aVista).toFixed(2) );
    }
    else if (parcelou == true){
         if (parcelas>=2  && parcelas<=5){
            console.log("o Preço total é " + produto);
         }else if (parcelas >= 6 && parcelas <=10){

             let PreçoP =( produto /parcelas );
             let parcelJu = PreçoP * 0.06;
             let preçoJu = produto * 0.06;
             console.log("o preço de cada parcela será $" + parcelJu.toFixed(2) + " mensalmente")
             console.log("Você terá 6% de juros no pagamento, o total será " + (produto + preçoJu).toFixed(2) );
        }else if(parcelas >=11 && parcelas <=15){ 
          
            let PreçoP =( produto /parcelas );
            let parcelJu = PreçoP * 0.13;
            let preçoJu = produto * 0.13;
            console.log("o preço de cada parcela será $" + parcelJu.toFixed(2) + " mensalmente")
            console.log("Você terá 13% de juros no pagamento, o total será " + (produto + preçoJu).toFixed(2) );
        }else{
             console.log("Coloque um número de 1 a 15");
    }}
    else{
        console.log("SELECIONE SE IRÁ PAGAR Á VISTA OU PARCELADO!");
    }
});