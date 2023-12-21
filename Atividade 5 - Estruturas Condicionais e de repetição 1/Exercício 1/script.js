let idade = 0;
let alunos = 0;
let encerramento = 0;
let media = 0;

while(encerramento!==999){
let idade = Number(prompt("Digite a idade do aluno: "));
encerramento = idade;
media+=idade;
alunos++;
}
 
document.write(`Existem ${alunos-1} alunos, a média de idade deles é ${(media-999)/(alunos-1)}!`)
