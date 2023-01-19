export function stringValidation(input) {
    if (input == "" || Number(input)) {
        return "invalid input";
    }
    return true;
}
export function numberValidation(input) {
    if (input != "" && Number(input) && input.length < 15) {
        return true;
    }
    else {
        return "invalid input";
    }
}
export function ageValidation(input) {
    if (input != "" && Number(input) && input.length < 4) {
        return true;
    }
    else {
        return "invalid input";
    }
}
export function amountValidation(input) {
    if (input != "" && Number(input)) {
        return true;
    }
    else {
        return "invalid input";
    }
}
