interface TextInputProp{
    gap:string;
    labelName:string
}

export function TextInputWithLabel(prop:TextInputProp) {
    return (
        <>
            <div className={`sm:col-span-3 md:w-full ${prop.gap}`}>
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">{prop.labelName}</label>
                <div className="mt-2">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
        </>
    )
}