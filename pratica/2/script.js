function fizzBuzz(entrada) {
    if (typeof entrada !== "number") {
        return "nao e um numero"
    } else if (entrada % 3 === 0 && entrada % 5 === 0) {
        return "fizzBuzz"
    } else if (entrada % 5 === 0) {
        return "Buzz"
    } else if (entrada % 3 === 0) {
        return "fizz"
    }
    return entrada
}

const resultado = fizzBuzz(11);
console.log(resultado)
