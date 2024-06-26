import { useContext, useEffect, useState } from "react";
import BreadScrumb, { BreadScrumbItem } from "../../component/breadcrumb.component";
import { ColorSelector } from "../../component/product-card-2.component";
import { DemoLayout } from "../../layout/demo.layout";
import ProductViewLayout from "../../layout/product-view.layout";
import axios from "axios";
import { useParams } from "react-router";
import CartContext from "../../context/context";

export default function ProductView() {

    const { productId } = useParams()
    const [color, setColor] = useState("")
    const [productDetails, setProductDetails] = useState<any>(null)
    const { setCart } = useContext(CartContext);



    useEffect(() => {
        fetchProductById()
    }, []);

    async function fetchProductById() {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/product/' + productId);
            setProductDetails(response.data.data)
        } catch (e) {

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
                            <img className="w-full h-full object-contain" src={productDetails?.images[0]} alt="" />
                        </div>
                        <div className="mt-3">
                            <div className="w-[113px] h-[113px] border">
                                <img src={productDetails?.images[0]} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-2xl font-bold">{productDetails?.title}</p>
                        <hr className="my-3 bg-gray-100 text-gray-500" />
                        <p className="text-2xl font-bold">Rs <span>{Number.parseFloat(productDetails?.offered).toFixed(2)}</span> </p>
                        <hr className="my-3 bg-gray-100 text-gray-500" />
                        <ul className="font-medium">
                            <li>Brand:
                                <p className="inline-block ml-2 text-gray-600">Smile</p>
                            </li>
                            <li>Product Code:
                                <p className="inline-block ml-2 text-gray-600">{productDetails?._id.toUpperCase()}</p>
                            </li>
                            <li>Availability:
                                <p className="inline-block ml-2 text-white bg-green-300 p-1 rounded-md">In Stock</p>
                            </li>
                        </ul>
                        <div className="mt-3 bg-gray-200 border-2 p-3">
                            <p className="font-bold text-lg">Available Options</p>
                            {/* <p className="mt-1">Color : </p> */}
                            {/* <ColorSelector colors="red" setColor={setColor} /> */}
                            <button className="mt-3 text-white py-3 px-5 rounded-lg bg-blue-700" onClick={() => setCart(productId)}>Add to cart</button>
                        </div>

                    </div>
                </section>
                <section className="mt-5">
                    <p className="font-bold text-xl">Description :</p>
                    <div dangerouslySetInnerHTML={{ __html: productDetails?.description }}>
                        {/* description body */}
                        {/* {productDetails.description} */}
                    </div>
                </section>
            </ProductViewLayout>
        </>
    )
}