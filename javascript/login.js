const btnazul1 = document.getElementById("btnazul1")
const btnazul2 = document.getElementById("btnazul2")
const pergunta1 = document.getElementById("pergunta1")
const pergunta2 = document.getElementById("pergunta2")
const entrarlado = document.getElementById("entrarlado")
const registrarlado = document.getElementById("registrarlado")
//funcoes dos botoes do lado azul
btnazul1.addEventListener("click" , ()=>{
    pergunta1.classList.add("ctrlpergunta1")
    pergunta2.classList.add("ctrlpergunta2")
    registrarlado.classList.add("ctrlregistar")
    entrarlado.classList.add("ctrlentrar")
})
btnazul2.addEventListener("click" , ()=>{
    pergunta1.classList.remove("ctrlpergunta1")
    pergunta2.classList.remove("ctrlpergunta2")
    registrarlado.classList.remove("ctrlregistar")
    entrarlado.classList.remove("ctrlentrar")
})