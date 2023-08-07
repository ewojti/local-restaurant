import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [foodItem, setFoodItem] = useState([])

    const addToCart = (name, tags, pizzaPrice, count ) => {
        setFoodItem((prevState) => [...prevState, { name, tags, pizzaPrice, count }])
    }
    return (
        <CartContext.Provider value={{ foodItem, addToCart }}>{children}</CartContext.Provider>
    )
}

export default CartContext; 