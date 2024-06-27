import { useState } from "react";
import CartContext from "./cart.context";
import axios from "axios";

export default function Provider({ children }: React.PropsWithChildren) {

    const [cartItems, setCartItems] = useState<any>([]);

    function setCart(itemId: string) {
        fetchProductById(itemId);
    }

    async function fetchProductById(itemId: string) {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/product/' + itemId);
            console.log(response)
            const data = response.data.data;

            // check the element is already in the cartItems array
            const isExists = cartItems.some((element: any) => element._id == itemId)
            if (!isExists) {
                setCartItems([...cartItems, data])
            }

        } catch (e) {

        }
    }
    console.log("cartItems", cartItems);

    return (
        <CartContext.Provider value={{ setCart, cartItems }}>
            {children}
        </CartContext.Provider>
    )
}