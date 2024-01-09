import Button from "../common/Button.jsx"
import Typography from "../common/Typography.jsx"


function Listing() {

    const listing = [
        {
            img : "./src/assets/img/right.png",
            title : "The Dandy chair",
            price : "£250"
        },
        {
            img : "./src/assets/img/vases.png",
            title : "Rustic Vase Set",
            price : "£155"
        },
        {
            img : "./src/assets/img/bottle.png",
            title : "The Silky Vase",
            price : "£125"
        },
        {
            img : "./src/assets/img/lampe.png",
            title : "The Lucy Lamp",
            price : "£399"
        }
    ]

    return (
        <>
        <Typography customClasses="mt-[5rem] mb-[2rem]" tag="h2">New ceramics</Typography>

        <div className="flex justify-between">{
            listing.map(list =>
            <div key={list}>
                <img className="w-[19rem] h-[23rem] mb-[1.5rem]" src={list.img} alt="image produit" />
                <Typography customClasses="mb-[0.5rem]" tag="h4">{list.title}</Typography>
                <p>{list.price}</p>
            </div>
            )}
        </div>
        <div className="flex justify-center mt-[3rem]">
        <Button variant="primary">View collection</Button>
        </div>
        </>
    )
}

export default Listing