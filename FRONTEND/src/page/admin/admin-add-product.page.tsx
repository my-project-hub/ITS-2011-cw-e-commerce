import { useEffect, useState } from "react";
import ImageUpload from "../../component/formComponent/image-upload.component.tsx";
import { CheckBox, DropDown, RadioButton, TextInputWithLabel } from "../../component/formComponent/input.component.tsx";
import TextEditor from "../../component/text-editor.component.tsx";
import AdminLayout from "../../layout/admin.layout.tsx";
import { Controller, useForm } from "react-hook-form";
import axios from 'axios'


export default function AdminAddProduct() {

    const [productImages, setProductImages] = useState<any[]>([]);
    const [description, setDescription] = useState<string>("")
    const { register, handleSubmit, control } = useForm();
    const [categories, setCategories] = useState([])
    const [selectedCategory,setSelectedCategory]= useState("")
    const [subCategory,setSubCategory]= useState([])

    useEffect(() => {
        fetchCategories();
    },[])

    useEffect(() => {
        fetchSubCategories();
    },[selectedCategory])

     async function onSubmit(data: any) {
        // const form = new FormData();
        // form.append("description", description)
        console.log(data)
        const response = await axios.post('/aaa', {
            ...data,
            description,
            images: productImages
        }, { method: "POST" })
    }

    //get categories of products
    async function fetchCategories() {
       const response = await axios.get('http://localhost:5000/api/v1/category')
       setCategories(response.data.data);
    }

    async function fetchSubCategories() {
        const response = await axios.get('http://localhost:5000/api/v1/subCategory/'+selectedCategory)
        setSubCategory(response.data.data);
    }

    function categoryHandle(event:any){
        setSelectedCategory(event.target.value)
    }

    return (
        <>
            <AdminLayout>
                {/* <form action="" onSubmit={handleSubmit(onSubmit)}> */}
                    <div className="flex justify-center">
                    <form action="" onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 bg-white p-5 border rounded-xl">
                        <div>
                        <div className="w-full bg-white p-5 border rounded-xl">
                            <h4 className="text-xl">Product form</h4>
                            <hr className="mt-5" />
                            <Controller name="title" control={control} render={({ field }: any) => <TextInputWithLabel {...field} labelName="Title" gap="py-3" />} />
                            {/* <ErrorMessage className="text-red-500 text-sm font-medium" errors={errors} name="title" as="p" /> */}

                            {/* <TextInputWithLabel labelName="Title" gap="py-3" /> */}
                            {/* <TextInputWithLabel labelName="Slug" gap="py-3" /> */}
                            <div className="flex gap-x-5">
                                <Controller name="purchased" control={control} render={({ field }: any) => <TextInputWithLabel {...field} labelName="Purchased" gap="py-3" />} />
                                <Controller name="selling" control={control} render={({ field }: any) => <TextInputWithLabel {...field} labelName="Selling" gap="py-3" />} />
                                <Controller name="offered" control={control} render={({ field }: any) => <TextInputWithLabel {...field} labelName="Offered" gap="py-3" />} />
                                {/* <TextInputWithLabel labelName="Purchased" gap="py-3" />
                                <TextInputWithLabel labelName="Selling" gap="py-3" />
                                <TextInputWithLabel labelName="Offered" gap="py-3" /> */}
                            </div>
                            <div className="flex gap-x-5">
                                <div className="w-full">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Categories</label>
                                    <div className="mt-2">
                                        <select onChange={categoryHandle}  id="country"  autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option selected disabled>{"select the category"}</option>
                                            {
                                                categories.map((element:any) => <option value={element._id}>{element.categoryName}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Sub categories</label>
                                    <div className="mt-2">
                                        <select {...register("subCategory")} id="country"  autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                            {subCategory.length ? <option selected disabled>{"select the sub category"}</option> : <option selected disabled>{"No category found"}</option>}
                                            {
                                                subCategory.map((element:any) => <option value={element._id}>{element.subCategoryName}</option>)

                                            }
                                        
                                        </select>
                                    </div>
                                </div>
                                <Controller name="unit" control={control} render={({ field }: any) => <TextInputWithLabel {...field} labelName="Unit" gap="py-3" />} />
                                {/* <TextInputWithLabel labelName="Categories" gap="py-3" />
                                <TextInputWithLabel labelName="Unit" gap="py-3" /> */}
                            </div>
                            <div className="py-3 h-32 mt-10">
                                <p>Description</p>
                                <TextEditor setValue={setDescription} />
                            </div>
                            <div className="flex gap-3 py-3 mt-36">
                                <div className="flex items-center gap-2">
                                    <Controller name="featureProduct" control={control} render={({ field }) => <CheckBox {...field} />} />
                                    <label htmlFor="">Featured products</label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Controller name="trendingProducts" control={control} render={({ field }) => <CheckBox {...field} />} />
                                    {/* <CheckBox /> */}
                                    <label htmlFor="">Trending products</label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Controller name="topSellingProducts" control={control} render={({ field }) => <CheckBox {...field} />} />
                                    {/* <CheckBox /> */}
                                    <label htmlFor="">Top selling products</label>
                                </div>
                            </div>
                            <div className="py-3">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <label htmlFor="">Refundable</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Controller name="refundable" defaultValue={"yes"} control={control} render={({ field }) => <RadioButton  {...field} value="yes" radioLabelName="Yes" radioBtnName="refundable" />} />
                                        <Controller name="refundable" defaultValue={"no"} control={control} render={({ field }) => <RadioButton {...field} value="no" radioLabelName="No" radioBtnName="refundable" />} />

                                        {/* <RadioButton radioLabelName="Yes" radioBtnName="refundable" />
                                        <RadioButton radioLabelName="No" radioBtnName="refundable" /> */}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <label htmlFor="">Warranty</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Controller name="warranty" defaultValue={"yes"} control={control} render={({ field }) => <RadioButton  {...field} value="yes" radioLabelName="Yes" radioBtnName="warranty" />} />
                                        <Controller name="warranty" defaultValue={"no"} control={control} render={({ field }) => <RadioButton {...field} value="no" radioLabelName="No" radioBtnName="warranty" />} />
                                        {/* <RadioButton radioLabelName="Yes" radioBtnName="warranty" />
                                        <RadioButton radioLabelName="No" radioBtnName="warranty" /> */}
                                    </div>
                                </div>
                                <div className="flex justify-end gap-3">
                                    {/* <button className="primary-btn w-fit hover:w-fit">Save & Edit</button> */}
                                    <button  className="primary-btn w-fit hover:w-fit">Save</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </form>
                        <div className=" bg-white p-5 border rounded-xl">
                            <div>
                                <label htmlFor="">Uploda image</label>
                                <p className="text-gray-500 text-xs">Only you can upload maximum 3 pictures</p>
                                <ImageUpload images={setProductImages} />
                            </div>
                        </div>
                    </div>
            </AdminLayout>
        </>
    );
}