import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone, faRightFromBracket, faUser, faSearch, faCaretDown, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import {
    ArchiveBoxXMarkIcon,
    ChevronDownIcon,
    PencilIcon,
    Square2StackIcon,
    TrashIcon,
} from '@heroicons/react/16/solid'
import "../assets/css/cusotmer.css"
import { useNavigate } from "react-router";



interface Prop {
    children?: any
}

export default function CusotmerLayout(prop: Prop) {
    const navigate = useNavigate();
    return (
        <>
            {/* <div className="px- shadow-md  w-screen flex justify-center">
                <div className="lg:w-2/3 w-full px-4">
                    <TopBar />
                    <NavigationBar />
                </div>
            </div> */}
            <div className="p-5 border-b shadow-md flex items-center justify-between">
                <div className="text-sm gap-6 flex items-center">
                    <img width={"120px"} className=" mr-2" src="https://remosnextjs.vercel.app/images/logo/logo.png" alt="logo" />
                    {/* <a href="">WOMEN</a>
                    <a href="">MEN</a>
                    <a href="">KIDS</a>
                    <a href="">HOME & DECOR</a>
                    <a href="">PERSONALCARE</a>
                    <a href="">TRAVEL GEAR</a>  
                    <a href="">MOTHER & BABYCARE</a> */}
                    <div>
                        <Menu>

                            <MenuButton className={"relative flex items-center"}>Women
                                {/* <ChevronDownIcon className="size-6" /> */}
                            </MenuButton>

                            <Transition
                                enter="transition ease-out duration-150"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="transition ease-in duration-0"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                                <MenuItems anchor="bottom" className={"bg-white border rounded-2xl w-36 mt-3 shadow-sm"}>
                                    <MenuItem>
                                        <p className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" onClick={() => navigate("/categories/women/casual-wear")}>
                                            Casual Wear
                                        </p>
                                    </MenuItem>
                                    <MenuItem>
                                        <p className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" onClick={() => navigate("/categories/women/formal-wear")}>
                                            Formal Wear
                                        </p>
                                    </MenuItem>
                                    <MenuItem>
                                        <p className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" onClick={() => navigate("/categories/women/ethnic-wear")}>
                                            Ethnic Wear
                                        </p>
                                    </MenuItem>
                                    <MenuItem>
                                        <p className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" onClick={() => navigate("/categories/women/lingerie-wear")}>
                                            Lingerie & Innerwear
                                        </p>
                                    </MenuItem>
                                    <MenuItem>
                                        <p className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" onClick={() => navigate("/categories/women/nightwear-wear")}>
                                            Nightwear
                                        </p>
                                    </MenuItem>
                                    <MenuItem>
                                        <p className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" onClick={() => navigate("/categories/women/sports-wear")}>
                                            SportsWear
                                        </p>
                                    </MenuItem>
                                    <MenuItem>
                                        <p className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" onClick={() => navigate("/categories/women/accessories")}>
                                            Accessories
                                        </p>
                                    </MenuItem>
                                </MenuItems>

                            </Transition>
                        </Menu>
                    </div>
                    <div>
                        <Menu>

                            <MenuButton className={"relative flex items-center"}>Men
                                {/* <ChevronDownIcon className="size-6" /> */}
                            </MenuButton>

                            <Transition
                                enter="transition ease-out duration-150"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="transition ease-in duration-0"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >

                                <MenuItems anchor="bottom" className={"bg-white border rounded-2xl w-36 mt-3 shadow-sm"}>
                                    <MenuItem>
                                        <a className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" href="/settings">
                                            My profile
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" href="/settings">
                                            Settings
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" href="/support">
                                            Support
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" href="/license">
                                            License
                                        </a>
                                    </MenuItem>
                                </MenuItems>

                            </Transition>
                        </Menu>
                    </div>
                </div>
                <div className="text-sm flex items-center gap-5">
                    {/* <p>dd</p> */}
                    <div className="cursor-pointer" onClick={() => navigate("/login")}>
                        <svg data-v-4d526081="" xmlns="http://www.w3.org/2000/svg" className="h-3.5 lg:h-5 z-10 text-black" viewBox="0 0 24 24"><g data-v-4d526081="" fill="none" stroke="currentColor" stroke-width="1.5"><circle data-v-4d526081="" cx="12" cy="6" r="4"></circle><ellipse data-v-4d526081="" cx="12" cy="17" rx="7" ry="4"></ellipse></g></svg>
                    </div>
                    <div>
                        <svg data-v-4d526081="" xmlns="http://www.w3.org/2000/svg" className="h-3.5 lg:h-5 z-10 text-black" viewBox="0 0 24 24"><g data-v-4d526081="" fill="none"><path data-v-4d526081="" d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path data-v-4d526081="" fill="currentColor" d="M18.06 3a2 2 0 0 1 1.98 1.719l.017.156l.875 14a2 2 0 0 1-1.847 2.12l-.15.005H5.066a2 2 0 0 1-2-1.976l.003-.149l.875-14a2 2 0 0 1 1.84-1.869L5.94 3zm0 2H5.94l-.875 14h13.87zM15 7a1 1 0 0 1 1 1a4 4 0 0 1-8 0a1 1 0 0 1 2 0a2 2 0 0 0 3.995.15L14 8a1 1 0 0 1 1-1"></path></g></svg>
                    </div>
                </div>

            </div>
            {prop.children}
        </>
    )
}

