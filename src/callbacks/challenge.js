const XMLHttpRequest = require("xmlHttpRequest").XMLHttpRequest

//llamado a la API

const API = "https://api.escuelajs.co/api/v1";

//Vomos a crear una function en la cual vamos a recibir la URL Y el callback y una funcion anonima

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest(); //hace una refernecia a XMLHttpRequest

    //Vamos a trabajar con los elementos que me entrega xhttp
    xhttp.open("GET", urlApi, true);
    xhttp.onreadystatechange = function(event) {

        //validamos el tipo de estado en el que se ecuentra

        /*Validamos con en si nuestra infomacion esta completada con el codigo 4*/ 
        if (xhttp.readyState === 4) {

            
            if(xhttp.status === 200) { /*Validamos el estatus sobre valor y tipo en este caso 200
            que la solicitud hazido correcta*/

                callback(null, JSON.parse(xhttp.responseText)); /*Utilizamos nuestro 
                callback  pasadonles dos valores el primero como nulo el segundo
                va hacer uan transformacion de de la informacion xhttp.responseText() vamos a recivir lo que nos entragar el servidor */
            } else { /* en nuestro segundo if vamos a dejarlo con un else
                        para hacer una logica para el manejo de la informacion cuando 
                        tengamos un error*/
                const err = new Error("Error" + urlApi);
                return callback(err, null);
            }
        }
    }
    /*ejecutamos nuestra logica */
    xhttp.send()
}

/* UNA FUNCTION QUE RECIVE EL CALLBACKS */

fetchData(`${API}/products`, function(error1, data1) {

    if(error1) return console.error(error1);

    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2) {
        if(error2) return console.error(error2);

        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });


});