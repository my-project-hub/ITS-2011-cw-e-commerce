import Pagination from "./pagiantion.component";

interface Prop{
    isPaginationVisible:boolean
    colNames:string[]
    children?:any
}

export default function Table(prop:Prop) {
    return (
        <>
            <table className="w-full">
                <thead>
                    <tr className="bg-[#e8f0fe] justify-between text-[#666]">
                        <th className="text-left rounded-tl-xl py-2"></th>
                        {prop.colNames.map((element) => <th className="text-left px-3 py-2">{element}</th>)}
                        <th className="text-left rounded-tr-xl py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {prop.children}
                </tbody>
            </table>
            {prop.isPaginationVisible && <Pagination />}
        </>
    )
}


interface tableBodyProp{
    // imgUrl:string;
    // column1Value:string;
    // column2Value:string;
    // column3Value:string;
    children?:any
}

export function TableBody(prop:tableBodyProp) {
    return (
        <tr className="border-b hover:bg-[#f3f6ff]">
            <td></td>
                {prop.children}
            <td></td>
        </tr>
    );
}