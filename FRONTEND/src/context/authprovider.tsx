import { useState } from "react";

export default function AuthProvider({children}:React.PropsWithChildren){

    const [token,setToken] = useState(null);
    




    return (
        <>
            {children}
        </>
    );
    
}