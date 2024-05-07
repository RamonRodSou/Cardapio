import { useContext, useEffect } from "react"
import Category from "../components/Category/Category"
import Product from "../components/Product/Product"
import Search from "../components/Search/Search"
import { ProductContext } from "../contextApi/ProductContext"

const Home = () => {

    const { pageBack, setPageBack, search, setSearch } = useContext(ProductContext)

    function handleSearch(event:any) {
        setSearch(event.target.value);
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
            <Product />
        </div>
    )
}

export default Home