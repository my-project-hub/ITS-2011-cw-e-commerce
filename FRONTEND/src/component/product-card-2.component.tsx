import axios from "axios";
import { elements } from "chart.js";
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

interface Prop {
    productImage: string
    navigationLink: string
    selling:string
    offered:string
    productName:String
}

export default function ProductCard(prop: Prop) {

    // const {productId} = useParams()
    const [color, setColor] = useState("");
    const navigate = useNavigate()
    // const [productDetails,setProductDetails]= useState(null)


    // useEffect(() => {
    //     fetchProductById()
    // },[]);

    // async function fetchProductById(){
    //     try{
    //         const response = await axios.get('http://localhost:5000/api/v1/product/'+productId);
    //         setProductDetails(response.data.data)
    //     }catch(e){

    //     }
    // }


    return (
        <>
            <div className="w-[313px] border px-2 pb-4 rounded-lg " >
                <div className="w-full h-[313px] " onClick={() => navigate({ pathname: prop.navigationLink })}>
                    <img src={prop.productImage} alt="" />
                </div>
                <div className="">
                    <Link className="font-bold mt-2 hover:text-[#9c4399] cursor-pointer" to={prop.navigationLink}>
                        {prop.productName}
                    </Link>
                    {/* <p className="font-bold mt-2 hover:text-[#9c4399] cursor-pointer">Girls Lehenga Choli</p> product name */}
                    <p>Rs <span>{Number.parseFloat(prop.offered).toFixed(2)}<span> </span></span><span className="text-gray-500 line-through"><span>Rs </span>{Number.parseFloat(prop.selling).toFixed(2)}</span></p>
                    <small>Tax: Rs 100.00</small>
                    {/* <div className="flex gap-1"> */}
                    {/* <div className="grid grid-cols-5 mt-2">
                        <ColorSelector colors="red" setColor={setColor}/>
                        <ColorSelector colors="#00FF00" setColor={setColor}/>
                    </div> */}
                    {/* </div> */}
                    {/* <select id="country" name="country" autoComplete="country-name" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select> */}
                    {/* <button className="capitalize p-2 border rounded-xl mt-2">Add To Cart</button> */}
                    <button className="capitalize p-2 border rounded-xl mt-2 block bg-light-blue-800">Buy Now</button>
                </div>
            </div>
        </>
    )
}


interface ColorSelectorProp {
    colors: string
    setColor: Function
}
export function ColorSelector(prop: ColorSelectorProp) {

    const styles = 'w-full h-full rounded-full bg-[' + prop.colors + ']'
    // style={{backgroundColor:"#5555"}}
    return (
        <>
            <div className="rounded-full w-10 h-10 border p-1">
                <button className={styles} value={prop.colors} onClick={(e: any) => prop.setColor(e.target.value)}></button>
            </div>
        </>
    )
}