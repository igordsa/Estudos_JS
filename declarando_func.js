function imc(altura, peso) {
    return peso / (altura * altura)
}

var pessoas = [
    {
        nome: 'Igor',
        altura: 1.83,
        peso: 78
    },
    {
        nome: 'Rodrigo',
        altura: 1.90,
        peso: 67
    },
    {
        nome: 'Vitor',
        altura: 1.56,
        peso
    }
]

for (var pessoa of pessoas) {
    var resultado = imc(pessoa.altura, pessoa.peso)

    console.log(pessoa.nome, resultado)
}