import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function postDATA(urlapi, data) {
    const response = fetch(urlapi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'seme-origin',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const itemNew = {

    "title": "New SHOES",
    "price": 295,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postDATA(`${API}/products`, itemNew)
    .then(response => response.json())
    .then(itemNew => console.log(itemNew))