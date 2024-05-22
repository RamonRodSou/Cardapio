import Ingredientes from "../Class/Ingredientes";
import Product from "../Class/Product";

export default interface CartItem {
    cartId: string;
    produto: Product;
    ingredientes: Ingredientes[];
  }