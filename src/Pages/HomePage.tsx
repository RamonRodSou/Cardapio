import { useContext, useEffect, useState } from "react"
import Category from "../components/Category/Category"
import Product from "../components/Product/Product"
import Search from "../components/Search/Search"
import { ProductContext } from "../contextApi/ProductContext"

const Home = () => {

    const { pageBack, setPageBack, data, search, setSearch, filteredProduct, setFilteredProduct } = useContext(ProductContext)

    function handleSearch(event:any) {
        setSearch(event.target.value);
        filterProd()
    }
 
    function filterProd ():void {

        const filter = data.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredProduct(filter)

        console.log(filteredProduct)
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