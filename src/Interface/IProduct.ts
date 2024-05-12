export interface IProduct {

    id: string
    image: string
    tipo: string
    name: string
    valor: number
    star: number
    time: number
    temperatura: number
    count: number
    ingredientes:IIngredientes[]
    descricao: string
}

// export interface IIngredientes {
//     id: string,
//     nome: string, 
//     valor: string,
//     image: string
//     quantidade:number
// }



export interface IIngredientes extends IIngredientesQuantidade {
    id: string,
    valor: string,
    image: string
}

interface IIngredientesQuantidade {

    nome: string, 
    quantidade:number
}