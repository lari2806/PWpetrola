function triangulo(){
    var base = window.prompt("Digite a base do triângulo");
    var altura = window.prompt("Digite a altura do triângulo");
    var area = (base * altura)/2;
    console.log("A base do triângulo é " + base);
    console.log("A Altura deste triângulo é " + altura);
    console.log("A área deste triângulo será " + area);
}
triangulo();