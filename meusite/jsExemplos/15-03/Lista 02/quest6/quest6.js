let area = parseFloat(prompt("Insira o tamanho em metros quadrados da área a ser pintada: "));
let qntTinta = area * 3;
let qntLatas = qntTinta / 18;
let precoLatas = qntLatas.toFixed(0) * 80;
alert("A quantidade de latas necessárias é "+qntLatas.toFixed(0)+" e o valor é: "+precoLatas+" reais.");
