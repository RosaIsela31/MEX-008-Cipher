
window.cipher = {

  encode: (n, str) => {
    let newStr = "";
    const upperStr = str.toUpperCase();
    for(let i = 0; i < upperStr.length; i++){ 
      if(upperStr.charCodeAt(i) >= 65 && upperStr.charCodeAt(i) <= 90){
        let ascii = ((upperStr.charCodeAt(i) - 65 + n) % 26) + 65;
        let newLetter = String.fromCharCode(ascii);
        newStr += newLetter;
      }
      if(["Ñ", " ", ",", ".", ":", ";", "¿", "?", "¡", "!", "Á", "É", "Í", "Ó", "Ú", "=", "@", "#", "$", "%", "/", "(", ")", "-", "_", "+"].indexOf(upperStr[i]) > -1){
        newStr += upperStr[i];
      }
    }
    return newStr;
   },
   

  decode: (n, str) => {
   let newStr = "";
   let newPosition;
   let newLetter;
    const upperStr = str.toUpperCase();
    for(let i = 0; i < upperStr.length; i++){ 
      if(upperStr.charCodeAt(i) >= 65 && upperStr.charCodeAt(i) <= 90){
        if((upperStr.charCodeAt(i)-65 -n % 26)< 0){
         newPosition = 91 + (upperStr.charCodeAt(i)-65-n%26)
        } else {
         newPosition = 65 + (upperStr.charCodeAt(i)-65-n%26);
        }
         newLetter = String.fromCharCode(newPosition);
        newStr += newLetter;
      }
      if(["Ñ", " ", ",", ".", ":", ";", "¿", "?", "¡", "!", "Á", "É", "Í", "Ó", "Ú", "=", "@", "#", "$", "%", "/", "(", ")", "-", "_", "+"].indexOf(upperStr[i]) > -1){
        newStr += upperStr[i];
      }
    }
    return newStr;
   },
};


//----------------------------------------------------------------
//√ 
// window.cipher = {

//   encode: (n, str) => {
//     let newStr = "";
//     const upperStr = str.toUpperCase();
//     for(let i = 0; i < upperStr.length; i++){ 
//       if(upperStr[i] === " " || upperStr[i] === "Ñ" || upperStr[i] === ","){
//         newStr += upperStr[i];
//       }else{
//         let newPosition = ((upperStr.charCodeAt(i) - 65 + n) %  26) + 65;
//         let newLetter = String.fromCharCode(newPosition);
//         newStr += newLetter;
//        }
//     }
//     return newStr;
//    },
   

//   decode: (n, str) => {
//    let newStr = "";
//     const upperStr = str.toUpperCase();
//     for(let i = 0; i < upperStr.length; i++){ 
//       if(upperStr[i] === " " || upperStr[i] === "Ñ" || upperStr[i] === ","){
//         newStr += upperStr[i];
//       }else{
//         let newPosition = (upperStr.charCodeAt(i) - n % 26);
//         let newLetter = String.fromCharCode(newPosition);
//         newStr += newLetter;
//        }
//     }
//     return newStr;
//    },
// };
