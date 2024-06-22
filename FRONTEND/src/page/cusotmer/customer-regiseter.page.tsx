import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { GoogleAndAppleSignInBtn } from "../../component/button.component";
import { useForm, SubmitHandler, } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {redirect} from 'react-router-dom'




interface IRegisterForm {

    fullName: string,
    email: string,
    password: string,
    confirmPassword:string
}
export default function CustomerRegister() {
    
    const {reset, register, handleSubmit, formState: { errors }, setError } = useForm<IRegisterForm>();
    const [password , setPassword ] = useState({password:"",confirmPassword:""});


    const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
        if(!(password.password === password.confirmPassword)){
            setError("confirmPassword",{type:"custom",message:"password not equal"})
        }else{
            const response = await fetch("http://localhost:5000/api/v1/user", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if(!response.ok){
            
            }else{
                reset()
                redirect("/login")
            }
       
        }
        console.log(data)
    };

    function handleClick(event:any){
        const name = event.target.name;
        const value = event.target.value;
        console.log(value)
        setPassword(prev => {
            return {...prev,[name]:value}
        })
    }



    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"> */}
                        {/* <img width={"100px"} className=" mr-2" src="https://remosnextjs.vercel.app/images/logo/logo.png" alt="logo" /> */}

                    {/* </a> */}
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input {...register("fullName", {required:"enter full name"})} type="name" name="fullName" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Daniel max" />
                                    <ErrorMessage className="text-red-500 text-sm font-medium" errors={errors} name="fullName" as="p" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input {...register("email",{required:"enter email address"})} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                    <ErrorMessage className="text-red-500 text-sm font-medium" errors={errors} name="email" as="p" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input {...register("password",{required: "enter password"})} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleClick} />
                                    <ErrorMessage className="text-red-500 text-sm font-medium" errors={errors} name="password" as="p" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input {...register("confirmPassword",{required: "enter the above same password"})} type="confirmPassword" name="confirmPassword" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleClick}/>
                                    <ErrorMessage className="text-red-500 text-sm font-medium" errors={errors} name="confirmPassword" as="p" />
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account <a href="login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                                </p>
                                <GoogleAndAppleSignInBtn />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}