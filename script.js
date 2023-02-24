function submit() {
    if (document.querySelector("#news .left div .form .email").value != "") {
        alert("E-mail enviado com sucesso!")
        document.querySelector("#news .left div .form .email").value = ""
    } else {
        alert("E-mail inválido")
    }
}
