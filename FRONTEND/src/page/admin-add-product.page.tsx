import { TextInputWithLabel } from "../component/formComponent/input.component";
import TextEditor from "../component/text-editor.component";
import AdminLayout from "../layout/admin.layout";

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
                        <div>
                            <TextEditor />                        
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </AdminLayout>
        </>
    );
}