import Ingredientes from "../Class/Ingredientes"
import IItem from "./IItem"

export interface IProduct extends IItem{

    id: string
    tipo: string
    star: number
    time: number
    temperatura: number
    count: number
    ingredientes:Ingredientes[]
    descricao: string
}

