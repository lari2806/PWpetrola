function sum(number){

    var elements = [2, 7, 11, 15];
    var number = parseFloat(window.prompt("digite um número que dê a soma de 2,7,11,15"));

    for (var i = 0; i <= elements.length - 1; i++){

        var value1 = (elements[i] + elements[i +1]) ;
        var value2 = (elements[i] + elements[i +2]) ;
        var value3 = (elements[i] + elements[i +3]) ;
        var value4 = (elements[i] + elements[i +4]) ;

        if (value1 === number){
            console.log(number);
        return;
        }else if (value2 === number){
            console.log(number);
        return;  
        }else if (value3 === number){
        console.log(number);
        return;  
        }else if (value4 === number){
        console.log(number);
        return;  
        }
    }
    console.log("ERRO");
};
sum();