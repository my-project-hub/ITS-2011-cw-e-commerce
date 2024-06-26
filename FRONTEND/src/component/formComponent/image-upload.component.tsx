import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, useState } from "react";
import { useForm } from "react-hook-form";
import { faCross } from "@fortawesome/free-solid-svg-icons";
import { ActionFunction } from "react-router";

export default function ImageUpload(prop:any) {


    const {register,handleSubmit,setValue} = useForm();
    const [image , setImage] = useState<any[]>([])

    function onSubmit(data:any){
        const form  = new FormData()
        form.append('product_image',data.product_image[0]);
        fetch('http://localhost:5000/api/v1/product/image',{
            method:"POST",
            body:form,
            // headers:{
            //     "content-type":"multipart/form-data"
            // },
            
        }).then( async res => {
            if(res.ok){
                setValue('product_image',"");
                const response = await res.json();
                console.log(response);
                setImage(prev => {
                    if(prev.length >= 1){
                        return prev;
                    }
                    return [...prev, response]
                })

                prop.images((prev:any) => {
                    if(prev.length >= 3){
                        return prev;
                    }
                    return [...prev, response]
                });
                
            }
        })
    }

    function removeImage(key:any){
        setImage(prev => {
            return prev.filter((element , index) => index != key)
        });

        prop.images((prev:any) => {
            return prev.filter((element:any , index:number) => index != key)
        });
    }

    return (
        <div>
            <form action="" encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-span-full">
                {/* <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label> */}
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                        </svg>
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label htmlFor="product_image" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500" >
                                <span>Upload a file</span>
                                <input {...register("product_image")} id="product_image" name="product_image" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        <button>upload</button>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                {image.map((element,index) => {
                    return (
                        <ProductImages removeImage={() => removeImage(index)} key={index} imageUrl={element.base64Image}/>
                    )
                })}
                {/* <ProductImages imageUrl="https://i.pinimg.com/236x/b0/9d/ce/b09dce1fbeeec696d0c581cf4cff3163.jpg" />
                <ProductImages imageUrl="https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/6257ec4fcb33ee42cdba135e_61b9b7e9effa0fc28ea1bf51_Frame%25207.jpeg"/>
                <ProductImages imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4k6WY61olGiHhaJcgZHvF4jZ3J4UQdIyyhWb4xGLfeQ&s"/> */}
            </div>
            </form>
        </div>
    );
}


interface ProudctImageUrlProp{
    imageUrl:string;
    removeImage:MouseEventHandler
}
export function ProductImages(prop:ProudctImageUrlProp){

    return (
        <>
            <div onClick={prop.removeImage} className="border flex justify-center p-2 relative">
                <div className="cursor-pointer text-center rounded-full font-bold right-0 absolute w-6 aspect-square bg-red-200">
                   X
                </div>
                <img className="w-[250px]" src={prop.imageUrl} alt="" />
            </div>
        </>
    )
}