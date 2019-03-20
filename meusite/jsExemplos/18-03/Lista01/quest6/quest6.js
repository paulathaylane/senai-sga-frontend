let qnt = parseFloat(prompt("Informe a quantidade de maças que deseja comprar"));
let preco = 0;
if(qnt<12){
    preco = qnt*1.2;
}else{
    preco = qnt*1;
}
alert("A quantidade de Maças compradas é: "+qnt+" unidades, e o valor a pagar é: "+preco.toFixed(2)+" reais.")
