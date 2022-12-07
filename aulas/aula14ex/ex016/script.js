function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    // verificar se a caixa esta vazia
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel contar!`
    }
    // capturando o numero da variavel
    else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        // setando o passo para 1 se o usuario deixou em 0 
        if (p <= 0) {
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }

        // contagem crescente
        if (i < f) {
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        // contagem regressiva
        else {
            for (var c = i; c >= f;c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}