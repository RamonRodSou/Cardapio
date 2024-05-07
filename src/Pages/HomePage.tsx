import { useContext, useEffect } from "react"
import Category from "../components/Category/Category"
import Product from "../components/Product/Product"
import Search from "../components/Search/Search"
import { ProductContext } from "../contextApi/ProductContext"
import { IProduct } from "../Interface/IProduct"

const Home = () => {

    const { pageBack, setPageBack, search, setSearch ,setSelectedProduct } = useContext(ProductContext)

    function handleSearch(event:any) {
        setSearch(event.target.value);
    }

    function handleSelect (product: IProduct):void{
        setSelectedProduct(product)
    }

    useEffect(() => {
        const isHomePage = window.location.pathname === "/";
        if (isHomePage) {
            setPageBack(!pageBack);
        }

    }, [setPageBack])

    return (
        <div>
            <Search search={search} setSearch={handleSearch} />
            <Category />
            <Product handleSelect={handleSelect}/>
        </div>
    )
}

export default Home