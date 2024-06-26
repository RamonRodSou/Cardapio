import axios from "axios"

// const url: string = 'http://localhost:3000/user'
const url:string = 'https://my-json-server.typicode.com/RamonRodSou/cardapio/user'

export async function AdmAPIGet() {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (err) {
        console.error("Falha na requisição", err)
        throw err
    }
}