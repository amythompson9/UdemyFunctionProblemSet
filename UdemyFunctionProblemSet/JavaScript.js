//function isEven(num) {
//    if (num % 2 === 0) {
//        return true;
//    }
//    else {
//        return false;
//    }
//}
function isEven(num) {
    return num % 2 === 0;
}

function factorial(num) {
    //define a result variable
    var result = 1;
    //calculate facotorial and store value in result
    for (var i = 2; 1 <= num; i++) {
        result *= i;
    }
    //return the result variable
    return result;
}

function kebabToSnake(str) {
    //replace all - with _
    var newStr = str.replace(/-/g, "_");
    //return str
    return newStr;
}


