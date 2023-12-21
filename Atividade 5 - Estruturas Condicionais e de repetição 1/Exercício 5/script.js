let distancia = Number(prompt("Digite a distância em Km: "));
let valor = 0;

if(distancia<=200){
    valor = 0.50;
} else {
    valor = 0.45;
}

let preco = valor*distancia;

document.write("O preço da viagem é de R$ ", preco);