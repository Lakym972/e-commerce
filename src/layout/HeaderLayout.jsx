import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/index.jsx";

const HeaderLayout = () => {
    return (
    <>
        <div className="px-2 gap-3">
            <div className="flex justify-between">
                <img src="./src/assets/icons/search.svg" alt="loupe" />
                <div>LOGO</div>
                <div className="flex gap-1">
                    <img src="./src/assets/icons/cart.svg" alt="panier" />
                    <img src="./src/assets/icons/profile.svg" alt="panier" />
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