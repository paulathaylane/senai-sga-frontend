let nInt1 = parseInt(prompt("Insira o primeiro número real"));
let nInt2 = parseInt(prompt("Insira o segundo número real"));
let nReal = parseFloat(prompt("Insira um número real"));
let qA = (nInt1*2) * (nInt2/2);
let qB = (nInt1*3) + nReal;
let qC = nReal * nReal * nReal;
alert("Questão A"+ qA.toFixed(2));
alert("Questão B"+ qB.toFixed(2));
alert("Questão C"+ qC.toFixed(2));
