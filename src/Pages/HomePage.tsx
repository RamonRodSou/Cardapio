import { useContext, useEffect } from "react"
import Category from "../components/Category/Category"
import ProductContainer from "../components/Product/Product"
import Search from "../components/Search/Search"
import { ProductContext } from "../contextApi/ProductContext"
import Product from "../Class/Product"

const Home = () => {

    const { pageBack, setPageBack, search, setSearch ,setSelectedProduct } = useContext(ProductContext)

    function handleSearch(event:any) {
        setSearch(event.target.value)
    }

    function handleSelect (product: Product):void{
        setSelectedProduct(product)
    }

    useEffect(() => {
        const isHomePage = window.location.pathname === "/";
        isHomePage ? setPageBack(!pageBack) : console.log('Já está na página home')

    }, [setPageBack])

    return (
        <div>
            <Search search={search} setSearch={handleSearch} />
            <Category />
            <ProductContainer handleSelect={handleSelect}/>
        </div>
    )
}

export default Home 