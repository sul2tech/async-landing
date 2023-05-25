const fnAsincrona = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve("ESTA CORRIENDO BIEN OK"), 2000)
        : reject(new Error("Error!"));
    });
}

const otraFuncion = async () => {
    const serve = await fnAsincrona();
    console.log(serve);
    console.log("hello");
}

console.log("before")
otraFuncion();
console.log("after")