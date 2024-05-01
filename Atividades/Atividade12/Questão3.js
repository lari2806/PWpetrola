document.getElementById('value').addEventListener('submit', function(event) {
    event.preventDefault();

var num = 1;
Value = document.getElementById('num').value;
for(var x = Value ; num <= 10; num ++){
        if(Value >=1 && Value <=10){
            console.log(x * num);
        }
        else{
            console.log("Digite somente algum número que esteja entre 1 e 10!");
        }
    
}});