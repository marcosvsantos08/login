var objLogin = [ 
    {
        usuario: "marcos",
        senha: "123456",
        email:"marcosvsantos08@gmail.com"
    },
    {
        usuario:"adm",
        senha:"adm123",
        email:"adm@adm.com"
    }
]

 function getLogin(){
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
 
 for (i=0; i < objLogin.length;i++){
     if (usuario==objLogin[i].usuario && senha==objLogin[i].senha){
        alert(usuario + " voce esta conectado")
        return
    }
  }
  alert("usuario ou senha incorreto!")
 }
//  Cadastro de usuario
 let user = document.getElementById("user");
 let pass = document.getElementById("pass1");
 let pas1 = document.getElementById("pass2");
 let mail = document.getElementById("email");
 
 function Person(user, pass,mail) {
     this.usuario = user;
     this.senha = pass;
     this.email = mail;
     
   }
 
 function cadastrar(){
 
     
     var user1 = new Person(user.value, pass.value, mail.value )
     objLogin.push(user1)
 
     alert(Object.values(objLogin[objLogin.length-1]))
 
 }