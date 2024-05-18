const precoCombustivel = 7.50
const KmPorLitros = 12
const distanciaEmKm = 100

const litrosConsumidos = distanciaEmKm / KmPorLitros
const valorGasto = litrosConsumidos * precoCombustivel

console.log(valorGasto)