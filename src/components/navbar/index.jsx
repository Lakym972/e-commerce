import { Link, useLocation } from "react-router-dom";
import Typography from "../common/Typography";
import { useContext } from "react";
import { UserContext } from "../../main";

const Navbar = () => {

    const {user} = useContext(UserContext);
    let location = useLocation();

    console.log(location);

    const paths = [
        {
          path: "/",
          name: "Accueil",
          isAuthenticated: false,
        },
        {
          path: "/nos-produits",
          name: "Nos produits",
        },
      ];

      const disconnectedPaths = [
        {
          path: "/connexion",
          name: "Connexion",
        },
        {
          path: "/inscription",
          name: "Inscription",
        },
      ];
    

    return (
        <>
        <div className="navbar">
            <ul className="flex gap-3 justify-center text-primary">
                {paths.map((el) => {
                    return (
                        <Link to={el.path} key={el.path}>
                            <Typography customClasses={el.path === location.pathname ? "underline" : null} tag="li">{el.name}</Typography>
                        </Link>
                    )
                })}
                {!user
                ? disconnectedPaths.map((element) => {
                    return (
                        <Link to={element.path} key={element.path}>
                            <Typography customClasses={element.path === location.pathname ? "underline" : null} tag="li">{element.name}</Typography>
                        </Link>
                    )
                }):null}
            </ul>
        </div>
        </>
    )
}

export default Navbar;