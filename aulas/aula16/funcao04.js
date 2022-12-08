function fatorial(num) {
    var fat = 1
    for (var count = num; count > 1 ; count -=1) {
        fat *= count
    }
    return fat
}

console.log(fatorial(5))