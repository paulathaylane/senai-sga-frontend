let opcao = String (prompt("Bem vindo! Você é Administrador ou Defunto?"));
switch (opcao){

    case "Administrador":
let adm = parseFloat (prompt("Bem vindo, Administrador! Digite a quantidade de defuntos para calcular o lucro."));
let lucro = adm + 387;
alert("O lucro é:"+lucro);
    break;
    
    case "defunto":
let def = parseFloat (prompt("Bem vindo, Defunto! Digite o ano que você morreu, para calcular quantos Dias de Finados você já comemorou!"));
let dias = 2019 - def;
alert("Você já comemorou" +dias+ "de Finados"); 
    break;
    
    default:
alert("Opção inválida!");
    break;
}

