import Header from "../components/Header"
import {Link} from "react-router-dom"

const ProductsPage = ({products}) => {


    return(<>

    <Header
        headingOne="Produkter"
        headingTwo="Höstrea i full gång!"
    />
    <ul>
        {products.map(produkt => <li>
                <Link to={"/productDetails/" + produkt.id}>{produkt.namn}</Link>
            </li>)}
    </ul>
    </>)
}

export default ProductsPage