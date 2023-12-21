let primeiro = Number(prompt("Digite o primeiro valor: "));
let ultimo = Number(prompt("Digite o último valor: "));
let incremento = Number(prompt("Digite o incremento: "));

for(i=primeiro; i<=ultimo; i+=incremento){
      
        document.write(i, "<br>");
    }

document.write("ACABOU!")