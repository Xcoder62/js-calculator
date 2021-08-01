function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    // will round to the 4th digit, any number
    // above .5 will be rounded up
    // dividion by 0 is covered.
    return (b === 0) ? "Nice Try :)" : Math.round((a/b) * 10000) / 10000
}

function operate(a, op, b){
    let result = 0;
    if (!(a === undefined) && !(b === undefined)){
        
        switch (op){
            case '+':
                console.log("Adding")
                result = add(a,b);
                console.log(result)
                break;
            case '-':
                console.log("Subtracting")
                result = subtract(a,b);
                console.log(result);
                break;
            case '*':
                console.log("Mutiplying")
                result = multiply(a,b);
                console.log(result);
                break;
            case '/':
                console.log("dividing")
                result = divide(a,b);
                console.log(result)
                break;
            default:
                console.log("Missing Number or Operator 1");
                break;
        }

    } else {
        console.log("Missing Number or Operator 2");
        
    }
    
}