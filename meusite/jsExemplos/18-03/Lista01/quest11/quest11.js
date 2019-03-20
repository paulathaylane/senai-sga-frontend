let codigo = parseFloat(prompt("Insira seu código"));
let anoNascimento = parseFloat(prompt("Insira o ano em que nasceu"));
let anoInicio = parseFloat(prompt("Insira o ano em que entrou na empresa"));

let tempTrabalho = 0;
let idade = 0;

idade = 2019 - anoNascimento;
tempTrabalho = 2019 - anoInicio;

if(idade >= 65){
  alert("Requerer Aposentadoria");
}else if(tempTrabalho >= 30){
  alert("Requerer Aposentadoria");
}else if((tempTrabalho >= 25) && (idade >= 60)){
  alert("Requerer Aposentadoria");
}else{
  alert("Não requerer");
}
