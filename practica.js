// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

// const API = "https://api.escuelajs.co/api/v1";


// function fetchData(urlapi, callback) {

//     let xhttp = new XMLHttpRequest();

//     xhttp.open('GET', urlapi, true);

//     xhttp.onreadystatechange = function(event) {
//         if (xhttp.readyState === 4) {
//             if (xhttp.status === 200) {
//                 callback(null, JSON.parse(xhttp.responseText));
//             } else {
//                 const error = new Error("Error"+ urlapi)
//                 return callback(error, null);
//             }
//         }
//     }
//     xhttp.send()
// }


// fetchData(`${API}/products`, function(err1, data1) {
//     console.error(err1, null);
// })

// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// const API_RICK_AND_MORTY = "https://rickandmortyapi.com/api";

// function fetchData(url, callback) {

//     let xhttp = new XMLHttpRequest();

//     xhttp.open('GET', url, true);

//     xhttp.onreadystatechange = function(event) {
        
//         if (xhttp.readyState === 4) {
//             if (xhttp.status === 200) {
//                 callback(null, JSON.parse(xhttp.responseText));
//             } else {
//                 const error = new Error('Error' + url)
//                 return callback(error, null);
//             }
//         }
//     }
//     xhttp.send()
    
// }

// fetchData (`${API_RICK_AND_MORTY}/character`, function (error1, data1) {

//     if (error1) return console.error(error1);

//     fetchData(`${API_RICK_AND_MORTY}/character/${data1[0].id}`, function(error2, data2) {
//         if(error2) return console.error(error2);

//         fetchData(`${API_RICK_AND_MORTY}/location/${data2?.category?.id}`, function(error3, data3) {
//             if(error3) return console.error(error3);
//             console.log(data1[0]);
//             console.log(data2.title);
//             console.log(data3.name);
//         })
//     })
// })
    


// let x = 1;
// alert(+x);

// let apples = "2";
// let orange = "5"

// alert(apples + orange );

// alert(Number(apples) + Number(orange));

let counter = 10;
console.log(5 * counter);
counter++;