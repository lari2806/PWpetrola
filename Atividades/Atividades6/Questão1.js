document.getElementById('Habilitação').addEventListener("submit", function(event){
    event.preventDefault();

    const idad = document.getElementById('idade').value;
    const habil = document.getElementById('habilitado').checked;
    
    if(idad >= 18 && habil){
        console.log('dirige ai');
    }else{
        console.log('nao podedirigir.');
    }
}); 
