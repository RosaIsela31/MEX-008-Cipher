window.cipher = {

  encode: (str, n) => {
    let newStr = "";
    const upperStr = str.toUpperCase();
    console.log(upperStr)
    for(let i = 0; i < upperStr.length; i++){ 
      if(upperStr[i] === " " || upperStr[i] === "Ñ" || upperStr[i] === ","){
        newStr += upperStr[i];
      }else{
        newPosition = ((upperStr.charCodeAt(i) - 65 + n) %  26) + 65;
        newLetter = String.fromCharCode(newPosition);
        newStr += newLetter;
       }
    }
    return newStr;
   },
   

  decode: (str, n) => {
   let newStr = "";
    const upperStr = str.toUpperCase();
    for(let i = 0; i < upperStr.length; i++){ 
      if(upperStr[i] === " " || upperStr[i] === "Ñ" || upperStr[i] === ","){
        newStr += upperStr[i];
      }else{
        newPosition = (upperStr.charCodeAt(i) - n % 26);
        newLetter = String.fromCharCode(newPosition);
        newStr += newLetter;
       }
    }
    return newStr;
   },
};
