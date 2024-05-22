import Ingredientes from "./Ingredientes";
import Product from "./Product";

export default class CartItem {

        cartId: string
        produto: Product
        ingredientes: Ingredientes[]

        constructor(cartId: string, product: Product, ingredientes: []){

            this.cartId = cartId
            this.produto = product
            this.ingredientes = ingredientes
        }
      
}