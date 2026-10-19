const btnazul1 = document.getElementById("btnazul1");
const btnazul2 = document.getElementById("btnazul2");
const btnentrar = document.getElementById("btnentrar");
const btnregistrar = document.getElementById("btnregistrar");
const pergunta1 = document.getElementById("pergunta1");
const pergunta2 = document.getElementById("pergunta2");
const entrarlado = document.getElementById("entrarlado");
const registrarlado = document.getElementById("registrarlado");
const erroemail = document.querySelector(".erro-email");
const erroemail1 = document.querySelector(".erro-email1");
const errosenha = document.querySelector(".erro-senha");
const errosenha1 = document.querySelector(".erro-senha1");
const erronome = document.querySelector(".erro-nome");
const erroapelido = document.querySelector(".erro-apelido");
const errocontacto = document.querySelector(".erro-contacto");
const erroconfirm = document.querySelector(".erro-confirm");
const nome = document.getElementById("nome");
const apelido = document.getElementById("apelido");
const email = document.getElementById("email");
const email1 = document.getElementById("Email");
const senha = document.getElementById("senha");
const senha1 = document.getElementById("senha1");
const confirmar = document.getElementById("confirm");
const olho = document.querySelectorAll(".olho");
const form = document.getElementById("form");
const contacto = document.getElementById("contacto");
//funcoes dos botoes do lado azul
btnazul1.addEventListener("click", () => {
  pergunta1.classList.add("ctrlpergunta1");
  pergunta2.classList.add("ctrlpergunta2");
  registrarlado.classList.add("ctrlregistar");
  entrarlado.classList.add("ctrlentrar");
});
btnazul2.addEventListener("click", () => {
  pergunta1.classList.remove("ctrlpergunta1");
  pergunta2.classList.remove("ctrlpergunta2");
  registrarlado.classList.remove("ctrlregistar");
  entrarlado.classList.remove("ctrlentrar");
});

//validacao nativa
function invalido(campo, span, mensagen) {
  campo.classList.add("invalido");
  span.textContent = mensagen;
  campo.classList.remove("valido");
}
function valido(campo, span) {
  campo.classList.add("valido");
  campo.classList.remove("invalido");
  span.textContent = "";
}
function validarNome() {
  if (nome.validity.valueMissing) {
    invalido(nome, erronome, "Escreva o seu nome!");
    return false;
  } else if (nome.validity.tooShort) {
    invalido(nome, erronome, "O nome deve conter no minimo 3 letras");
    return false;
  } else if (nome.validity.patternMismatch) {
    invalido(nome, erronome, "so pode escrever letras e espaços!");
    return false;
  } else {
    valido(nome, erronome);
    return true;
  }
}
function validarApelido() {
  if (apelido.validity.valueMissing) {
    invalido(apelido, erroapelido, "Escreva o seu apelido!");
    return false;
  } else if (apelido.validity.tooShort) {
    invalido(apelido, erroapelido, "O Apelido deve conter no minimo 3 letras");
    return false;
  } else if (apelido.validity.patternMismatch) {
    invalido(apelido, erroapelido, "so pode escrever letras e espaços!");
    return false;
  } else {
    valido(apelido, erroapelido);
    return true;
  }
}
function validarNumber() {
  if (contacto.validity.valueMissing) {
    invalido(contacto, errocontacto, "Escreva o seu contacto!");
    return false;
  } else if (contacto.validity.patternMismatch) {
    invalido(contacto, errocontacto, "Contacto inválido");
    return false;
  } else {
    valido(contacto, errocontacto);
    return true;
  }
}

function validarEmail() {
  if (email.validity.valueMissing) {
    invalido(email, erroemail, "Escreva o seu E-mail!");
    return false;
  } else if (email.validity.patternMismatch) {
    invalido(email, erroemail, "Email inválido");
    return false;
  } else {
    valido(email, erroemail);
    return true;
  }
}
function validarEmail1() {
  if (email1.validity.valueMissing) {
    invalido(email1, erroemail1, "Escreva o seu E-mail!");
    return false;
  } else if (email1.validity.patternMismatch) {
    invalido(email1, erroemail1, "Email inválido");
    return false;
  } else {
    valido(email1, erroemail1);
    return true;
  }
}
function validarSenha() {
  if (senha.validity.valueMissing) {
    invalido(senha, errosenha, "Digite sua senha!");
    return false;
  } else if (senha.validity.tooShort) {
    invalido(senha, errosenha, "A senha deve conter no mínimo 8 caracteres!");
    return false;
  } else if (senha.validity.patternMismatch) {
    invalido(
      senha,
      errosenha,
      "A senha deve conter um número , letra Maiúscula e Minuscula!",
    );
    return false;
  } else {
    valido(senha, errosenha);
    return true;
  }
}
function validarSenha1() {
  if (senha1.validity.valueMissing) {
    invalido(senha1, errosenha1, "Digite sua senha!");
    return false;
  } else if (senha1.validity.tooShort) {
    invalido(senha1, errosenha1, "A senha deve conter no mínimo 8 caracteres!");
    return false;
  } else if (senha1.validity.patternMismatch) {
    invalido(
      senha1,
      errosenha1,
      "A senha deve conter um número , letra Maiúscula e Minuscula!",
    );
    return false;
  } else {
    valido(senha1, errosenha1);
    return true;
  }
}
function validarConfirmarSenha() {
  if (confirmar.value === "") {
    invalido(confirmar, erroconfirm, "Repita a senha!");
    return false;
  } else if (confirmar.value !== senha1.value) {
    invalido(confirmar, erroconfirm, "As senhas não conscidem!");
    return false;
  } else {
    valido(confirmar, erroconfirm);
    return true;
  }
}
//reeconfirmar a senha caso a senha seja alterada
senha1.addEventListener("input", () => {
  if (confirmar.value !== "") {
    validarConfirmarSenha();
  }
});
//chamar as validacoes caso os campos ganhem foco
apelido.addEventListener("blur", validarApelido);
nome.addEventListener("blur", validarNome);
email.addEventListener("blur", validarEmail);
email1.addEventListener("blur", validarEmail1);
senha.addEventListener("blur", validarSenha);
senha1.addEventListener("blur", validarSenha1);
confirmar.addEventListener("blur", validarConfirmarSenha);
contacto.addEventListener("blur", validarNumber);

//icone de olho
olho.forEach((olho) => {
  olho.addEventListener("click", () => {
    const input = olho.previousElementSibling; // o previousElementSibling pega o elemento anterior ao olho, que é o input de senha
    if (input.type === "password") {
      input.type = "text";
      olho.className = "fa-solid fa-eye";
    } else {
      input.type = "password";
      olho.className = "fa-solid fa-eye-slash";
    }
  });
});

// enviar formulario
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede o envio do formulário
  const nomeOk = validarNome();
  const apelidoOk = validarApelido();
  const emailOk = validarEmail();
  const email1Ok = validarEmail1();
  const senhaOk = validarSenha();
  const senha1Ok = validarSenha1();
  const confirmarOk = validarConfirmarSenha();
  const contactoOk = validarNumber();
  if (
    nomeOk === false ||
    apelidoOk === false ||
    emailOk === false ||
    email1Ok === false ||
    senhaOk === false ||
    senha1Ok === false ||
    confirmarOk === false ||
    contactoOk === false
  ) {
    return;
  }
});
