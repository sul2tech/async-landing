// Function permite llamar o parar la solicitudes que queramos 


function* genrateSequence() {
    yield 1,
    yield 2,
    yield 3
    return 4
}


let generator = genrateSequence();

let one = generator.next();
let two = generator.next();

console.log('Este es el 1: ',JSON.stringify(one))
console.log('Este es el 2: ',JSON.stringify(two))
console.log('Este es el 3: ',JSON.stringify(one))
console.log('Este es el 4: ',JSON.stringify(one))
console.log(JSON.stringify(one))