let pesoP = parseFloat(prompt("Digite o peso coletado"));
if(pesoP > 50){
let excesso = pesoP - 50;
let multa = excesso * 4;
alert("O valor excessido é: "+excesso+" quilos e o valor da multa é: "+multa.toFixed(2)+" reais.")
}else{
  alert("Peso ideal");
}
