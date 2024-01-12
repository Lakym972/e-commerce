import { useReducer, useState } from "react";
import CartContext from "./CartContext";
import reducer from "../../reducer/cartReducer/reducer";


const CartContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, {cart: []});
  
  const {cart} = state;


  const isProductInCart = (itemId) => {
    if (cart === null) {
      return false;
    }
    const isInCart = cart.find((item) =>{
      item.productId === itemId
      return item.productId === itemId
    });

    return Boolean(isInCart);
  };

  const getQuantityInCart = (itemId) => {
    const myItem = cart.find((oneItemInCart) => {
      return oneItemInCart.productId === itemId;
    })

    console.log(myItem);

    if (myItem) {
      return myItem.quantity;
    }
    return 0;
  }
  const getTotalNumberOfItemsInCart = () => {
    let total = 0;
    if (cart) {
      total = cart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    }
    return total;
  };

  return (
    <CartContext.Provider value={{ cart, getQuantityInCart, isProductInCart, state, dispatch, getTotalNumberOfItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;