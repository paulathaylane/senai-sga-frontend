let genero = String(prompt("Genero"));
switch(genero){
  case "Homem":
    document.bgColor='green';
    break;
  case "Mulher":
    document.bgColor='red';
    break;
  default:
    alert("Opção Inválida");
    break;
}
