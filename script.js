function calculadora(){
        const operacao = Number(prompt('Escolha uma operação:\n 1 soma(+)\n 2 multiplicação (*)\n 3 subtração(-)\n 4 divisaoReal(/)\n 5 potenciacao(**)\n'));

    let n1= Number(prompt('coloque a primeiro valor:'));
    let n2= Number(prompt('coloque a segundo valor:'));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert = (`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }

    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
    }

    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
    }
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a ** ${n2}ª = ${resultado}`);
        novaOperacao();
    }
    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        console.log(certinho);
        novaOperacao();
    }
    
    function novaOperacao(){
        let opcao = prompt('Deseja fazer uma nova alteracao? \n 1 - sim\n 2 - nao\n');
        if (opcao == 1){
            calculadora();
        } else if (opcao == 2){
            alert('Ate mais !');
        }else {
            alert ('Digite uma opcao valida');
            novaOperacao();
        }
}

    if (operacao == 1){
        soma();
    } else if(operacao == 2){
        multiplicacao();
    } else if(operacao == 3){
        subtracao();
    } else if (operacao == 4){
        divisaoReal();
    } else if(operacao == 5){
        potenciacao();
    }

}
calculadora()