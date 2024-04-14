document.getElementById('FormPetrola').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtenha os valores dos campos do formulário
    const escola = document.getElementById('escola').value;
    const turma = document.getElementById('turma').value;
    const serie = document.getElementById('serie').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    // Imprima as informações no console
    const informações = " Escola " + escola + " Turma " + turma + " Serie " + serie + " Nome " + nome + " Idade"  + idade;    
    console.log(informações);
});
