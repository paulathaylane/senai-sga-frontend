let area = parseFloat(prompt("Insira o tamanho em metros quadrados da área a ser pintada: "));
let qntTinta = area * 6;
let qntLatas = qntTinta / 18;
let precoLatas = qntLatas * 80;
let qntGaloes = qntTinta / 3.6;
let precoGaloes = qntGaloes * 25;

alert("A quantidade de latas necessárias é "+qntLatas.toFixed(0)+" e o valor é: "+precoLatas+" reais.");
alert("A quantidade de latas necessárias é "+qntGaloes.toFixed(0)+" e o valor é: "+precoGaloes+" reais.");


let qntLata2 = 0;
let qntGaloes2 = 0;
let qntTinta2 = 0;
let Fim1 = 0;
qntTinta2 = qntTinta;
do {
   if(qntTinta2 >= 18){
      qntTinta2 = qntTinta2 - 18;
      qntLata2++;
      if(qntTinta2 >= 3.6){
      qntTinta2 = qntTinta2 - 3.6;
      qntGaloes2++;
      }
   }else{
      Fim1 = 1;
   }
} while (Fim1 != 1);

   let valor2 = ((qntLata2*80) + (qntGaloes2*25));

   let qntLata3 = 0;
   let qntGaloes3 = 0;
   let qntTinta3 = 0;
   let Fim2 = 0;
   qntTinta3 = qntTinta;
do {
   if(qntTinta3 >= 3.6){
      qntTinta3 = qntTinta3 - 3.6;
      qntGaloes3 = qntGaloes3+1;
      alert("qntGaloes: "+qntGaloes3);
      if(qntTinta3 >= 18){
      qntTinta3 = qntTinta3 - 18;
      qntLata3++;
      }
   }else{
      Fim2 = 1;
   }
} while (Fim2 != 1);

   let valor3 = ((qntLata3*80) + (qntGaloes3*25));
   alert("valor3"+valor3);

if(valor2 <= valor3){
   valor2 = (valor2+(valor2*0.01));
   alert("O valor a pagar é: "+valor2.toFixed(0)+" reais por "+qntLata2.toFixed(0)+" Latas de 18 litros e "+qntGaloes2.toFixed(0)+" Galões de 3.6 litros.");
}else if(valor3 < valor2){
   valor3 = (valor3+(valor3*0.01));
   alert("O valor a pagar é: "+valor3.toFixed(0)+" reais por "+qntLata3.toFixed(0)+" Latas de 18 litros e "+qntGaloes3.toFixed(0)+" Galões de 3.6 litros.");
}
