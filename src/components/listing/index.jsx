import { Link } from "react-router-dom";
import Button from "../common/Button.jsx"
import Typography from "../common/Typography.jsx"
import useFetch from "../../hooks/useFetch.js";


function Listing() {

    const { dataFetched, loading, error } = useFetch({
        url: "https://passerelle-shop-api.julienpoirier-webdev.com/products",
      });

    return (
        <>
        {loading ? <p>Chargement</p> : null}
        {error ? <p>{error}</p> : null}
        <Typography customClasses="mt-[5rem] mb-[2rem]" tag="h2">New ceramics</Typography>

        <div className="flex justify-between">{
            dataFetched && dataFetched.length > 0 ? dataFetched.map((item) => {
                return(
                <Link key={item._id} to={`/produit/${item._id}`}>
                    <img className="w-[19rem] h-[23rem]" src={item.mainImageURL} alt="figurine" />
                    <Typography tag="h4">{item.name}</Typography>
                    <p>{item.price}</p>
                </Link>
                )
            }) 
            : null
        }
        </div>
        <div className="flex justify-center mt-[3rem]">
        <Button variant="primary">View collection</Button>
        </div>
        </>
    )
}

export default Listing