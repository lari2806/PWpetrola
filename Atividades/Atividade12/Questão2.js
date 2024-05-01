document.getElementById('ValorN').addEventListener('submit', function(event) {
    event.preventDefault();

var num = 1;
ValueN = document.getElementById('Value').value;
for(var N = ValueN; num <= N; num ++){
        console.log(num);
    
}});