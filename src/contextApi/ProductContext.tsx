import React, { createContext, useState } from "react";
import { IProduct } from "../Interface/IProduct";

interface ProductContextType {
    data: IProduct[];
    setData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export const ProductContext = createContext<ProductContextType>({
    data: [],
    setData: () => {}
});

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<IProduct[]>([]);

    return (
        <ProductContext.Provider value={{ data, setData }}>
            {children}
        </ProductContext.Provider>
    );
};
