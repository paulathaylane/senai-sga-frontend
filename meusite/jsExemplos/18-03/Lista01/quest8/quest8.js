let nota = parseFloat(prompt("Digite a sua nota"));
let qntFaltas = parseFloat(prompt("Digite a quantidade de faltas"));

if((nota >= 7) && (qntFaltas < 10)){
  alert("Aprovado!");
}else{
  alert("Reprovado!");
}
