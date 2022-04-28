// import { useEffect, useRef, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import TextField from "@mui/material/TextField";
// import "./mapBox.css";
// import GeoMap from "./mapBoxGeocode.js";

// mapboxgl.accessToken =
//     "pk.eyJ1IjoicHJpc2NpbGFmbG9yZXMiLCJhIjoiY2wyaHEyNnA0MGc5bzNjbm5ldm9zeWQwaCJ9.2wKNqQY375w7wVhbVi1PjQ";

// // import ReactMapGL from "react-map-gl";
// // const { REACT_APP_MAPBOX_ACCESS_TOKEN } = require("../secrets.json");

// export default function Mapbox() {
//     console.log("The Map changed");
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(13.383309);
//     const [lat, setLat] = useState(52.516806);
//     const [zoom, setZoom] = useState(9);

//     useEffect(() => {
//         if (map.current) return; // initialize map only once
//         map.current = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: "mapbox://styles/mapbox/streets-v11",
//             center: [lng, lat],
//             zoom: zoom,
//         });
//     }, [map, mapContainer]);

//     useEffect(() => {
//         if (!map.current) return; // wait for map to initialize
//         map.current.on("move", () => {
//             setLng(map.current.getCenter().lng.toFixed(4));
//             setLat(map.current.getCenter().lat.toFixed(4));
//             setZoom(map.current.getZoom().toFixed(2));
//         });
//     }, [map]);

//     return (
//         <>
//             <section className="map-container">
//                 <GeoMap />
//                 <div>
//                     <TextField
//                         id="adreess-input"
//                         label="Adreess"
//                         variant="standard"
//                     />
//                 </div>
//                 <div ref={mapContainer} className="map" />
//             </section>
//         </>
//     );
// }

import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useState, useRef, useCallback } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

const TOKEN =
    "pk.eyJ1IjoicHJpc2NpbGFmbG9yZXMiLCJhIjoiY2wyaHEyNnA0MGc5bzNjbm5ldm9zeWQwaCJ9.2wKNqQY375w7wVhbVi1PjQ";
// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens

// import ReactMapGL from "react-map-gl";
// const { REACT_APP_MAPBOX_ACCESS_TOKEN } = require("../secrets.json");

export default function Mapbox() {
    const [value, setValue] = useState("");
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
    });
    const mapRef = useRef();
    const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
    );

    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    const handleGeocoderViewportChange = useCallback((newViewport) => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };

        return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides,
        });
    }, []);

    const onSearchLocation = (e) => {
        // console.log("geocode input changed", e);
        console.log("geocode input changed", e.text);
        setValue(e.result);
        console.log(
            "geocode input changed",
            e.text,
            e.geometry.coordinates[0],
            e.geometry.coordinates[0]
        );
        console.log("a request to locations was made");

        fetch("/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((rows) => {
                console.log("rows front end", rows);
            })
            .catch((err) => {
                console.log("err", err);
            });
    };
    // console.log("value", value);

    return (
        <section id="map-container">
            <div style={{ height: "60vh", width: "80vw" }}>
                <MapGL
                    ref={mapRef}
                    {...viewport}
                    width="80vw"
                    height="80vw"
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={TOKEN}
                >
                    <Geocoder
                        mapRef={mapRef}
                        onViewportChange={handleGeocoderViewportChange}
                        mapboxApiAccessToken={TOKEN}
                        position="top-left"
                        onResult={onSearchLocation}
                    />
                </MapGL>
            </div>
        </section>
    );
}
