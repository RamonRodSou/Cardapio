import { useContext, useEffect } from "react"
import Category from "../components/Category/Category"
import Product from "../components/Product/Product"
import Search from "../components/Search/Search"
import { ProductContext } from "../contextApi/ProductContext"

const Home = () => {
    
    const { pageBack, setPageBack } = useContext(ProductContext)
    useEffect(() => {
        const isHomePage = window.location.pathname === "/";
        if (isHomePage) {
            setPageBack(!pageBack);
        }
    }, [setPageBack])

    return (
        <div>
            <Search/>
            <Category/>
            <Product/>
        </div>
    )
}

export default Home