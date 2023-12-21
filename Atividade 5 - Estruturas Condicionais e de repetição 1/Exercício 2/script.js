let salarioM = 0;
let salarioF = 0;

while(true){
    let salario = Number(prompt("Digite o salário: "));
    let sexo = prompt("Digite o sexo do funcionário (utilize M ou F): ");
    
        if(sexo === 'm'){
            salarioM += salario;
        } else if(sexo === 'f'){
            salarioF += salario;
        } else {
            alert("Opção digitada inválida!");
        }

    let continuar = prompt("Quer continuar? (Utilize S ou N): ");

        if(continuar !== 's'){
            break;
        }
}

        document.write("O total de sálarios pagos para homens foi de R$ ", salarioM, ".<br>");
        document.write("O total de sálarios pagos para mulheres foi de R$ ", salarioF, ".");