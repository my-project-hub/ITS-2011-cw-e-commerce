import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import axiosRetry from 'axios-retry'
import { useNavigate } from "react-router";

axiosRetry(axios, { retries: 3 });

const api = axios.create({
    timeout: 1000,
    withCredentials: true,
    
});

function useAuth() {
    const navigate = useNavigate();
    const [token, setToken] = useState<any>();

    useEffect(() => {
        fetchMe();
    }, []);

    // useEffect(() => {
    //     if(!token) navigate("/login")
    // },[token])

    async function fetchMe() {
        try {
            const response = await api.post('http://localhost:5000/api/v1/auth/refreshToken');
            // console.log(response.data);
            if(!response.data.data.accessToken) navigate("/login")
            setToken(response.data.data.accessToken);
            
        } catch (e) {
            navigate("/login")
            console.error(e);
        }
    }

    useLayoutEffect(() => {
        
        const interceptor = api.interceptors.request.use((config:any) => {
            config.headers.Authorization = !config._retry && token ?  `$Bearer ${token}` : config.headers.Authorization;
            return config;
        });

        return () => {
            api.interceptors.response.eject(interceptor);
        };
    }, [token]);

    useLayoutEffect(() => {
        console.log("dfsafdsf")
        const interceptor = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                // const originalRequest = error.config;
                // if (error.response && error.response.status === 401 && !originalRequest._retry) {
                //     originalRequest._retry = true;
                //     try {
                //         console.log("aaaaaaaaaaaaaa")
                //         const response = await api.post('http://localhost:5000/api/v1/auth/refreshToken/1');
                //         console.log("response",response.data);
                //         setToken(response.data.accessToken);
                //         originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                //         return api(originalRequest);
                //     } catch (e) {
                //         console.error(e);
                //         // Handle token refresh failure
                //         // Redirect to login page or handle the error as needed
                //     }
                // }
                const originalRequest = error.config;

                // if(error.response.status === 403 && error.response.data.message === 'unauthorized'){
                    try{
                        const response = await api.post('http://localhost:5000/api/v1/auth/refreshToken');
                        setToken(response.data.data.refreshToken);

                        originalRequest.headers.authorization =`Bearer ${response.data.data.accessToken}`
                        originalRequest._retry = true;
                        return axios(originalRequest);
                    }catch(e){
                        console.error(e);
                        setToken(null)
                    }
                // }
                return Promise.reject(error);
            }
        );

        return () => {
            api.interceptors.response.eject(interceptor);
        };
    }, [token]);

    return { api, token };
}

export default useAuth;



// import axios from "axios";
// import { useEffect, useLayoutEffect, useState } from "react";
// import axiosRetry from 'axios-retry'

// axiosRetry(axios, { retries: 3 });

// const api = axios.create({
//     timeout: 1000,
    
// })


// function useAuth() {
//     // return React.useContext("")

//     const [token, setToken] = useState();

//     useEffect(() => {
//         fetchMe();
//     }),[];

//     async function fetchMe() {

//         try {

//             const response = await api.post('http://localhost:5000/api/v1/auth/refreshToken')
//             console.log(response.data);
//             setToken(response.data.accessToken)

//         } catch (e) {
//             console.error(e);

//         }

//     }

//     useLayoutEffect(() => {


//         api.interceptors.response.use((response) => {
//             return response;
//         }, async (error) => {
//             try {
//                 const originalRequest = error.config;
//                 console.log(originalRequest)

//                 const response = await api.post('http://localhost:5000/api/v1/auth/refreshToken')
//                 console.log(response.data);
//                 setToken(response.data.accessToken)

//                 originalRequest.headers.authorization = `Bearer ${response.data.data.accessToken}`
//                 originalRequest._retry = true;

//             } catch (e) {
//                 console.error(e);
//             }

//             return Promise.reject(error)
//         });

//     }, [])




//     return { api, token }
// }

// export default useAuth;