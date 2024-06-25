import { useEffect, useState } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';


export default function TextEditor(prop:any) {

    const [value,setValue] = useState("")

    useEffect(() => {
        prop.setValue(value);
    },[value])

    return (
        <>
            <div className="h-[150px]">
                <ReactQuill className="h-full block relative" theme="snow" value={value} onChange={setValue} />
            </div>
        </>
    )
}