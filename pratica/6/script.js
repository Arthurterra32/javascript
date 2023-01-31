function somar(limite) {
    let multde3 = 0;
    let multde5 = 0;
    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0) {
            multde3 += i
        }
        if (i % 5 === 0) {
            multde5 += i
        }
    }
    console.log(multde3 + multde5)
}
   
somar(10)