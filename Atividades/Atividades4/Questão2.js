document.getElementById('Teste').addEventListener("submit", function(event){
    event.preventDefault();

    const pontos = document.getElementById('Pontos').value;
    
    if(pontos >= 1000){
        document.getElementById('resultado').innerHTML = "Você é usuario vip";
    }else if(pontos < 1000){
        document.getElementById('resultado').innerHTML = "Cale a boca plebe";
    }else{
        document.getElementById('resultado').innerHTML = "tu é macaco? bota um número";
    }
});
