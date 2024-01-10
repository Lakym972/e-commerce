import Button from "../common/Button.jsx"
import Typography from "../common/Typography.jsx"
import { useEffect, useState } from "react"


function Listing() {

    const [items, setItems] = useState([])

    useEffect(()=> {
        const data = async () => {
            const response = await fetch('https://passerelle-shop-api.julienpoirier-webdev.com/products');
            const results = await response.json();
            setItems(results);

            console.log(results);
        }
        data();
    },[]);

    return (
        <>
        <Typography customClasses="mt-[5rem] mb-[2rem]" tag="h2">New ceramics</Typography>

        <div className="flex justify-between">{
            items.length > 0 ? items.map((item) => {
                return(
                <div key={item}>
                    <img className="w-[19rem] h-[23rem]" src={item.mainImageURL} alt="figurine" />
                    <Typography tag="h4">{item.name}</Typography>
                    <p>{item.price}</p>
                </div>
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