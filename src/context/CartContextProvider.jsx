import { useState } from "react";
import CartContext from "./CartContext";


const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

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

  const addToCart = (item) => {
    const isInCart = isProductInCart(item._id);
    if (isInCart) {
      setCart(
        cart.map((itemInCart) => {
          if (itemInCart.productId === item._id) {
            return {
                  productId: itemInCart.productId,
                  quantity: itemInCart.quantity + 1,
                }
          }
          return itemInCart;
        })
      )
    } else {
      setCart([...cart,
        {
          productId: item._id,
          quantity: 1,
        }
      ])
    }
  };

  const removeOneFromCart = (item) => {
    const isInCart = isProductInCart(item._id);
    if (isInCart) {
      const myItemInCart = cart.find((oneItemInCart) => {
        return oneItemInCart.productId === item._id;
      })
      if (myItemInCart.quantity === 1) {
        setCart(cart.filter((oneItem) => {
            oneItem.productId !== item._id
          return;
        }))
      } else {
        setCart(cart.map((oneItemInCart) => {
          if (oneItemInCart.productId === item._id) {
            return {
              productId: oneItemInCart.productId,
              quantity: oneItemInCart.quantity - 1,
            }
          }
          return oneItemInCart;
        }))
      }
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeOneFromCart, getQuantityInCart, setCart, isProductInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;