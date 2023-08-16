import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [foodItem, setFoodItem] = useState([]);

  const addToCart = (id, name, tags, pizzaPrice, counter, price) => {
    setFoodItem((prevState) => [
      ...prevState,
      { id, name, tags, pizzaPrice, counter, price },
    ]);
    console.log(foodItem)
  };
  
  function mergeAndSumFoodItems(foodItem) {
  const mergedFoodItems = {};
  
  foodItem.forEach((item) => {
    const { id, name, tags, pizzaPrice, counter, price } = item;
    const key = `${id}-${price}`;

    if (!mergedFoodItems[key]) {
      mergedFoodItems[key] = { id, name, tags, pizzaPrice, counter, price };
    } else {
      mergedFoodItems[key].counter += counter;
    }
  });

  const result = Object.values(mergedFoodItems);
  return result;
}

  const mergedAndSummedFoodItems = mergeAndSumFoodItems(foodItem);
  
    const removeFromCart = (id, price) => {
      setFoodItem((prevFoodItem) => {
        return prevFoodItem.filter((food) => food.id !== id && food.price !== price);
      });
    };
 

  const increaseCounter = (id, price) => {
    const updatedFoodItems = mergedAndSummedFoodItems.map((item) => {
      if (item.id === id && item.price === price) {
        return { ...item, counter: item.counter + 1 };
      }
      return item;
    });
    setFoodItem(updatedFoodItems)
  }

  const removeCounter = (id, price) => {
    const updatedFoodItems = mergedAndSummedFoodItems.map((item) => {
      if (item.id === id && item.price === price){
        return { ...item, counter: item.counter - 1}
      }
      return item
    })
    setFoodItem(updatedFoodItems)
  }

  return (
    <CartContext.Provider
      value={{
        foodItem,
        addToCart,
        removeFromCart,
        mergedAndSummedFoodItems,
        increaseCounter,
        removeCounter
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
