// import { Carousel } from "@material-tailwind/react";
// import CusotmerLayout from "../../layout/cusotmer.layout";
import { useId, useState } from "react";
import { DemoLayout } from "../../layout/demo.layout";
import ProductCard from "../../component/product-card-2.component";
import { Link, redirect, useNavigate } from "react-router-dom";
import { footWearNavList, kidsNavList, menNavList, womenNavList } from "../../assets/navigation.list";
import { authorization } from "../../util/authorization";

const categoreyImages: string[] = [
    "https://www.ecomdeveloper.com/demo/image/cache/catalog/category/1-180x180.png",
    "https://www.ecomdeveloper.com/demo/image/cache/catalog/category/2-180x180.png",
    "https://www.ecomdeveloper.com/demo/image/cache/catalog/category/3-180x180.png",
    "https://www.ecomdeveloper.com/demo/image/cache/catalog/category/1-180x180.png"

];

const buttonSlectedStyle = "border-2 border-dashed border-[#9c4399] rounded-lg"

export default function CustomerHome() {

    
    const navigate = useNavigate();

    if(!authorization()){
        navigate({pathname:"/login"})
    }

    const btnId = useId()
    const [topProduct, setTopProduct] = useState(btnId + "-featured")


    return (
        <>
            {/* <CusotmerLayout>
                <div>
                    <img src="https://www.thilakawardhana.com/wp-content/uploads/2023/04/Cover-Talalla-scaled.jpg" alt="" />
                </div>
            </CusotmerLayout> */}

            <>
                <DemoLayout>
                    <section className="flex justify-between mt-5">
                        {/* category listed card */}
                        <CategoreyCard subCategory={womenNavList} mainCategory="Women" image={categoreyImages[0]} />
                        <CategoreyCard subCategory={menNavList} mainCategory="Men" image={categoreyImages[1]} />
                        <CategoreyCard subCategory={kidsNavList} mainCategory="Kids" image={categoreyImages[2]} />
                        <CategoreyCard subCategory={footWearNavList} mainCategory="Footwear" image={categoreyImages[3]} />
                    </section>

                    <section className="">
                        {/* website and company features */}

                    </section>
                    <hr className="my-5" />
                    <section className="mt-5">
                        {/* Top Products */}
                        <h4 className="font-medium text-3xl text-center">Top Products</h4>
                        <div className="gap-3 flex justify-center mt-5">
                            {/* add shared prefix id for below 3 buttons */}
                            <button id={btnId + "-featured"} className={` text-lg p-2 border-2 ${topProduct === btnId + "-featured" ? buttonSlectedStyle : 'border-transparent'}`} onClick={(e: any) => setTopProduct(e.target.id)}>Featured</button>
                            <button id={btnId + "-bestSeller"} className={`text-lg p-2 border-2  ${topProduct === btnId + "-bestSeller" ? buttonSlectedStyle : 'border-transparent'}`} onClick={(e: any) => setTopProduct(e.target.id)}>Best seller</button>
                            <button id={btnId + "-latest"} className={`text-lg p-2 border-2  ${topProduct === btnId + "-latest" ? buttonSlectedStyle : 'border-transparent'}`} onClick={(e: any) => setTopProduct(e.target.id)}>Latest</button>
                        </div>
                        <div className="flex justify-center">
                            <div className="mt-5 grid grid-cols-4 gap-4">
                                {topProduct === btnId + "-featured" && <FeaturedProduct />}
                                {topProduct ===  btnId + "-bestSeller" && <BestSellerProduct />}
                                {topProduct ===  btnId + "-latest" && <LatestProduct />}
                            </div>
                        </div>
                    </section>
                </DemoLayout>
            </>

        </>
    )
}

function FeaturedProduct() {
    return (
        <>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0050-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0052-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0054-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0052-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0050-0-315x315.jpg"/>

        </>
    )
}

function BestSellerProduct() {
    return (
        <>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0050-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0052-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0054-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0052-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0050-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0050-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0052-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0054-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0052-0-315x315.jpg"/>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0050-0-315x315.jpg"/>

        </>
    )
}

function LatestProduct(){
    return(
        <>
            <ProductCard productImage="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0050-0-315x315.jpg"/>
        </>
    )
}

interface CategoryProp {
    mainCategory: string
    image: string
    subCategory:any[]
}
function CategoreyCard(prop: CategoryProp) {
    return (
        <>
            <div className="bg-[#9c4399] bg-opacity-10 p-3 rounded-xl flex gap-2 ">
                <div className="flex-auto">
                    <p className="font-bold text-xl">{prop.mainCategory}</p>
                    <ul className="pl-3 mt-2">
                        {prop.subCategory.map((element) => {
                            return (
                                <li className="text-nowrap">
                                    <Link to={element.url} reloadDocument>{element.name}</Link>
                                </li>
                            )
                        })}
                        {/* <li>Jewelry</li>
                        <li>Fashions</li>
                        <li>Accessories</li>
                        <li>Jewelery</li>
                        <li>Fashions</li> */}
                    </ul>
                </div>
                <div className="w-full">
                    <img src={prop.image} alt="" />
                </div>
            </div>
        </>
    );
}


