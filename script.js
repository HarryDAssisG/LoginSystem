// pagina 1
function redirecionar() {
    window.location.href = "register.html";
}

// Pagina 2
function returnx() {
    window.location.href = "main.html";
}
/////////////////////////////////////////////////////////









//pagina 1
function login() {

    let e_mail = document.getElementById("e-mail").value
    let pass = document.getElementById("pass").value

    let A = ""
    let B = ""

    if(e_mail == "" || pass == ""){
        alert("Digite seu e-mail e sua senha") 
        return 
    }

    if(e_mail != A || pass != B){
        alert("Senha ou E-mail incorretos")
    }

    if (e_mail === A && pass === B){
        window.alert("Entrou")
    }
}

////// Pagina 2

 function register(){

    let name1 = document.getElementById("name1").value
    let email1 = document.getElementById("email1").value
    let email2 = document.getElementById("email2").value
    let password1 = document.getElementById("password1").value

    if (name1 == '' || email1 == '' || email2 == '' || password1 == ''){
        alert("Algo faltando")
    }
    else if(email1 !='@'){
        alert("Falta @")
    }
    else (
        alert("Cadastrado")
    )



 }
