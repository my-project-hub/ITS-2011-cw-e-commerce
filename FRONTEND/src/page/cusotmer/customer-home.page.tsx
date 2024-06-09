// import { Carousel } from "@material-tailwind/react";
// import CusotmerLayout from "../../layout/cusotmer.layout";
import { DemoLayout } from "../../layout/demo.layout";

const categoreyImages:string[] = [
    "https://www.ecomdeveloper.com/demo/image/cache/catalog/category/1-180x180.png",
    "https://www.ecomdeveloper.com/demo/image/cache/catalog/category/2-180x180.png",
    "https://www.ecomdeveloper.com/demo/image/cache/catalog/category/3-180x180.png",
    "https://www.ecomdeveloper.com/demo/image/cache/catalog/category/1-180x180.png"

];

export default function CustomerHome() {
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
                        <CategoreyCard mainCategory="Women" image={categoreyImages[0]}/>
                        <CategoreyCard mainCategory="Men" image={categoreyImages[1]}/>
                        <CategoreyCard mainCategory="Kids" image={categoreyImages[2]}/>
                        <CategoreyCard mainCategory="Footwear" image={categoreyImages[3]}/>
                    </section>
                </DemoLayout>
            </>

        </>
    )
}

interface CategoryProp {
    mainCategory: string
    image:string
}
function CategoreyCard(prop: CategoryProp) {
    return (
        <>
            <div className="bg-[#9c4399] bg-opacity-10 p-3 rounded-xl flex gap-2">
                <div>
                    <p className="font-bold text-xl">{prop.mainCategory}</p>
                    <ul className="pl-3">
                        <li>Jewelry</li>
                        <li>Fashions</li>
                        <li>Accessories</li>
                        <li>Jewelery</li>
                        <li>Fashions</li>
                    </ul>
                </div>
                <div className="w-full">
                    <img src={prop.image} alt="" />
                </div>
            </div>
        </>
    );
}
