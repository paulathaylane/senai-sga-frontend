let cargo = String(prompt("Você é Administrador ou Defundo?"));
switch (cargo){
case "Administrador":
let qntDefunto = parseFloat(prompt("Bem-Vindo, Administrador! Digite a quantidade de defuntos para calcular o lucro!"));
let lucro = 0;
lucro = qntDefunto * 387;
alert("O lucro é: "+lucro.toFixed(2)+" reais.");
break;
case "Defunto":
let ano = parseFloat(prompt("Bem-Vindo, Defunto! Digite o ano que você morreu, para calcular quantos Dias de Finados você já comemorou!"));
let qntDias = 0;
qntDias = 2019 - ano;
alert("A quantidade de Dias de Finados foi: "+qntDias+".");
break;
default:
alert("Opção Inválida!");
break;
}
