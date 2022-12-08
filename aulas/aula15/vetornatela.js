var valores = [8, 1, 7, 4, 2, 9]
/*
for (var pos = 0; pos < valores.length; pos += 1) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

for (var pos in valores) {
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}