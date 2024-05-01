var alunos = [
    {nome:"César", idade: 19, skills: ["JavaScript", "Java", "SQL"]},

    {nome:"Roberto", idade: 20, skills: ["PHP", "Java", "SQL"]},

    {nome:"Neide", idade: 40, skills: ["UML", "Java", "Machine learning"]},

    {nome:"Thomaz", idade: 15, skills: ["HTML", "JavaScript", "CSS"]},

    {nome:"Sávio", idade: 16, skills: ["SQL", "Java", "Spring Boot"]}

];

function copy(alunos,skill){
    // Retornou um filtro no array alunos. Esse filtro ativa função nos alunos.
    return alunos.filter(function(alunos){
        return alunos.skills.includes(skill);    //retorna o array alunos e o include coloca o array skills dentro de skill.
    })
}

var pegarSkill = "Java";
var alunoWJava = copy(alunos,"JavaScript");

console.log("Todos os alunos com a Skill " + pegarSkill);
alunoWJava.forEach(function(alunos) {                           //.join() retorna todos os elementos do array em String
    console.log(alunos.nome + ", " + alunos.idade + ", [" + alunos.skills.join(", ") + "]");
});