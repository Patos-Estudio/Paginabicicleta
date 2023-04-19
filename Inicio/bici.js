function login_princi(){
    window.location.href = "../login/login_princi.html"
}

const nombre = document.getElementById("name")
const mail = document.getElementById("mail")
const contra = document.getElementById("contra")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += "El nombre no es valido <br>"
        entrar = true
    }
    if(!regexEmail.test(mail.value)){
        warnings += "El correo no es valido <br>"
        entrar = true
    }
    if(!regexp_password.test(contra.value)){
        warnings += "El contraseña no es valida <br>"
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})