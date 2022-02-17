let subButton = document.getElementById("button");
subButton.addEventListener('click', validarSenha, false);

function validarSenha() {
    let entrada = document.getElementById("senha").value;
    let entradaArray = entrada.split('');

    // Validação da quantidade dos caracteres

    if (entradaArray.length >= 6) {
        document.getElementById('a').style.color = '#3498db';
    }

    else if (entradaArray.length == 5) {
        alert("Senha inválida! Ainda falta 1 caractere");
        document.getElementById('a').style.color = '#3498db';
    }

    else {
        alert("Senha inválida! Ainda faltam " + (6 - entradaArray.length) + " caracteres");
        document.getElementById('a').style.color = '#3498db';
    }

    // Validar numero

    let numeros = ["0","1","2","3","4","5","6","7","8","9"]
    let temNumero = numeros.some(r=> entradaArray.indexOf(r) > 0);

    if (temNumero == true) {
        document.getElementById('b').style.color = '#3498db';
    }

    else {
        document.getElementById('b').style.color = 'rgb(219, 102, 102';
    }

    // Validação das letras minusculas

    let minusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let temMinuscula = minusculas.some(r=> entradaArray.indexOf(r) > 0);

    if (temMinuscula == true) {
        document.getElementById('c').style.color = '#3498db';
    }

    else {
        document.getElementById('c').style.color = 'rgb(219, 102, 102';
    }

    // Validação das letras maiusculas

    let maiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let temMaiuscula = maiusculas.some(r=> entradaArray.indexOf(r) > 0);

    if (temMaiuscula == true) {
        document.getElementById('d').style.color = '#3498db';
    }

    else {
        document.getElementById('d').style.color = 'rgb(219, 102, 102';
    }

    // Validação dos caracteres especiais

    let caracteresEspeciais = ["!", "@", "#", "$", "%","^", "&", "*", "(", ")", "-", "+"]
    let temCaractereEspecial = caracteresEspeciais.some(r=> entradaArray.indexOf(r) > 0);

    if (temCaractereEspecial == true) {
        document.getElementById('e').style.color = '#3498db';
    }

    else {
        document.getElementById('e').style.color = 'rgb(219, 102, 102';
    }

};

