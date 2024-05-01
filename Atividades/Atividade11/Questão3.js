document.getElementById('Temp').addEventListener('submit', function(event) {
    event.preventDefault();

    var celsius = document.getElementById('celsius').value;
    var fahrenheit = celsius * 1.8 + 32;

    console.log("Está em " + fahrenheit +"°F" )

  });