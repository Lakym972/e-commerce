import CART_TYPES from "./action.js";

const reducer = (state, action) => {
    switch (action.type) {
      case CART_TYPES.ADD:
        if (
          state.cart.find((item) => item.productId === action.payload.item._id)
        ) {
          const newCart = state.cart.map((itemInCart) => {
            if (itemInCart.productId === action.payload.item._id) {
              return {
                ...itemInCart,
                quantity: itemInCart.quantity + 1,
              };
            }
            return itemInCart;
          });
  
          return { ...state, cart: newCart };
        } else {
          return {
            ...state,
            cart: [
              ...state.cart,
              { ...action.payload.item, productId: action.payload.item._id, quantity: 1 },
            ],
          };
        }
      case CART_TYPES.REMOVE_ONE_QUANTITY:
        if (
          state.cart.find((item) => item.productId === action.payload.item._id)
        ) {
          const itemToUpdate = state.cart.find(
            (item) => item.productId === action.payload.item._id
          );
  
          if (itemToUpdate.quantity === 1) {
            const newCart = state.cart.filter(
              (testedItem) => testedItem.productId !== itemToUpdate.productId
            );
  
            return { ...state, cart: newCart };
          } else {
            const newCart = state.cart.map((testedItem) => {
              if (testedItem.productId !== itemToUpdate._id) {
                return {
                  productId: testedItem.productId,
                  quantity: testedItem.quantity - 1,
                };
              } else {
                return testedItem;
              }
            });
  
            return { ...state, cart: newCart };
          }
        } else {
          throw new Error("Le produit ciblé n'est pas dans le panier");
        }
        case CART_TYPES.REMOVE_ONE_ITEM:
        if (state.cart.find((item) => {
          return item.productId === action.payload.item.productId
        })) {
          const newCart = state.cart.filter(
              (testedItem) => testedItem.productId !== action.payload.item.productId
          )
          return { ...state, cart: newCart }
        }
        console.log("Le produit ciblé n'est pas dans le panier");
        return state;

        case CART_TYPES.CLEAR:
            return { ...state, cart: [] };
      default:
        break;
    }
  };

export default reducer;