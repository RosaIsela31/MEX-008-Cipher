window.cipher = {

  encode: (n, str) => {
    let newStr = "";
    const upperStr = str.toUpperCase();
    for(let i = 0; i < upperStr.length; i++){ 
      if(upperStr[i] === " " || upperStr[i] === "Ñ" || upperStr[i] === ","){
        newStr += upperStr[i];
      }else{
        let newPosition = ((upperStr.charCodeAt(i) - 65 + n) %  26) + 65;
        let newLetter = String.fromCharCode(newPosition);
        newStr += newLetter;
       }
    }
    return newStr;
   },
   

  decode: (n, str) => {
   let newStr = "";
    const upperStr = str.toUpperCase();
    for(let i = 0; i < upperStr.length; i++){ 
      if(upperStr[i] === " " || upperStr[i] === "Ñ" || upperStr[i] === ","){
        newStr += upperStr[i];
      }else{
        let newPosition = (upperStr.charCodeAt(i) - n % 26);
        let newLetter = String.fromCharCode(newPosition);
        newStr += newLetter;
       }
    }
    return newStr;
   },
};
