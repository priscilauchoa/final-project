import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import mapboxGeocode from "@mapbox/mapbox-sdk/services/geocoding";
import TextField from "@mui/material/TextField";

import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import "./mapBoxGeocode.css";
mapboxgl.accessToken =
    "pk.eyJ1IjoicHJpc2NpbGFmbG9yZXMiLCJhIjoiY2wyaHEyNnA0MGc5bzNjbm5ldm9zeWQwaCJ9.2wKNqQY375w7wVhbVi1PjQ";

export default function GeoSearch() {
    const [query, setQuery] = useState("");
    const [places, setPlaces] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState();

    const handleListItemClick = (event) => {
        setSelectedIndex(event);
        // console.log(selectedIndex);
    };

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
    fetch("/api/locations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: "Berlin",
            geoJSON: {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [125.6, 10.1],
                },
            },
        }),
    });

    return (
        <div className="map-query-container">
            <div>
                <TextField
                    id="adreess-input"
                    label="Adreess"
                    variant="standard"
                    onChange={handleIntputChange}
                />
                {/* {places.length > 0 && (
                    <ul className="map-query-options">
                        {places.map((place) => (
                            <li key={place.id}> {place.place_name} </li>
                        ))}
                    </ul>
                )} */}
            </div>

            <Box
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                <List component="nav" aria-label="main mailbox folders">
                    {places.map((place) => (
                        <ListItemButton
                            key={place.id}
                            onClick={(event) => handleListItemClick(event)}
                        >
                            <ListItemText primary={place.place_name} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </div>
    );
}
