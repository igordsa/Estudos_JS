var convidados = [
    {
        nome: "Pedro",
        idade: 20,
        bebeRefrigerante: false,
        bebeCerveja: false
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
var i = 0

while (i < convidados.length) {
    console.log(convidados[i].nome, convidados[i].bebeCerveja)
    if (convidados[i].bebeCerveja) {
        comprarCerveja = true
        break
    }
    i++
}

console.log(comprarCerveja)
