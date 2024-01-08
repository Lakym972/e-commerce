import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/index.jsx";

const HeaderLayout = () => {
    return (
    <>
        <div>
            <div>LOGO</div>
            
            <Navbar />
        </div>
        <Outlet />
    </>
    )
}

export default HeaderLayout;