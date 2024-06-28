import { useEffect, useLayoutEffect, useState } from "react";
import { UserContext } from "./context";
import axios, { } from "axios";

export default function AuthProvider({ children }: React.PropsWithChildren) {

    const [token, setToken] = useState(null);

    useEffect(() => {
        validateUser();
    }, [])

    async function validateUser() {
        try {
            const response = await axios.post('http://localhost:5000/api/v1/auth/refreshToken');
            setToken(response.data.data.accessToken);
        } catch (e) {
            console.error(e);
        }
    }

    useLayoutEffect(() => {
        const refreshInterceptor = axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;

                if(error.response.status === 403 && error.response.data.message === 'unauthorized'){
                    try{
                        const response = await axios.post('http://localhost:5000/api/v1/auth/refreshToken');
                        setToken(response.data.data.refreshToken);

                        originalRequest.headers.authorization =`Bearer ${response.data.response.data.data.accessToken}`
                        originalRequest._retry = true;
                        return axios(originalRequest);
                    }catch(e){
                        console.error(e);
                        setToken(null)
                    }
                }
                return Promise.reject(error);
            }
        )

    });




    return (
        <UserContext.Provider value={{ token }}>
            {children}
        </UserContext.Provider>
    );

}