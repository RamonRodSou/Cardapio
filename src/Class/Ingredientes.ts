import IIngredientes from "../Interface/IIngredientes";
import Item from "./Item";


export default class Ingredientes extends Item implements IIngredientes {

    id: string
    quantidade: number

    constructor(id: string, quantidade: number, image:string, name:string, valor:number) {
        super(image, name, valor)

        this.id = id
        this.quantidade = quantidade
    }
}