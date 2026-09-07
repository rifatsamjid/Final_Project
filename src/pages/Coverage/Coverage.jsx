import React, { useRef } from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(search.toLowerCase()),
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 16);
    }
  };
  return (
    <div>
      <div className="bg-white p-9 my-5 rounded-2xl shadow-2xl">
        <h3 className="text-6xl font-extrabold text-secondary my-5">
          We are available in 64 districts
        </h3>
        <div className="my-3">
          <form onSubmit={handleSearch}>
            <label className="input rounded-3xl">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow"
                name="search"
                placeholder="Search"
              />
            </label>
          </form>
        </div>
        <div>
          <h4 className="text-3xl font-extrabold my-4">
            We deliver almost all over Bangladesh
          </h4>
        </div>
        <div className=" w-full h-200">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-200"
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {serviceCenters.map((center, index) => (
              <Marker
                key={index}
                position={[center.latitude, center.longitude]}
              >
                <Popup>
                  <strong>{center.district}</strong> <br /> Service Area:{" "}
                  {center.covered_area.join(", ")}.
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
