// import axios from 'axios';

// const API_URL = 'https://fakestoreapi.com/products'

// const fetchData = async (url) =>{
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }
// export const fetchProducts = (param = "all" ) => {
//     if(param === "all") return fetchData(API_URL);
//     return fetchData(`${API_URL}/category/${param}`);
// }


// const SERVER_URL = 'https://gada-electronics.up.railway.app';

// export const getProducts = async () => {
//     const response = await axios.get(SERVER_URL + '/products/all');

//     console.log(response.data);
//     if (response.status === 200) {
//         return response.data;
//     } else {
//         return null;
//     }
// }

const API_URL = 'https://gada-electronics.up.railway.app/orders/user/'

const fetchData = async (url) =>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export const fetchProducts = (userID, param = "all" ) => {
    if(param === "all") return fetchData(API_URL + userID);
    return fetchData(`${API_URL}/category/${param}`);
}

