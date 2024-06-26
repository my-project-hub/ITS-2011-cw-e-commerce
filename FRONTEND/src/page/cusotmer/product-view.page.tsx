import { useEffect, useState } from "react";
import BreadScrumb, { BreadScrumbItem } from "../../component/breadcrumb.component";
import { ColorSelector } from "../../component/product-card-2.component";
import { DemoLayout } from "../../layout/demo.layout";
import ProductViewLayout from "../../layout/product-view.layout";
import axios from "axios";
import { useParams } from "react-router";

export default function ProductView() {

    const {productId} = useParams()
    const [color,setColor] = useState("")
    const [productDetails,setProductDetails]= useState(null)


    useEffect(() => {
        fetchProductById()
    },[]);

    async function fetchProductById(){
        try{
            const response = await axios.get('http://localhost:5000/api/v1/product/'+productId);
            setProductDetails(response.data.data)
        }catch(e){

        }
    }

    return (
        <>
            <ProductViewLayout>
                <BreadScrumb>
                    {/* <BreadScrumbItem name="a" routePath="/home" /> */}
                </BreadScrumb>
                <section className="mt-4 flex gap-5">
                    <div>
                        <div className="border w-[543px] h-[543px]">
                            <img className="w-full h-full" src="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0050-0-315x315.jpg" alt="" />
                        </div>
                        <div className="mt-3">
                            <div className="w-[113px] h-[113px] border">
                                <img src="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0050-0-315x315.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-2xl font-bold">Girld Lehenga Choli</p>
                        <hr className="my-3 bg-gray-100 text-gray-500"/>
                        <p className="text-2xl font-bold">Rs<span>1500.00</span> </p>
                        <hr className="my-3 bg-gray-100 text-gray-500"/>
                        <ul className="font-medium">
                            <li>Brand:
                                <p className="inline-block ml-2 text-gray-600">Smile</p>
                            </li>
                            <li>Product Code:
                                <p className="inline-block ml-2 text-gray-600">B07GLJP86C</p>
                            </li>
                            <li>Availability:
                                <p className="inline-block ml-2 text-white bg-green-300 p-1 rounded-md">In Stock</p>
                            </li>
                        </ul>
                        <div className="mt-3 bg-gray-200 border-2 p-3">
                            <p className="font-bold text-lg">Available Options</p>
                            <p className="mt-1">Color : </p>
                            <ColorSelector colors="red" setColor={setColor} />
                            <button className="mt-3 text-white py-3 px-5 rounded-lg bg-blue-700">Buy</button>
                        </div>

                    </div>
                </section>
            </ProductViewLayout>
        </>
    )
}