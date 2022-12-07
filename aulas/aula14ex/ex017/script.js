function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    // verificar se tem um numero na caixa
    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    }
    else {
        // capturo o valor da variavel, seto um count em 1 e deixo a caixa sem nada para limpar na proxima execucao
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c += 1
        }
    }
}