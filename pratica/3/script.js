function verificarvelocidade(velocidade) {
    if (velocidade <= 70) {
        return "Dentro do limite de velocidade"
    } else if (velocidade >= 130) {
        return "Carteira Suspendida"
    } else {
        let pontos = velocidade - 70
        pontos /= 5
        return "Voce excedeu o limite de velocidade e foi multado em" + " " + Math.floor(pontos) + " " + "pontos."
    }
}


const velocidade = verificarvelocidade(125)
console.log(velocidade)






