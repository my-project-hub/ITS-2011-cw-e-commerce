import { useForm } from "react-hook-form";
import { GoogleAndAppleSignInBtn } from "../../component/button.component";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import 'dotenv/config'

export default function CusotmerLogin() {



    const [error, setError] = useState("");
    const {handleSubmit, register, formState: { errors }} = useForm();
    const navigate = useNavigate()
    // env.config()

    function onSubmit(data:any){
        setError("");
        // console.log(process.env)
        fetch("http://localhost:5000/api/v1/auth/signin",{
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
                navigate({pathname:"/"})
            }
            
        });
    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        {/* <img width={"100px"} className=" mr-2" src="https://remosnextjs.vercel.app/images/logo/logo.png" alt="logo" /> */}
                        
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <GoogleAndAppleSignInBtn />
                            <p className="text-center text-sm text-red-700">{error}</p>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input {...register("email",{required:"please enter email address"})} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    <ErrorMessage className="text-sm text-red-700" name="email" message="please enter email address" as={"p"} errors={errors}/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input {...register("password",{required:"please enter password"})} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    <ErrorMessage className="text-sm text-red-700" name="password" message="please enter email address" as={"p"} errors={errors}/>

                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}