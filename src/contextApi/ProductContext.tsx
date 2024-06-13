import React, { createContext, useState } from "react"
import Product from "../Class/Product"
import Ingredientes from "../Class/Ingredientes"
import CartItem from "../Class/CartItem"

export type dadosUser = {

  name: string
  phone: number | undefined
  obs: string
}

interface ProductContextType {
  data: Product[]
  setData: React.Dispatch<React.SetStateAction<Product[]>>
  newIngrediente: Ingredientes[]
  setNewIngrediente: React.Dispatch<React.SetStateAction<Ingredientes[]>>
  bag: CartItem[]
  setBag: React.Dispatch<React.SetStateAction<CartItem[]>>

  dadosClient: dadosUser
  setDadosClient: React.Dispatch<React.SetStateAction<dadosUser>>

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
  submitCount: number
  setSubmitCount: React.Dispatch<React.SetStateAction<number>>

  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  totalNaTelaString: string
  setTotalNaTelaString: React.Dispatch<React.SetStateAction<string>>
}

export const ProductContext = createContext<ProductContextType>({
  data: [],
  setData: () => { },
  newIngrediente: [],
  setNewIngrediente: () => { },
  bag: [],
  setBag: () => { },
  dadosClient: {
    name: '', phone: undefined, obs: ''
  },
  setDadosClient: () => { },


  product: {} as Product,
  setProduct: () => { },
  selectedProduct: {} as Product,
  setSelectedProduct: () => { },

  pageBack: true,
  setPageBack: () => { },
  isSearch: true,
  setIsSearch: () => { },
  allProduct: true,
  setAllProduct: () => { },

  temperatura: 0,
  setTemperatura: () => { },
  count: 1,
  setCount: () => { },
  totalCompra: 1,
  setTotalCompra: () => { },
  submitCount: 1, 
  setSubmitCount:() => { },

  search: '',
  setSearch: () => { },
  totalNaTelaString: '',
  setTotalNaTelaString: () => { },
})



export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<Product[]>([])
  const [newIngrediente, setNewIngrediente] = useState<Ingredientes[]>([])
  const [bag, setBag] = useState<CartItem[]>([])
  const [dadosClient, setDadosClient] = useState<dadosUser>({name: '', phone: undefined, obs: ''})

  const [product, setProduct] = useState<Product>({} as Product)
  const [selectedProduct, setSelectedProduct] = useState<Product>({} as Product)

  const [pageBack, setPageBack] = useState<boolean>(true)
  const [isSearch, setIsSearch] = useState<boolean>(true)
  const [allProduct, setAllProduct] = useState<boolean>(true)

  const [temperatura, setTemperatura] = useState<number>(60)
  const [count, setCount] = useState<number>(1)
  const [totalCompra, setTotalCompra] = useState<number>(0)
  const [submitCount, setSubmitCount] = useState<number>(1)


  const [search, setSearch] = useState<string>('')
  const [totalNaTelaString, setTotalNaTelaString] = useState<string>('')


  return (
    <ProductContext.Provider value={{
      data, setData, pageBack, setPageBack, product, setProduct,
      temperatura, setTemperatura, count, setCount, search, setSearch, isSearch, setIsSearch, selectedProduct, setSelectedProduct,
      newIngrediente, setNewIngrediente, totalCompra, setTotalCompra, allProduct, setAllProduct, bag, setBag, totalNaTelaString, setTotalNaTelaString,
      dadosClient, setDadosClient, submitCount, setSubmitCount
    }}>
      {children}
    </ProductContext.Provider>
  )
}
