import axios from "axios"

const url: string = 'http://localhost:3000/produto'

export async function getProduct() {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (err) {
        console.error("Falha na requisição", err)
        throw err
    }
}


export async function getProductById(id: string) {
    try {
        const response = await axios.get(`${url}/${id}`);
        return response.data;
    } catch (err) {
        console.error("Falha na requisição", err);
        throw err;
    }
}