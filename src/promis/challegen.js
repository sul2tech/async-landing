import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlapi) {
    return fetch(urlapi);
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products)
//     })
//     .then(() => {
//         console.log('Hola')
//     })
//     .catch(err => {
//         console.log(err)
//     });

//hacer multiple llamados........

fetchData(`${API}/products`)
    .then(response => response.json()) //Trasforma lo que estamos resiviendo a un objecto
    .then(products => {
        console.log(products);// mostramos todos los productos
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(response => {
        console.log(product.title) //mostramos el titulo de los productos que acedimos 
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name); //hacemos el llamado
    })

    .catch(err => {
        console.log(err)
    })
    .finally(() => {console.log('done')})