import Category from "../components/Category/Category"
import NameLogo from "../components/NameLogo/NameLogo"
import Product from "../components/Product/Product"
import Search from "../components/Search/Search"


type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <NameLogo/>
            <Search/>
            <Category/>
            <Product/>
        </div>
    )
}

export default Home