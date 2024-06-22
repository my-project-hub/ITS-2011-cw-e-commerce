import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavbarOptions } from "./demo.layout";
import { faCcMastercard, faCcVisa, faFacebookF, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { footWearNavList, kidsNavList, menNavList, womenNavList } from "../assets/navigation.list";

export default function ProductViewLayout({children}:React.PropsWithChildren){
    return(
        <>
            <div className='bg-[#9c4399] relative'>
                <nav className='flex justify-center'>
                    <div className='w-2/3 h-[80px] py-2'>
                        <small className='text-white pl-6'>The premier Showroom in Your City - Now Also Available Online</small>
                        <div className='flex items-center justify-between bg-white p-3 rounded-full top-5  border mt-3'>
                            <div className='px-3'>
                                <img className=" mr-2" src="https://www.ecomdeveloper.com/demo/image/catalog/logodemo.png" alt="logo" />
                            </div>
                            <div className='flex gap-5'>
                            <NavbarOptions category='WOMEN' subCategory={womenNavList} />
                                <NavbarOptions category='MEN' subCategory={menNavList} />
                                <NavbarOptions category='KIDS' subCategory={kidsNavList}/>
                                <NavbarOptions category='FOOT WEAR' subCategory={footWearNavList}/>
                            </div>
                            <div className="text-sm flex items-center gap-3">
                                {/* <p>dd</p> */}
                                <div className="cursor-pointer" onClick={() => navigate("/login")}>
                                    <svg data-v-4d526081="" xmlns="http://www.w3.org/2000/svg" className="h-3.5 lg:h-5 z-10 text-black" viewBox="0 0 24 24"><g data-v-4d526081="" fill="none" stroke="currentColor" stroke-width="1.5"><circle data-v-4d526081="" cx="12" cy="6" r="4"></circle><ellipse data-v-4d526081="" cx="12" cy="17" rx="7" ry="4"></ellipse></g></svg>
                                </div>
                                <div>
                                    <svg data-v-4d526081="" xmlns="http://www.w3.org/2000/svg" className="h-3.5 lg:h-5 z-10 text-black" viewBox="0 0 24 24"><g data-v-4d526081="" fill="none"><path data-v-4d526081="" d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path data-v-4d526081="" fill="currentColor" d="M18.06 3a2 2 0 0 1 1.98 1.719l.017.156l.875 14a2 2 0 0 1-1.847 2.12l-.15.005H5.066a2 2 0 0 1-2-1.976l.003-.149l.875-14a2 2 0 0 1 1.84-1.869L5.94 3zm0 2H5.94l-.875 14h13.87zM15 7a1 1 0 0 1 1 1a4 4 0 0 1-8 0a1 1 0 0 1 2 0a2 2 0 0 0 3.995.15L14 8a1 1 0 0 1 1-1"></path></g></svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>

            <main className='my-3 flex justify-center'>
                {/* injecting the childredn components her */}
                <div className='w-full px-[180px]'>
                    {children}
                </div>
                
            </main>

            <footer className='w-full'>
                {/* <div className=' after:content-[""] after:absolute after:top-0 after:w-full after:h-full after:opacity-10  w-full relative border before:object-fill before:w-full before:h-full before:bg-no-repeat before:absolute top-footer before:content-[""] object-fit  bg-[url("src/assets/img/logo/footer.png") bg-contain'>
                    <div className='w-full flex flex-col items-center justify-center py-14'>
                        <p className='text-gray-500'>Thank you dear customers</p>
                        <p className='text-[40px] font-medium'>Get Up To 30% discount on fashion</p>
                        <button className='bg-[#9c4399] text-white rounded-lg px-3 py-3'>Shop now</button>
                    </div>
                </div> */}
                <div className='relative'>
                    <div className=' bg-[url("src/assets/img/logo/footer.png")] bg-cover bg-[25%]'>
                        <div className='w-full flex flex-col items-center justify-center py-14 gap-3'>
                            <p className='text-gray-500'>Thank you dear customers</p>
                            <p className='text-[40px] font-medium'>Get Up To 30% discount on fashion</p>
                            <button className='bg-[#9c4399] text-white rounded-lg px-3 py-3'>Shop now</button>
                        </div>
                        <div className='flex justify-center absolute w-full'>
                            <div className='bg-white w-2/3 flex border p-4 justify-between items-center rounded-lg'>
                                <div className='flex items-center gap-2'>
                                    <FontAwesomeIcon icon={faFacebookF} className='bg-gray-200 p-2 rounded' />
                                    <FontAwesomeIcon icon={faInstagram} className='bg-gray-200 p-2 rounded' />
                                    <FontAwesomeIcon icon={faPinterest} className='bg-gray-200 p-2 rounded' />
                                    <FontAwesomeIcon icon={faTwitter} className='bg-gray-200 p-2 rounded' />
                                </div>

                                <h5 className='text-xl'>Sign Up For Newsletter</h5>

                                <div className='flex relative'>
                                    <input className='border p-2' type="text" placeholder='Your email address' />
                                    <button className='bg-[#9c4399] p-2 rounded-e-lg text-white '>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='flex justify-center absolute w-full'>
                        <div className='bg-white w-2/3 flex border p-4 justify-between items-center rounded-lg'>
                            <div className='flex items-center gap-2'>
                                <FontAwesomeIcon icon={faFacebookF} className='bg-gray-200 p-2 rounded' />
                                <FontAwesomeIcon icon={faInstagram} className='bg-gray-200 p-2 rounded' />
                                <FontAwesomeIcon icon={faPinterest} className='bg-gray-200 p-2 rounded' />
                                <FontAwesomeIcon icon={faTwitter} className='bg-gray-200 p-2 rounded' />
                            </div>

                            <h5 className='text-xl'>Sign Up For Newsletter</h5>

                            <div className='flex relative'>
                                <input className='border p-2' type="text" placeholder='Your email address' />
                                <button className='bg-[#9c4399] p-2 rounded-e-lg text-white '>Subscribe</button>
                            </div>
                        </div>
                    </div> */}
                    <div className='flex justify-center'>
                        <div className='flex w-2/3 justify-between mt-36'>
                            <div>
                                <p className='text-lg font-medium mb-4'>Contact us</p>
                                <ul className='text-gray-500 flex flex-col gap-2'>
                                    <li className='flex'>
                                        <div>

                                        </div>
                                        <p><span>55 Walpita</span><br /><span>Batawala</span><br /><span>Padukka</span></p>
                                    </li>
                                    <li>
                                        <div></div>
                                        <p>07123654569</p>
                                    </li>
                                    <li>
                                        <div></div>
                                        <p>dilshan@gmail.com</p>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-lg font-medium mb-4'>About Us</p>
                                <ul className='text-gray-500 flex flex-col gap-2'>
                                    <li>About Us</li>
                                    <li>Delivery/Track Order</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms and condition</li>
                                    <li>Brands</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-lg font-medium mb-4'>My Account</p>
                                <ul className='text-gray-500 flex flex-col gap-2'>
                                    <li>My Account</li>
                                    <li>Order History</li>
                                    <li>Wish List</li>
                                    <li>NewsLetter</li>
                                    <li>Specials</li>
                                    <li>Returns</li>
                                </ul>
                            </div>
                            <div>
                                <p className='text-lg font-medium mb-4'>My Account</p>
                                <ul className='text-gray-500 flex flex-col gap-2'>
                                    <li>My Account</li>
                                    <li>Order History</li>
                                    <li>Wish List</li>
                                    <li>NewsLetter</li>
                                    <li>Specials</li>
                                    <li>Returns</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='my-5 w-2/3 flex'>
                        <img src="https://www.ecomdeveloper.com/demo/image/catalog/apk.png" alt="" />
                        <img src="https://www.ecomdeveloper.com/demo/image/catalog/play-store.png" alt="" />
                    </div>
                </div>
                <div className='bg-[#9c4399] text-white p-3'>
                    <small className='text-center block mb-1'>Powered By Demo Shop Pvt Ltd My Demo Shop @ 2024</small>
                    <div className='flex gap-2 justify-center'>
                        <FontAwesomeIcon icon={faCcVisa} className='text-2xl' />
                        <FontAwesomeIcon icon={faCcMastercard} className='text-2xl'/>
                    </div>
                </div>
            </footer>
        </>
    )
}