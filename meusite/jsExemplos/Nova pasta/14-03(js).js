
  let qntCome = parseFloat(prompt("Quantos grãos o animal pode comer por dia?"));
  let qntEstoque = parseFloat(prompt("Quantos grãos estão disponíveis no estoque?"));

  let qntDias = qntEstoque / qntCome;

if(qntDias == null){
  alert("Sem valores");
  let qntCome = parseFloat(prompt("Quantos grãos o animal pode comer por dia?"));
  let qntEstoque = parseFloat(prompt("Quantos grãos estão disponíveis no estoque?"));
}else{
  alert("A quantidade de dias é: "+qntDias);
}


  let qntFuma = parseFloat(prompt("Quantos cigarros fuma por dia?"));
  let precoCigarro = parseFloat(prompt("Qual o valor do cigarro?"));
  let qntAnos = parseFloat(prompt("Quantos anos que fuma?"));

  let totalDias = qntAnos * 365;
  let qntGasto = totalDias * precoCigarro * qntFuma;

if(qntGasto == null){
  alert("Sem valores");
  let qntFuma = parseFloat(prompt("Quantos cigarros fuma por dia?"));
  let precoCigarro = parseFloat(prompt("Qual o valor do cigarro?"));
  let qntAnos = parseFloat(prompt("Quantos anos que fuma?"));

  let totalDias = qntAnos * 365;
  let qntGasto = totalDias * precoCigarro * qntFuma;
}else{
  alert("O prejuízo monetário é: "+qntGasto);
  let arredondado = parseFloat(qntGasto.toFixed(2));
  alert("O prejuízo monetário é: "+arredondado);
}
