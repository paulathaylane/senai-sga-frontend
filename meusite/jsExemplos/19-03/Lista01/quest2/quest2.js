alert("Bem Vindo!");

let produto = String(prompt("Escolha o Produto!\n(1)Chocolate\n(2)Biscoito\n(3)Salgado"));
let preco = 0;
let troco = 0;
let pag = 0;
let fim = 1;
let fim2 = 1;
do{
  switch(produto){
    case "1":
      preco = 4.50;
      break;
    case "2":
      preco = 2.00;
      break;
    case "3":
      preco = 2.50;
      break;
    default:
    alert("Opção Inválida");
    fim = 0;
    break;
  }
}while(fim !=1);

alert("O preço do pedido é: "+preco+" reais.");

do{
  pag = parseFloat(prompt("Qual o valor Inserido?"));
    if(pag >= preco){
      troco = pag - preco;
      alert("O troco é: "+troco+" reais.");
      fim2 = 0;
    }else{
      alert("O valor inserido não é suficiente para pagar!");
    }
}while(fim !=1);
