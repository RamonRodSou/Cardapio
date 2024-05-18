import IItem from "../Interface/IItem"

export default class Item implements IItem {

    image: string
    name: string
    valor: number

    constructor (image: string, name: string, valor:number){
        this.image = image
        this.name = name
        this.valor = valor
    }
}