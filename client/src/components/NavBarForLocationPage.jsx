import { Link } from "react-router-dom";
import Logo from "../img/rick_and_morty_home_logo.png"

const NavBarForLocationPage = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">            
            <img src={Logo} alt="Logo" id="navbar-logo"/>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="btn btn-outline-dark my-2 my-sm-0" type="button" to="/characters" id="navbar-character-btn">Characters</Link>
            </li>
            </ul>
        </div>
        </nav>
    </>
    )
}

export default NavBarForLocationPage;