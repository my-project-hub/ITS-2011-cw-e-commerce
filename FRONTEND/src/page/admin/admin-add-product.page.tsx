import { useState } from "react";
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

    async function onSubmit(data: any) {
        const form = new FormData();
        // form.append("description", description)
        console.log(data)
        const response = await axios.post('/aaa',{
            ...data,
            description,
            
            images:productImages
        },{method:"POST"})   


        
    }

    return (
        <>
            <AdminLayout>
                <form action="" onSubmit={handleSubmit(onSubmit)}>


                    <div className="flex justify-center">
                        <div className="lg:w-1/2 bg-white p-5 border rounded-xl">
                            <h4 className="text-xl">Product form</h4>
                            <hr className="mt-5" />
                            <Controller name="title" control={control} render={({ field }: any) => <TextInputWithLabel {...field} labelName="Title" gap="py-3" />} />
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
                                <Controller name="categories" control={control} render={({ field }: any) => <DropDown {...field} labelName="Categories" gap="py-3" options={[{ value: "chocolate", label: "Chocolate" },]} />} />
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
                                    <Controller name="feature products" control={control} render={({ field }) => <CheckBox {...field} />} />
                                    <label htmlFor="">Featured products</label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Controller name="trending products" control={control} render={({ field }) => <CheckBox {...field} />} />
                                    {/* <CheckBox /> */}
                                    <label htmlFor="">Trending products</label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Controller name="top selling products" control={control} render={({ field }) => <CheckBox {...field} />} />
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
                                    <button className="primary-btn w-fit hover:w-fit">Save</button>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-white p-5 border rounded-xl">
                            <div>
                                <label htmlFor="">Uploda image</label>
                                <p className="text-gray-500 text-xs">Only you can upload maximum 3 pictures</p>
                                <ImageUpload images={setProductImages} />
                            </div>
                        </div>
                    </div>
                </form>
            </AdminLayout>
        </>
    );
}