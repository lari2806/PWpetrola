document.getElementById('Grande').addEventListener('submit', function(event) {
    event.preventDefault();
    // variavel currentdate armazena o ano atual.
    var date = new Date();
    var currentYear = date.getFullYear();
  
    let yearBirth = document.getElementById('idade').value;

    var age = currentYear - yearBirth;
 
    if(age >= 18){
        console.log("Voce pode votar");
    }else if(age < 18){
        console.log("Você não pode votar");
    }else{
        console.log("idade não identificada.");
    }

  });