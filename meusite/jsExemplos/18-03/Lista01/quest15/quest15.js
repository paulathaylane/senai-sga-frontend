let Fim = 0;
do{
let senha1 = String(prompt("Insira a senha"));
let senha2 = String(prompt("Confirme a senha"));
if(senha1 == senha2){
  alert("Cadastro Realizado!");
  Fim = 1;
}else{
  alert("As senhas estão incorretas!");
}
} while (Fim != 1);