function TopBar() {
    return (
        <>
            <div className="flex items-center justify-between py-3 border-b relative">
                <div className="flex gap-3 items-center">
                    <small className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faEnvelope} />
                        dilshanshivantha@gmail.com
                    </small>
                    <div className="h-[15px] w-[2px] bg-black"></div>
                    <small className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faPhone} />
                        +94725335646
                    </small>
                </div>
                <div className="flex items-center gap-3">
                    <small>
                        <a href="login" className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            Login
                        </a>
                    </small>
                    {/* <a href="login" className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        Login
                    </a> */}

                    <small>
                        <a href="register" className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faUser} />
                            Register
                        </a>
                    </small>
                    {/* <a href="register" className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faUser} />
                        Register
                    </a> */}
                </div>
            </div>
        </>
    );
}

function NavigationBar() {
    return (
        <>
            <div className="flex items-center justify-between py-3 gap-5">
                {/* comapnu logo */}
                <img width={"120px"} className=" mr-2" src="https://remosnextjs.vercel.app/images/logo/logo.png" alt="logo" />

                <div className="flex items-center  w-fit h-fit bg-gray-100 rounded pl-3 flex-1">
                    <input className="w-full focus:outline-none focus:border-none focus:ring-0 bg-gray-100" type="text" placeholder="Search Here" id="itemSearch" />
                    <div className="bg-[#2563EB] h-9 flex items-center w-9 justify-center rounded-r-lg">
                        <FontAwesomeIcon icon={faSearch} color="white" />
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 cursor-pointer w-32 justify-center">
                        {/* <p className="font-medium">My Account</p>
                        <FontAwesomeIcon icon={faCaretDown} fontSize={"25"} /> */}
                        {/* <p>{">"}</p> */}


                        <div>
                            <Menu>

                                <MenuButton className={"relative flex items-center"}>My account
                                    <ChevronDownIcon className="size-6" />
                                </MenuButton>

                                <Transition
                                    enter="transition ease-out duration-150"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="transition ease-in duration-0"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >

                                    <MenuItems anchor="bottom" className={"bg-white border rounded-2xl w-36 mt-3 shadow-sm"}>
                                        <MenuItem>
                                            <a className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" href="/settings">
                                                My profile
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" href="/settings">
                                                Settings
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" href="/support">
                                                Support
                                            </a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a className="block data-[focus]:bg-[#2563EB] data-[focus]:text-[white] p-3" href="/license">
                                                License
                                            </a>
                                        </MenuItem>
                                    </MenuItems>

                                </Transition>
                            </Menu>
                        </div>


                    </div>
                </div>

                <div>
                    <Cart />
                </div>

            </div>
            <div>

            </div>
        </>
    );
}

function Cart() {
    return (
        <>
            <div className="flex relative">
                {/* <FontAwesomeIcon icon={faCartShopping}/> */}
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                    <small className="absolute top-[-15px] right-[-10px] rounded-full bg-[#2563EB] text-white w-6 h-6 flex items-center justify-center">
                        1
                    </small>
                </div>

                Cart
            </div>
        </>
    );
}