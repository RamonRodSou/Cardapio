import axios from "axios"

// const url: string = 'http://localhost:3000/professional'
const url:string = 'https://my-json-server.typicode.com/RamonRodSou/cardapio/professional'

export async function AdmAPIGet() {
    try {
        const response = await axios.get(url)
        console.log('Deu Certo')
        return response.data
    } catch (err) {
        console.error("Falha na requisição", err)
        throw err
    }
}