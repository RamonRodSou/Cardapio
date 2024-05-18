import IIngredientes from "../Interface/IIngredientes";
import { IProduct } from "../Interface/IProduct";
import Item from "./Item";

export default class Product extends Item implements IProduct {

    id: string
    tipo: string
    star: number
    time: number
    temperatura: number
    count: number
    ingredientes: IIngredientes[]
    descricao: string

    constructor(id: string, image: string, name:string, valor: number ,tipo: string, star: number, time: number, temperatura: number, count: number, ingredientes: [], descricao: string) {
        super(image, name, valor)
        this.id = id
        this.tipo = tipo
        this.star = star
        this.time = time
        this.temperatura = temperatura
        this.count = count
        this.ingredientes = ingredientes
        this.descricao = descricao

    }
}