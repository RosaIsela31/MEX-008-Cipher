//________________________________________________________________
//
const inputTextDescifrar = document.getElementById("mensajeDescifrar");
const buttonDescifrar = document.getElementById("btn-descifrando");
const parrafoDivDescifrar = document.getElementById("mensaje-descifrado");
const offsetDesc = document.getElementById("offset");

buttonDescifrar.addEventListener("click", () => {
  if(inputTextDescifrar.value === " "){
    alert("Ingresa el texto que quieras descifrar");
  } 
    // window.cipher.encode(2 ,inputText.value)
    parrafoDivDescifrar.innerHTML += window.cipher.decode(parseInt(offsetDesc.value),inputTextDescifrar.value);
    // e.preventDefault();
})
//----------------------------------------------------------------
//Botón para limpiar 
const buttonClear = document.getElementById("clear");

const cleanTextarea = () => {
  document.getElementById("task-formDesc").reset();
  let blankSpace = document.getElementById("mensaje-descifrado");
  blankSpace.innerHTML = "";
}

buttonClear.addEventListener("click", cleanTextarea);
//----------------------------------------------------------------
