import { useState } from "react";

const Searchbar = ({ onValueChange }) => {
    const [searchState, setSearch] = useState("");

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        onValueChange(searchState);
    }

    return (
        <>
            <form className="form-inline my-2 my-lg-0">
            <input onChange={onChangeHandler} autoFocus value={searchState} className="form-control mr-sm-2" type="search" placeholder="Search by name" aria-label="Search" />
            <button onClick={onClickHandler} className="btn btn-outline-dark my-2 my-sm-0" type="submit" id="navbar-search-on-character-page-btn">Search</button>
            </form>
        </>
    )
}

export default Searchbar;