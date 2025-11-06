// verificador de senhas

/* 
    || = ou
*/



function compararSenha() {
    let senha1 = document.getElementById("senha1").value
    let senha2 = document.getElementById("senha2").value

    let mensagem = document.getElementById("mensagem")

    if (senha1 === "" || senha2 === "") {
        mensagem.innerText = "Preencha com as duas senhas por favor !!!! ";
        mensagem.style.color = "yellow";
    }

    else if (senha1 === senha2) {
        mensagem.innerText = "Parabéns você conseguiu😀😁 ";
        mensagem.style.color = "green";
    }

    else {
        mensagem.innerText = "Por favor verifique suas senhas🤔😑";
        mensagem.style.color = "orange";
    }


}