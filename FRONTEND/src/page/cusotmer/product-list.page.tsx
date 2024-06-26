import { useEffect, useState } from "react";
import ProductViewLayout from "../../layout/product-view.layout";
import axios from "axios";
import { useParams } from "react-router";
import ProductCard from "../../component/product-card.component";


export default function ProductList() {

    const { categoryName, subCategory } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts()
    });

    async function fetchProducts() {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/product/${categoryName}/${subCategory}`);
            setProducts(response.data.data)
        } catch (errr) {
            console.error(errr);
        }
    }

    return (
        <>
            <ProductViewLayout>
                <div className="w-full mt-5">
                    {products.map((element) => <ProductCard />)}
                </div>
            </ProductViewLayout>
        </>

    )
}