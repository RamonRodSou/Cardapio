export interface IItem {

    image: string
    name: string
    valor: number
}

export interface IProduct extends IItem{

    id: string
    tipo: string
    star: number
    time: number
    temperatura: number
    count: number
    ingredientes:IIngredientes[]
    descricao: string
}

export interface IIngredientes extends IItem{
    
    id: string
    quantidade:number

}


export interface IngredientCount {
    [key: string]: number;
  }