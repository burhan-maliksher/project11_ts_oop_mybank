export function stringValidation(input:string){
    if (input=="" || Number(input)) {
      return "invalid input";
    }
    return true;
  }

export function numberValidation(input:string){
    if (input!="" && Number(input) && input.length<15) {
        return true;
    }else{
      return "invalid input";
    }
}

export function ageValidation(input:string){
    if (input!="" && Number(input) && input.length<4 ) {
        return true;
    }else{
      return "invalid input";
    }
}

export function amountValidation(input:string){
  if (input!="" && Number(input) ) {
      return true;
  }else{
    return "invalid input";
  }
}
