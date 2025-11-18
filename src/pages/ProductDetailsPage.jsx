import { useParams } from "react-router-dom"

const ProductDetailsPage = ({products}) => {

    const params = useParams();
    
    console.log(params.id) //Kolla URL och se vad :id har för värde. Vi får den som en string
    
    //Hämta ut produkt vars id är samma som :id i URL:en .
    let product = products.find(produkt => produkt.id === Number(params.id));

    return(
    <div>
        <h2>Produktdetaljer</h2>
        <p><strong>Namn: </strong>{product.namn}</p>
        <p><strong>Beskrivning: </strong>{product.beskrivning}</p>
        <p><strong>Pris: </strong>{product.pris}</p>
    </div>)
}

export default ProductDetailsPage