import { useState } from "react"
import { useNavigate } from "react-router";

interface Prop{
    productImage:string
}

export default function ProductCard(prop:Prop) {

    const [color, setColor] = useState("");
    const navigate = useNavigate()
    return (
        <>
            <div className="w-[313px] border px-2 pb-4 rounded-lg " onClick={() => navigate({pathname:"/categories/top/product/featured/123"})}>
                <div className="w-full h-[313px] ">
                    <img src={prop.productImage} alt="" />
                </div>
                <div className="">
                    <p className="font-bold mt-2 hover:text-[#9c4399] cursor-pointer">Girls Lehenga Choli</p> {/* product name */}
                    <p>Rs <span>1000.00 <span> </span></span><span className="text-gray-500 line-through"><span>Rs</span> 500.00</span></p>
                    <small>Tax: Rs 100.00</small>
                    <div className="flex gap-1">
                    <div className="grid grid-cols-5 mt-2">
                        <ColorSelector colors="red" setColor={setColor}/>
                        <ColorSelector colors="#00FF00" setColor={setColor}/>
                    </div>
                    </div>
                    <select id="country" name="country" autoComplete="country-name" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                    <button className="capitalize p-2 border rounded-xl mt-2">Add To Cart</button>
                </div>
            </div>
        </>
    )
}


interface ColorSelectorProp {
    colors: string
    setColor:Function
}
function ColorSelector(prop: ColorSelectorProp) {

    const styles = 'w-full h-full rounded-full bg-[' + prop.colors + ']'
    // style={{backgroundColor:"#5555"}}
    return (
        <>
            <div className="rounded-full w-10 h-10 border p-1">
                <button className={styles} value={prop.colors} onClick={(e:any) => prop.setColor(e.target.value)}></button>
            </div>
        </>
    )
}