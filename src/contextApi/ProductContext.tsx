import React, { createContext, useState } from "react";
import { IProduct } from "../Interface/IProduct";

interface ProductContextType {
    data: IProduct[]
    setData: React.Dispatch<React.SetStateAction<IProduct[]>>
    product: IProduct
    setProduct: React.Dispatch<React.SetStateAction<IProduct>>
    selectedProduct: IProduct
    setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct>>

    pageBack: boolean
    setPageBack: React.Dispatch<React.SetStateAction<boolean>>
    isSearch: boolean
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>

    temperatura: number
    setTemperatura: React.Dispatch<React.SetStateAction<number>>
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>

    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>

}

export const ProductContext = createContext<ProductContextType>({
    data: [],
    setData: () => {},
    product: {} as IProduct,
    setProduct: () => {},
    selectedProduct: {} as IProduct,
    setSelectedProduct: () => {},

    pageBack: true,
    setPageBack:() => {},
    isSearch: true,
    setIsSearch:() => {},

    temperatura:0,
    setTemperatura: () => {},
    count:1,
    setCount: () => {},

    search:'',
    setSearch: () =>{},

});

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [data, setData] = useState<IProduct[]>([])
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    const [selectedProduct, setSelectedProduct] = useState<IProduct>({} as IProduct)

    const [pageBack, setPageBack] = useState<boolean>(true)
    const [isSearch, setIsSearch] = useState<boolean>(true)

    const [temperatura, setTemperatura] = React.useState<number>(60)
    const [count, setCount] = React.useState<number>(1)

    const [search, setSearch] = React.useState<string>('')



    return (
        <ProductContext.Provider value={{ data, setData, pageBack, setPageBack, product, setProduct,
                 temperatura, setTemperatura, count, setCount, search, setSearch, isSearch, setIsSearch, selectedProduct, setSelectedProduct}}
        >
            {children}
        </ProductContext.Provider>
    );
};
