import ImageUpload from "../../component/formComponent/image-upload.component.tsx";
import { CheckBox, DropDown, RadioButton, TextInputWithLabel } from "../../component/formComponent/input.component.tsx";
import TextEditor from "../../component/text-editor.component.tsx";
import AdminLayout from "../../layout/admin.layout.tsx";

export default function AdminAddProduct() {
    return (
        <>
            <AdminLayout>
                <div className="flex justify-center">
                    <div className="lg:w-1/2 bg-white p-5 border rounded-xl">
                        <h4 className="text-xl">Product form</h4>
                        <hr className="mt-5" />
                        <TextInputWithLabel labelName="Title" gap="py-3" />
                        <TextInputWithLabel labelName="Slug" gap="py-3" />
                        <div className="flex gap-x-5">
                            <TextInputWithLabel labelName="Purchased" gap="py-3" />
                            <TextInputWithLabel labelName="Selling" gap="py-3" />
                            <TextInputWithLabel labelName="Offered" gap="py-3" />
                        </div>
                        <div className="flex gap-x-5">
                            <TextInputWithLabel labelName="Categories" gap="py-3" />
                            <TextInputWithLabel labelName="Unit" gap="py-3" />
                            <TextInputWithLabel labelName="Badge" gap="py-3" />
                        </div>
                        <div className="py-3 ">
                            <p>Overview</p>
                            <TextEditor />
                        </div>
                        <div className="py-3 h-32 mt-10">
                            <p>Description</p>
                            <TextEditor />
                        </div>
                        <div className="flex gap-3 mt-32">
                            <div className="md:w-48">
                                <DropDown labelName="Status" options={["Private", "Public"]} />
                            </div>
                            <div className="md:w-48">
                                <DropDown labelName="Brand" options={["Private", "Public"]} />
                            </div>
                        </div>
                        <div>
                            <TextInputWithLabel labelName="Tags (optional)" gap="py-3" />
                        </div>
                        <div className="flex gap-3 py-3">
                            <div className="md:w-48">
                                <DropDown labelName="Tax rule" options={["Private", "Public"]} />
                            </div>
                            <div className="md:w-48">
                                <DropDown labelName="Shipping rule" options={["Private", "Public"]} />
                            </div>
                            <div className="md:w-48">
                                <DropDown labelName="Bundle deal" options={["Private", "Public"]} />
                            </div>

                        </div>
                        <div className="flex gap-3 py-3">
                            <div className="flex items-center gap-2">
                                <CheckBox />
                                <label htmlFor="">Featured products</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckBox />
                                <label htmlFor="">Trending products</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <CheckBox />
                                <label htmlFor="">Top selling products</label>
                            </div>
                        </div>
                        <div className="py-3">
                            <div className="flex items-center gap-3">
                                <div>
                                    <label htmlFor="">Refundable</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioButton radioLabelName="Yes" radioBtnName="refundable"/>
                                    <RadioButton radioLabelName="No" radioBtnName="refundable" />
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div>
                                    <label htmlFor="">Warranty</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RadioButton radioLabelName="Yes" radioBtnName="warranty" />
                                    <RadioButton radioLabelName="No" radioBtnName="warranty" />
                                </div>
                            </div>
                            <div className="flex justify-end gap-3">
                            <button className="primary-btn w-fit hover:w-fit">Save & Edit</button>
                                <button className="primary-btn w-fit hover:w-fit">Save</button>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white p-5 border rounded-xl">
                        <div>
                            <label htmlFor="">Uploda image</label>
                            <p className="text-gray-500 text-xs">Only you can upload maximum 3 pictures</p>
                            <ImageUpload />
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}