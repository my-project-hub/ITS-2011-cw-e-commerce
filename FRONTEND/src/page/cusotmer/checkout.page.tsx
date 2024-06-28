import { useContext, useEffect } from "react";
import { DemoLayout } from "../../layout/demo.layout";
import ProductViewLayout from "../../layout/product-view.layout";
import CartContext from "../../context/context";
import { elements } from "chart.js";
import { useNavigate } from "react-router";

export default function Checkout() {

    const navigate = useNavigate();
    const {cartItems} = useContext(CartContext)

    useEffect(() => {
        navigation()
    },[]);

    function navigation(){
        if(cartItems.length == 0) navigate({pathname:"/"})
    }

    let subTotal = 0.00;
    cartItems.forEach((element:any) => {
        subTotal += element.offered
    });

    let total = subTotal + 99.99;


    return (
        <>
            <ProductViewLayout>

                <div className="mt-14">
                    <p className="text-xl font-bold">Billing details</p>
                </div>

                <div className="flex">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                <div className="mt-2">
                                    <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                <div className="mt-2">
                                    <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                                <div className="mt-2">
                                    <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                <div className="mt-2">
                                    <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                <div className="mt-2">
                                    <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <p className="font-bold text-xl mt-6">Your Order</p>
                    </div>

                    <div>
                        <div className="mt-6 sm:mt-8">
                            <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                                <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                        
                                        {cartItems.map((element:any) => (
                                            <tr>
                                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                                                <div className="flex items-center gap-4">
                                                    <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                                        <img className="h-auto w-full max-h-full dark:hidden" src={element.images[0]} alt="imac image" />
                                                        <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                                                    </a>
                                                    <a href="#" className="hover:underline">{element.title}</a>
                                                </div>
                                            </td>

                                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

                                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">Rs <span>{Number.parseFloat(element.offered).toFixed(2)}</span></td>
                                        </tr>
                                        ))}
                                        
                                        {/* <tr>
                                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                                                <div className="flex items-center gap-4">
                                                    <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                                        <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                                                        <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                                                    </a>
                                                    <a href="#" className="hover:underline">Apple iMac 27”</a>
                                                </div>
                                            </td>

                                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

                                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$1,499</td>
                                        </tr> */}

                                        {/* <tr>
                                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                                                <div className="flex items-center gap-4">
                                                    <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                                        <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="imac image" />
                                                        <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg" alt="imac image" />
                                                    </a>
                                                    <a href="#" className="hover:underline">Apple iPhone 14</a>
                                                </div>
                                            </td>

                                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x2</td>

                                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$1,998</td>
                                        </tr>

                                        <tr>
                                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                                                <div className="flex items-center gap-4">
                                                    <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                                        <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg" alt="ipad image" />
                                                        <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg" alt="ipad image" />
                                                        <a href="#" className="hover:underline">Apple iPad Air</a>
                                                        </a>
                                                </div>
                                            </td>

                                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

                                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$898</td>
                                        </tr>

                                        <tr>
                                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                                                <div className="flex items-center gap-4">
                                                    <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                                        <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg" alt="xbox image" />
                                                        <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg" alt="xbox image" />
                                                        <a href="#" className="hover:underline">Xbox Series X</a>
                                                        </a>
                                                </div>
                                            </td>

                                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x4</td>

                                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$4,499</td>
                                        </tr>

                                        <tr>
                                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                                                <div className="flex items-center gap-4">
                                                    <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                                        <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg" alt="playstation image" />
                                                        <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg" alt="playstation image" />
                                                        <a href="#" className="hover:underline">PlayStation 5</a>
                                                        </a>
                                                </div>
                                            </td>

                                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

                                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$499</td>
                                        </tr>

                                        <tr>
                                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                                                <div className="flex items-center gap-4">
                                                    <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                                        <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg" alt="macbook image" />
                                                        <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg" alt="macbook image" />
                                                        <a href="#" className="hover:underline">MacBook Pro 16"</a>
                                                        </a>
                                                </div>
                                            </td>

                                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x1</td>

                                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$499</td>
                                        </tr>

                                        <tr>
                                            <td className="whitespace-nowrap py-4 md:w-[384px]">
                                                <div className="flex items-center gap-4">
                                                    <a href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                                                        <img className="h-auto w-full max-h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg" alt="watch image" />
                                                        <img className="hidden h-auto w-full max-h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg" alt="watch image" />
                                                        <a href="#" className="hover:underline">Apple Watch SE</a>
                                                        </a>
                                                </div>
                                            </td>

                                            <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x2</td>

                                            <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$799</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-4 space-y-6">
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</h4>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-gray-500 dark:text-gray-400">Sub Total</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">Rs <span>{Number.parseFloat(subTotal.toString()).toFixed(2)}</span></dd>
                                        </dl>

                                        {/* <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-gray-500 dark:text-gray-400">Savings</dt>
                                            <dd className="text-base font-medium text-green-500">-$299.00</dd>
                                        </dl>

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-gray-500 dark:text-gray-400">Store Pickup</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                                        </dl> */}

                                        <dl className="flex items-center justify-between gap-4">
                                            <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                                            <dd className="text-base font-medium text-gray-900 dark:text-white">Rs 99.99</dd>
                                        </dl>
                                    </div>

                                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                        <dt className="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
                                        <dd className="text-lg font-bold text-gray-900 dark:text-white">Rs.{Number.parseFloat(total.toString()).toFixed(2)}</dd>
                                    </dl>
                                </div>

                                <div className="flex items-start sm:items-center">
                                    <input id="terms-checkbox-2" type="checkbox" value="" className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                                    <label htmlFor="terms-checkbox-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> I agree with the <a href="#" title="" className="text-primary-700 underline hover:no-underline dark:text-primary-500">Terms and Conditions</a> of use of the Flowbite marketplace </label>
                                </div>

                                <div className="gap-4 sm:flex sm:items-center">
                                    {/* <button type="button" className="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Return to Shopping</button> */}

                                    <button type="submit" className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0">Send the order</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </ProductViewLayout>
        </>
    );
}