import { useContext, useEffect } from "react"
import Category from "../components/Category/Category"
import ProductContainer from "../components/Product/Product"
import Search from "../components/Search/Search"
import { ProductContext } from "../contextApi/ProductContext"
import Product from "../Class/Product"
import iconBag from '../assets/img/iconBag.png'
import { Link } from "react-router-dom"
import { Box } from "@mui/material"

const Home = () => {

    const { pageBack, setPageBack, setSearch, setSelectedProduct, bag ,setAllProduct } = useContext(ProductContext)

    function handleSearch(event: any): void {
        setSearch(event.target.value) 
    }

    function handleSelect(product: Product): void {
        setSelectedProduct(product)
    }

    useEffect(() => {
        const isHomePage = window.location.pathname === "/";
        isHomePage ? setPageBack(!pageBack) : console.log('Já está na página home')
        setAllProduct(true)
        setSearch('')

    }, [setPageBack, ])

    return (
        <div>
            { bag.length === 0 ? <></>
                :
                (
                    <Box display={'flex'} margin={'0 .5rem'}>
                        <Link to={'/produto/bag'}>
                            <img src={iconBag} alt='Icone para voltar a página inícial' />
                        </Link>
                    </Box>
                )
            }
            <Search setSearch={handleSearch} />
            <Category />
            <ProductContainer handleSelect={handleSelect} />
        </div>
    )
}

export default Home 