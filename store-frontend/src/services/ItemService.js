const axios = require('axios');

const cart = [];

export async function getAllItems() {
    const response = await axios.get('/api/items');
    return response.data;
}

export async function createItem(data) {
    const response = await axios.post(`/api/item`, { item: data });
    return response.data;
}

export function addItem(data) {
    cart.push(data)
}

export function getCart() {
    console.log('cart::', cart);
    return cart;
}
