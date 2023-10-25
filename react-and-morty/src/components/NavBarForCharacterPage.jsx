import { Link } from "react-router-dom";
import Logo from "../img/rick_and_morty_home_logo.png"
import Searchbar from "./Searchbar";

const NavBarForCharacterPage = ({ onSerachbarValueChange }) => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Logo" id="navbar-logo"/>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="btn btn-outline-dark my-2 my-sm-0" type="button" to="/locations" id="navbar-location-btn">Locations</Link>
            </li>
            </ul>
            <Searchbar onValueChange={onSerachbarValueChange} />
        </div>
        </nav>
    </>
    )
}

export default NavBarForCharacterPage;