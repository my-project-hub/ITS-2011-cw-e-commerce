import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/24/outline";


export default function CartComponent() {
    return (
        <>
            <Menu>
                <MenuButton>
                    <div>
                        <svg data-v-4d526081="" xmlns="http://www.w3.org/2000/svg" className="h-3.5 lg:h-5 z-10 text-black" viewBox="0 0 24 24"><g data-v-4d526081="" fill="none"><path data-v-4d526081="" d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path data-v-4d526081="" fill="currentColor" d="M18.06 3a2 2 0 0 1 1.98 1.719l.017.156l.875 14a2 2 0 0 1-1.847 2.12l-.15.005H5.066a2 2 0 0 1-2-1.976l.003-.149l.875-14a2 2 0 0 1 1.84-1.869L5.94 3zm0 2H5.94l-.875 14h13.87zM15 7a1 1 0 0 1 1 1a4 4 0 0 1-8 0a1 1 0 0 1 2 0a2 2 0 0 0 3.995.15L14 8a1 1 0 0 1 1-1"></path></g></svg>
                    </div>
                </MenuButton>
                <MenuItems className="absolute bg-white border-2 p-2 right-[0] mt-2 z-[1] shadow-md">
                    <MenuItem>
                        <div>
                            <CartItems />
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div>
                            <CartItems />
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <button className="bg-[#9c4399] text-white p-2 rounded-lg">Checkout</button>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </>
    );
}


function CartItems(){
    return (
        <>
            <div className="flex items-center p-1 text-nowrap">
                <div>
                    <img className="max-w-[65px] border p-1" src="https://www.ecomdeveloper.com/demo/image/cache/catalog/products/girls/ethnic/ETH0050-0-315x315.jpg" alt="" />
                </div>
                <div className="flex flex-col gap-2 ml-2">
                    <p>Girls Lehenga Choli</p>
                    <p><span>1</span> X <span>Rs: <span>{1000.00}</span></span></p>
                </div>
                <div className="relative top-[-15px] right-[-10px] mx-2 cursor-pointer">
                    <XCircleIcon className="size-6 text-blue-500" fontSize={"15px"} />
                </div>
            </div>
            <hr className="my-2"/>
        </>
    )
}