  let sexo = (prompt("Digite H se for Homem e M se for Mulher"));
  if((sexo == "M") || (sexo =="H")){
  let h = parseFloat(prompt("Digite sua altura"));
    if(sexo=="H"){
      let pI = (72.7 * h) - 58;
      alert("O peso ideal é: "+pI.toFixed(2)+" quilos.");
    }else if(sexo=="M"){
      let pI = (62.1 * h) - 44.7;
      alert("O peso ideal é: "+pI.toFixed(2)+" quilos.");
  }
}else{
  alert("Sexo Inválido");
}
