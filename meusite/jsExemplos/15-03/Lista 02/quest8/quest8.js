let valorHora = parseFloat(prompt("Digite o valor da Hora Trabalhada"));
let qntHora = parseFloat(prompt("Digite a quantidade de Horas Trabalhadas neste mês"));
let valorReceber = valorHora * qntHora;
alert("O sálario deste mês é: "+valorReceber.toFixed(2));
