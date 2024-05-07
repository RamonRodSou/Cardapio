import React, { createContext, useState } from "react";
import { IProduct } from "../Interface/IProduct";

interface ProductContextType {
    data: IProduct[]
    setData: React.Dispatch<React.SetStateAction<IProduct[]>>
    pageBack: boolean
    setPageBack: React.Dispatch<React.SetStateAction<boolean>>
    product: IProduct
    setProduct: React.Dispatch<React.SetStateAction<IProduct>>
    temperatura: number
    setTemperatura: React.Dispatch<React.SetStateAction<number>>
    count: number
    setCount: React.Dispatch<React.SetStateAction<number>>
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>
    isSearch: boolean
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProductContext = createContext<ProductContextType>({
    data: [],
    setData: () => {},
    pageBack: true,
    setPageBack:() => {},
    product: {} as IProduct,
    setProduct: () => {},
    temperatura:0,
    setTemperatura: () => {},
    count:1,
    setCount: () => {},
    search:'',
    setSearch: () =>{},
    isSearch: true,
    setIsSearch:() => {},
});

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<IProduct[]>([]);
    const [pageBack, setPageBack] = useState<boolean>(true)
    const [product, setProduct] = useState<IProduct>({} as IProduct);
    const [temperatura, setTemperatura] = React.useState<number>(60)
    const [count, setCount] = React.useState<number>(1)
    const [search, setSearch] = React.useState<string>('')
    const [isSearch, setIsSearch] = useState<boolean>(true)



    return (
        <ProductContext.Provider value={{ data, setData, pageBack, setPageBack, product, setProduct,
                 temperatura, setTemperatura, count, setCount, search, setSearch, isSearch, setIsSearch}}
        >
            {children}
        </ProductContext.Provider>
    );
};
