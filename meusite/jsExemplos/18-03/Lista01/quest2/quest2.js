let anoAtual = parseFloat(prompt("Digite o ano atual"));
let anoNascimento = parseFloat(prompt("Digite o ano de nascimento"));
let idade = 0;
idade = anoAtual - anoNascimento;
if(idade>=18){
  alert("Pode Trabalhar Oficialmente");
}else{
  alert("Não Pode Trabalhar Oficialmente");
}
