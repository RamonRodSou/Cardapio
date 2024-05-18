import React, { createContext, useState } from "react";
import Product from "../Class/Product";
import Ingredientes from "../Class/Ingredientes";

interface ProductContextType {
    data: Product[]
    setData: React.Dispatch<React.SetStateAction<Product[]>>
    
    newIngrediente: Ingredientes[]
    setNewIngrediente: React.Dispatch<React.SetStateAction<Ingredientes[]>>

    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    selectedProduct: Product
    setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>

    pageBack: boolean
    setPageBack: React.Dispatch<React.SetStateAction<boolean>>
    isSearch: boolean
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>
    allProduct: boolean
    setAllProduct: React.Dispatch<React.SetStateAction<boolean>>

    temperatura: number
    setTemperatura: React.Dispatch<React.SetStateAction<number>>
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    totalCompra: number
    setTotalCompra: React.Dispatch<React.SetStateAction<number>>

    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>

}

export const ProductContext = createContext<ProductContextType>({
    data: [],
    setData: () => {},
    newIngrediente: [],
    setNewIngrediente: () => {},

    product: {} as Product,
    setProduct: () => {},
    selectedProduct: {} as Product,
    setSelectedProduct: () => {},

    pageBack: true,
    setPageBack:() => {},
    isSearch: true,
    setIsSearch:() => {},
    allProduct: true,
    setAllProduct:() => {},

    temperatura:0,
    setTemperatura: () => {},
    count:1,
    setCount: () => {},
    totalCompra:1,
    setTotalCompra: () => {},


    search:'',
    setSearch: () =>{},

});

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [data, setData] = useState<Product[]>([])
    const [newIngrediente, setNewIngrediente] = useState<Ingredientes[]>([])

    const [product, setProduct] = useState<Product>({} as Product)
    const [selectedProduct, setSelectedProduct] = useState<Product>({} as Product)

    const [pageBack, setPageBack] = useState<boolean>(true)
    const [isSearch, setIsSearch] = useState<boolean>(true)
    const [allProduct, setAllProduct] = useState<boolean>(true)


    const [temperatura, setTemperatura] = React.useState<number>(60)
    const [count, setCount] = React.useState<number>(1)
    const [totalCompra, setTotalCompra] = useState<number>(0)


    const [search, setSearch] = React.useState<string>('')
 


    return (
        <ProductContext.Provider value={{ data, setData, pageBack, setPageBack, product, setProduct,
                 temperatura, setTemperatura, count, setCount, search, setSearch, isSearch, setIsSearch, selectedProduct, setSelectedProduct,
                 newIngrediente, setNewIngrediente, totalCompra, setTotalCompra, allProduct ,setAllProduct
                }}
        >
            {children}
        </ProductContext.Provider>
    );
};
