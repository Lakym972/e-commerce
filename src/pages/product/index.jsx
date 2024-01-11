import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";


const ProductPage = () => {

  const { id } = useParams();

  const { dataFetched, loading, error } = useFetch({
    url: `https://passerelle-shop-api.julienpoirier-webdev.com/products/${id}`,
  });

  const { addToCart, removeOneFromCart, getQuantityInCart, isProductInCart } = useContext(CartContext);

  return (
    <div className="flex justify-center border-y">
      {dataFetched ? (
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-2">{dataFetched.name}</h1>
          <p className="text-gray-600 mb-2">{dataFetched.description}</p>
          <p className="text-green-600 font-bold text-lg mb-2">
            {dataFetched.price} €
          </p>
          <p className="text-gray-700 mb-4">En stock : {dataFetched.stock}</p>
          <div className="w-[400px]">
            <img
              src={dataFetched.mainImageURL}
              alt={dataFetched.name}
              className="w-full rounded-lg"
            />
          </div>

          {isProductInCart(id) ? (
            <div className="flex items-center mt-4">
              <button
                onClick={() => addToCart(dataFetched)}
                className="bg-blue-500 text-white px-4 py-2 rounded-l-lg"
              >
                +
              </button>
              <div className="px-4 py-2 border-t border-b border-gray-300">
                Quantité dans le panier: {getQuantityInCart(dataFetched._id)}
              </div>
              <button
                onClick={() => removeOneFromCart(dataFetched)}
                className="bg-red-500 text-white px-4 py-2 rounded-r-lg"
              >
                -
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                addToCart(dataFetched);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
            >
              Ajouter au panier
            </button>
          )}
        </div>
      ) : null}
      {loading ? <p>Chargement</p> : null}
      {error ? <p>{error}</p> : null}
    </div>
  );
};

export default ProductPage;