import React from "react";
import Logo from "../img/rick_and_morty_logo.png"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <img src={Logo} alt="Blue logo with white outline and green glow on a black background of Rick and Morty with credits to the creators Justin Royland and Dan Harmon" className="Logo"/>
            <div className="break"></div>
            <Link to="/characters" type="button" className="btn btn-outline-light" id="characters-btn">Characters</Link>
            <Link to="/locations" type="button" className="btn btn-outline-light" id="locations-btn">Locations</Link>
            <div className="break"></div>
            <h4>Wubba Lubba Dub Dub! Click <mark className="blue"> the left button </mark> for every inert chunk of randomly assembled molecules and <mark className="green"> the right one </mark> for every universe you can drift in.</h4>
        </div>
    )
}

export default Home;