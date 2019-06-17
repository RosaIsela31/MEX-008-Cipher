//_____________________________________________________________

// let encriptar = document.getElementById("text-cifrado").value.addEventListener("click", encode);

// let textValue = document.getElementById("text-cifrado").value; 

// let encrypt = document.addEventListener("click", function(){})
//______________________________________________________________


// 1. tengo que obtener el valor del input type text con getElementById
// 2. tengo que agregar un addEventListener, que al dar click en el botón de cifrar me traiga el valor del input, aplique la función encode y me regrese el valor en pantalla con innerHTML

//jhon
// const buttonCifrar = document.getElementById("btn-cifrando");

//---------------------------------------------------------------
//Santi
// //Apunta al texto ingresado en el input
// const mensajeInput = document.querySelector('#mensaje');
// //Selecciona todo el form (Va a escuchar el evento submit)
// const form = document.getElementById("task-form");
// //Aqui se imprimira lo que contenga el input al dar click en submit
// const parrafo = document.getElementById("mensaje-cifrado");

// //Escuchamos el evento submit en TODO el FORM
// form.addEventListener('submit', buttonCifrar);

// //El parametro e representa el evento que va a ocurrir, en este caso submit
// function buttonCifrar(e){
//   // console.log("click") Solo era para probar que ocurriera algo despues del submit

//   //Se asegura de que se ingrese un mensaje
//   if(mensajeInput.value === '') {
//     alert('Agrega un mensaje');
//   }
//   //console.log(mensajeInput.value) solo para probar el contenido del input al dar submit

//   //ingresamos el valor del input al dar submit en el div que seteamos para mostrar el mensaje (parrafo)
//   parrafo.innerHTML = mensajeInput.value;

//   //Creo que previene que la pagina se actualice despuesde dar submit
//   e.preventDefault()
// }

//---------------------------------------------------------------

// buttonCifrar.addEventListener("click", (e) => {
//   console.log(form.value)
//   // parrafo.innerHTML = inputText.value;
//   console.log("click")
//   e.preventDefault();
// });

// function addParrafo(){
// }




// buttonCifrar.addEventListener("click", addParrafo)
// console.log("conect")
// function addParrafo (e){
//   parrafo.innerHTML = inputText.value;

//   e.preventDefault();
  // alert("yei");
// }

// buttonCifrar.addEventListener("click", () => {
//      window.cipher.encode(2 ,inputText.value)
// })

//let inputText = localStorage.getItem("input");

//let btn-


//----------------------------------------------------------------
//Intentos cifrar √

const inputText = document.getElementById("mensaje");
const buttonCifrar = document.getElementById("btn-cifrando");
const parrafoDiv = document.getElementById("mensaje-cifrado");
const offset = document.getElementById("offset-encriptar");

buttonCifrar.addEventListener("click", () => {
  if(inputText.value === " "){
    alert("Ingresa un mensaje");
  } 
    // window.cipher.encode(2 ,inputText.value)
    parrafoDiv.innerHTML += window.cipher.encode(parseInt(offset.value),inputText.value);
    // e.preventDefault();
})

//-------------------------------------------------------------
// Descifrar
const formDescifrar = document.getElementById("task-formDesc");
const inputTextDescifrar = document.getElementById("mensajeDescifrar");
const buttonDescifrar = document.getElementById("btn-descifrando");
const parrafoDivDescifrar = document.getElementById("mensaje-descifrado");
const offsetDesc = document.getElementById("offset");

inputTextDescifrar.addEventListener("click", () => {
  if(inputTextDescifrar.value === " "){
    alert("Ingresa un mensaje");
  } 
    // window.cipher.encode(2 ,inputText.value)
    parrafoDivDescifrar.innerHTML += window.cipher.decode(offsetDesc.value,inputTextDescifrar.value);
    // e.preventDefault();
  
})

