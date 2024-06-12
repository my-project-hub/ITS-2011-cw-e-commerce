import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router"


// interface Prop{
//     breadItems:<BreadScrumbItem />
// }

export default function BreadScrumb({children}:any) {

    const navigate = useNavigate()

    return (
        <>
            <div className="w-full mt-16 bg-gray-100 px-3 py-1 rounded-xl">
                <div className="flex gap-2">
                    <div>
                        <FontAwesomeIcon  icon={faHome} onClick={() => navigate({pathname:"/"})} />
                    </div>
                    <div className="w-[2px] bg-black mx-2"></div>
                    {children}
                </div>
            </div>
        </>
    )
}

interface BreadScrumbItemProp{
    name:string
    routePath:string
}
export function BreadScrumbItem(prop:BreadScrumbItemProp){
    
    const navigate = useNavigate();
    
    return(
        <>
            <div></div>
            <p onClick={() => navigate({pathname:prop.routePath})} >{prop.name}</p>
        </>
    )
}