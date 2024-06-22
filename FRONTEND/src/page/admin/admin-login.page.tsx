import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "/src/assets/css/adminlogin.css"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
export default function AdminLogin() {

    const [error , setError] = useState("")
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()


    function onSubmit(data: any) {
        console.log(data)
        setError("");
        // console.log(process.env)
        fetch("http://localhost:5000/api/v1/auth/admin/signin",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(async e => {
            if(!e.ok){
                const error = await e.json()
                setError(error.message);
                

            }else{
               const response = await e.json();
                localStorage.setItem("accessToken",response.accessToken);
                navigate({pathname:"/dashboard"})
            }
            
        });
    }


    return (
        <>
            <form action="#" onSubmit={handleSubmit(onSubmit)}>
                <section className="h-screen flex justify-center items-center bg-gray-100">
                    <div className="w-1/2 lg:w-1/4 bg-white p-5 rounded-3xl">
                   
                        <div className="flex justify-center mb-8">
                            <img className="self-center" src="/src/assets/img/logo/logo-jshop.png" width={"100px"} alt="" />
                        </div>
                        {/* <div> */}
                        {/* <h3 className="text-xl mb-6 font-medium w-full text-center">Welcome back!</h3> */}
                        {/* </div> */}
                        <p className="text-center text-sm text-red-700">{error}</p>
                        <div className="mb-5">
                            {/* <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label> */}
                            <div className="mt-2">
                                <div className="p-1 items-center gap-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset  sm:max-w-md">
                                    <span className="ml-3">
                                        <FontAwesomeIcon className="text-gray-400" icon={faEnvelope} />
                                    </span>
                                    <input {...register("email")} type="email" name="email" id="username" autoComplete="username" className="focus:outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="email" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="mb-5">
                                {/* <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label> */}
                                <div className="mt-2">
                                    <div className="p-1 items-center gap-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                                        <span className="ml-3">
                                            <FontAwesomeIcon className="text-gray-400" icon={faLock} />
                                        </span>
                                        <input {...register("password")} type="password" name="password" id="username" autoComplete="username" className="focus:outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mb-5">
                            <div className="relative flex gap-x-3">
                                <div className="flex h-6 items-center">
                                    <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                                </div>
                                <div className=" leading-6">
                                    <label htmlFor="offers" className=" text-gray-900">Remember me</label>
                                </div>
                            </div>
                            <div>
                                <a href="#" className="underline underline-offset-4">Forgot password</a>
                            </div>
                        </div>
                        <button type="submit" className="login-btn mb-5">Sign in</button>
                        {/* <button type="submit" className="old-gray-btn mb-5">Login as vendor</button>
                    <button type="submit" className="old-gray-btn mb-5">Login as admin</button> */}
                    </div>

                </section>
            </form>
        </>
    );
}