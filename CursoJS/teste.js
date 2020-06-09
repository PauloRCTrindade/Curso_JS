var numero = 5

function fatorial(numero){
var total = 0

for(var i = numero; numero > 0; i--){
    total = i * i-1
}
    return total
}

console.log(fatorial(numero))