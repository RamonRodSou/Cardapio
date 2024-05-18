import IItem from "./IItem";

export default interface IIngredientes extends IItem{
    
    id: string
    quantidade:number

}


export interface IngredientCount {
    [key: string]: number;
  }