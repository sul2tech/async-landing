const promesa = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Hola ok") 
        reject("error")
    }, 1000)
})

const cows = 9;

const countCows = new Promise(function(resolve, reject) {
    if(cows >= 10) {
        resolve(`We have ${cows} cows in the farm`)
    } else {
        reject("There is not cows in the farm")
    }
})

countCows.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("Fanally")
})
()
