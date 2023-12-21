let nome = prompt("Digite seu nome: ");
let sexo = prompt ("Digite seu sexo (utilizando M ou F): ");
let valor = Number(prompt("Digite o valor das compras: "));

if(sexo==='m'){
    valor *= 0.95; 
} else {
    valor *= 0.87;
}

document.write("O valor total com desconto é de R$ ", valor);