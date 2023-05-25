function sum(sum1, sum2) {

    return sum1 + sum2;
}

function calc(sum1, sum2, callback) {

    return callback(sum1, sum2)
}

console.log(calc(2, 2, sum))


setTimeout(function () {
    console.log("Hola Jonathan")
}, 5000)



function Saludo (nombre) {

    console.log(`Hola  Otra vez ${nombre}`)
}

setTimeout(Saludo, 2000, "Osacar")