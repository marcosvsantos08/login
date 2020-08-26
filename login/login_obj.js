var objLogin = [ 
    {
        usuario: "marcos",
        senha: "123456",
        email:"marcosvsantos08@gmail.com"
    },
    
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
 function cadastrar(){
    let user=getElementById("user").value
    let pass=getElementById("pass1").value
    let pass1=getElementById("pass2").value
    let mail=getElementById("email").value
    
    for (let n=0; n < objLogin.length;n++){
        if (user==objLogin[n].usuario && mail==objLogin[n].email){
           alert(`Usuario ou email ja existem`)
        }else if(pass!==pass1){
            alert(`Verifique a senha`)
        }else{
            objLogin.usuario.push(user)
            objLogin.senha.push(pass)
            objLogin.email.push(mail)
            location.href = "file:///C:/Users/marco/OneDrive/Documentos/PROJETOS/login/login.html";
        }
 }
}