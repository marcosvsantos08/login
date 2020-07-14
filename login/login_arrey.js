var user = ['joao','caio','bruno'];
var pass = ['1234','senha','senha123'];
 
 function getLogin(){
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
 
 for (i=0; i < 3;i++){
     if (usuario==user[i] && senha==pass[i]){
        alert(usuario + " voce esta conectado")
        return
    }
  }
  alert("usuario ou senha incorreto!")

 }