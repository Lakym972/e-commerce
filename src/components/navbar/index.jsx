import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let location = useLocation();

    console.log(location);

    return (
        <>
        <div>
            <ul className="flex gap-3 justify-center text-primary">
                <li className="hover:text-dark_primary"><Link to="/">Home</Link></li>
                <li className="hover:text-dark_primary"><Link to="/nos-produits" >Nos Produits</Link></li>
                <li className="hover:text-dark_primary"><Link to="/panier">Panier</Link></li>
                <li className="hover:text-dark_primary"><Link to="/connexion">Connexion</Link></li>
                <li className="hover:text-dark_primary"><Link to="/mon-compte">Mon Compte</Link></li>
                <li className="hover:text-dark_primary"><Link to="/inscription">Inscription</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;