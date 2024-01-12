import CartContext from "../../context/CartContext/CartContext.jsx";
import Typography from "../../components/common/Typography";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import CART_TYPES from "../../reducer/cartReducer/action";

const CartPage = () => {

  const { cart, dispatch } = useContext(CartContext);

  const { dataFetched, loading, error } = useFetch({
    url: "https://passerelle-shop-api.julienpoirier-webdev.com/products",
  });

  const getTotalAndUpdateItemsInCart = () => {
    if (!dataFetched) {
      return 0;
    }
    return cart?.reduce((acc, item) => {
      for (let i = 0; i < dataFetched.length; i++) {
        if (item.productId === dataFetched[i]._id) {
          item.price = dataFetched[i].price;
          item.name = dataFetched[i].name;
        }
      }

      return acc + item.price * item.quantity;
    }, 0);
  };

  console.log(cart);

  if (loading) return <p>Chargement</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Typography tag="h1">Cart</Typography>

      <div className="w-10/12">
        {cart?.length > 0
          ? cart.map((product) => (
              <div
                className="flex w-full justify-between m-20"
                key={product.productId}
              >
                <Typography tag="h2">{product.name}</Typography>
                <div className="flex">
                  <div className="m-2">
                    <button onClick={() =>  dispatch({ type: CART_TYPES.ADD, payload: {item: {...product, _id: product.productId}} })} className="bg-blue-500 text-white px-4 py-2 m-2 rounded">
                      +
                    </button>
                  </div>
                  <Typography tag="h2">{product.quantity}</Typography>
                  <button onClick={() =>  dispatch({ type: CART_TYPES.REMOVE_ONE_QUANTITY, payload: {item: {...product, _id: product.productId}} })} className="bg-red-500 text-white px-4 py-2 m-2 rounded">
                    -
                  </button>
                </div>
                <div>
                  <button onClick={() =>  dispatch({ type: CART_TYPES.REMOVE_ONE_ITEM, payload: {item: product} })} className="bg-dark_primary text-white px-4 py-2 rounded-l-lg">
                    Supprimer tout
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>

      <div>
        <Typography tag="h2">
          Total : {getTotalAndUpdateItemsInCart()}€
        </Typography>

        <Typography tag="h2">
          Total items : {cart?.reduce((acc, item) => acc + item.quantity, 0)}
        </Typography>
      </div>

      <div>
        <button onClick={() =>  dispatch({ type: CART_TYPES.CLEAR })}>Vider le panier</button>

        <button>Commander</button>
      </div>
    </div>
  );
};

export default CartPage;