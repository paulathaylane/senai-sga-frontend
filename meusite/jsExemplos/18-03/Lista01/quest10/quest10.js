let n1 = parseFloat(prompt("Insira o primeiro valor"));
let n2 = parseFloat(prompt("Insira o segundo valor"));
let n3 = parseFloat(prompt("Insira o terceiro valor"));

if((n1 > n2) && (n1 > n3)){
  alert("O maior número é o primeiro: "+n1);
}else if((n1 < n2) && (n2 > n3)){
  alert("O maior número é o segundo: "+n2);
}else if((n1 < n3) && (n3 > n2)){
  alert("O maior número é o terceiro: "+n3);
}else{
  alert("Não tem um número superior");
}
