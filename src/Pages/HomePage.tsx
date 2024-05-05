import Category from "../components/Category/Category"
import Product from "../components/Product/Product"
import Search from "../components/Search/Search"

type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <Search/>
            <Category/>
            <Product/>
        </div>
    )
}

export default Home