import { useEffect, useState } from "react";
import ProductViewLayout from "../../layout/product-view.layout";
import axios from "axios";
import { useParams } from "react-router";
import ProductCard from "../../component/product-card-2.component";
import BreadScrumb from "../../component/breadcrumb.component";
// import ProductCard from "../../component/product-card.component";


export default function ProductList() {

    const { categoryName, subCategory } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    },[]);

    async function fetchProducts() {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/product/${categoryName}/${subCategory}`);
            setProducts(response.data.data)
        } catch (errr) {
            console.error(errr);
        }
    }

    console.log(products)

    return (
        <>
            <ProductViewLayout>
                <div>
                    <BreadScrumb />
                </div>
                <div className="w-full mt-16">
                    {products.map((element:any) => <ProductCard productName={element.title} offered={element.offered} selling={element.selling} navigationLink={element._id} productImage={element?.images[0]} />)}
                </div>
            </ProductViewLayout>
        </>

    )
}