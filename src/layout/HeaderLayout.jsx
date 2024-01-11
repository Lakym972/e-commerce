import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/index.jsx";

const HeaderLayout = () => {
    const paths = [
        {
          path: "/panier",
          name: "Panier",
          img: "./src/assets/icons/cart.svg",
          alt: "panier"
        },
        {
          path: "/mon-compte",
          name: "Mon compte",
          img: "./src/assets/icons/profile.svg",
          alt: "user"
        },
      ];
    return (
    <>
        <div className="px-2 gap-3">
            <div className="flex justify-between">
                <img src="./src/assets/icons/search.svg" alt="loupe" />
                <div>LOGO</div>
                <div className="flex gap-2">
                {
                    paths.map((el) => {
                        return(
                        <Link to={el.path} key={el.name}>
                            <img src={el.img} alt={el.alt} />
                        </Link>
                        )
                    })
                }
                </div>
            </div>
            <hr />
            <Navbar />
        </div>
        <Outlet />
    </>
    )
}

export default HeaderLayout;