let valorHora = parseFloat(prompt("Digite o valor da Hora Trabalhada"));
let qntHora = parseFloat(prompt("Digite a quantidade de Horas Trabalhadas neste mês"));
let valorTotal = valorHora * qntHora;
alert("O sálario deste mês é: "+valorTotal.toFixed(2)+" reais.");
let inss = valorTotal * 0.08;
let irenda = valorTotal * 0.11;
let sind = valorTotal * 0.05;
let valorImposto = inss + irenda + sind;
valorLiquido = valorTotal - valorImposto;
alert("Valor dos Impostos: " + valorImposto.toFixed(2)+" reais.");
alert("Valor a Receber: "+valorLiquido.toFixed(2)+" reais.");
