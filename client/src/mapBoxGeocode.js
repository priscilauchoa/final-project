import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import mapboxGeocode from "@mapbox/mapbox-sdk/services/geocoding";
import TextField from "@mui/material/TextField";

import "./mapBoxGeocode.css";

export default function GeoMap() {
    const [query, setQuery] = useState("");
    const [places, setPlaces] = useState([]);

    const geocodeClient = mapboxGeocode({
        accessToken: mapboxgl.accessToken,
    });

    const handleIntputChange = (e) => setQuery(e.target.value);

    useEffect(() => {
        if (query.length < 3) return;

        // geocoding with countries
        geocodeClient
            .forwardGeocode({
                query,
                countries: ["de"],
                limit: 5,
            })
            .send()
            .then((response) => {
                setPlaces(response.body.features);
            });
    }, [query]);

    console.log("### places", places);

    return (
        <div className="map-query-container">
            <div>
                <TextField
                    id="adreess-input"
                    label="Adreess"
                    variant="standard"
                    onChange={handleIntputChange}
                />
                {places.length > 0 && (
                    <ul className="map-query-options">
                        {places.map((place) => (
                            <li key={place.id}> {place.place_name} </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
