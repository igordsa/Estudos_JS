var convidados = [
    {
        nome: "Pedro",
        idade: 20,
        bebeRefrigerante: false,
        bebeCerveja: true
    },
    {
        nome: "Igor",
        idade: 19,
        bebeRefrigerante: true,
        bebeCerveja: false,
    },
    {
        nome: "Rodrigo",
        idade: 19,
        bebeRefrigerante: true,
        bebeCerveja: true
    }
]

var comprarCerveja = false

console.log(convidados.length)

for (var i = 0; i < convidados.length; i++) {
    console.log(convidados[i].nome, convidados[i].bebeCerveja)
    if (convidados[i].bebeCerveja) {
        comprarCerveja = true
    }
}

/*Testes realizados com estrutura de repetição FOR*/