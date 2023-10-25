import { useLocations } from "../api/useData";
import React, { useState } from "react";
import Location from "./Location";
import NavBarForLocationPage from "./NavBarForLocationPage";

const LocationList = () => {
  const [page, setPage] = useState(1);
  const locations = useLocations(page);

  console.log("Locations data: ");
  console.log(locations);

  return (
    <>
      <>
      <NavBarForLocationPage />
      </>
      {locations === "Loading..." ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="location-container">
            {locations.results.map((location, index) => (
              <Location
                key={index}
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                image={location.image}
              />
            ))}
          </div>
          <div className="buttons-location-page">
            {page === 1 ? (
              <button 
                className="btn btn-outline-light" disabled
              >
                {"￩ Prev"}
            </button>
          ) : (
              <button
                onClick={() => setPage(page - 1)}
                className="btn btn-outline-light"
              >
                {"￩ Prev"}
              </button>
            )}
            {locations.info.pages === page ? (
              <button 
                className="btn btn-outline-light" disabled
              >
                {"Next ￫"}
            </button>
          ) : (
              <button
                onClick={() => setPage(page + 1)}
                className="btn btn-outline-light"
              >
                {"Next ￫"}
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default LocationList;
