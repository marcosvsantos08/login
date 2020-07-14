var objLogin = [ 
    {
        usuario: "joao",
        senha: "1234"
    },
    {
        usuario: "caio",
        senha: "senha"
    },
    {
        usuario: "bruno",
        senha: "senha123"
    },
]
 function getLogin(){
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
 
 for (i=0; i < objLogin.length;i++){
     if (usuario==objLogin[i].usuario && senha==objLogin[i].senha){
        console.log(usuario + " voce esta conectado")
        return
    }
  }
  alert("usuario ou senha incorreto!")

 }