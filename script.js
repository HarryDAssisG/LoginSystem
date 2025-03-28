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

