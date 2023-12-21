let largura = Number(prompt("Digite a largura do terreno: "));
let comprimento = Number(prompt("Digite o comprimento do terreno: "));
let area = largura*comprimento;

if(area<100){
    document.write(`Área total de ${area} m². Terreno Popular`);
} else if(area>=100 && area<=500){
    document.write(`Área total de ${area} m². Terreno Master`);
} else {
    document.write(`Área total de ${area} m². Terreno VIP`);
}