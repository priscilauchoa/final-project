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
    const [showList, setShowList] = useState(true);
    const [labelInputAdress, setLabelInputAdress] = useState("");

    const handleListItemClick = (event) => {
        setSelectedIndex(event);
        setShowList(false);
        setLabelInputAdress(places[0].text);

        console.log("&&&&", selectedIndex);
    };

    const geocodeClient = mapboxGeocode({
        accessToken: mapboxgl.accessToken,
    });

    const handleIntputChange = (e) => {
        setLabelInputAdress("");

        setShowList(true);
        setQuery(e.target.value);
    };
    console.log("places", places);
    // const [placeName, setPlaceName] = useState();
    // const [long, setLong] = useState("");
    // const [lat, setLat] = useState("");
    // const [type, setType] = useState("");
    // const [typeGeometry, setTypeGeometry] = useState("");
    // const handleClick = () => {
    // setLong(places[0].geometry.coordinates[0]);
    // setLat(places[0].geometry.coordinates[1]);
    // setType(places[0].type);
    // setTypeGeometry(places[0].geometry.type);
    // placeName(places[0].place_name);

    //     setLabelInputAdress("");
    //     fetch("/api/locations", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             name: "Berlin",
    //             geoJSON: {
    //                 type: type,
    //                 geometry: {
    //                     type: typeGeometry,
    //                     coordinates: [long, lat],
    //                 },
    //             },
    //         }),
    //     });
    // };

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
                // setType(places[0].type);
            });
    }, [query]);

    return (
        <div>
            <div>
                <TextField
                    id="adreess-input"
                    label="Address"
                    variant="standard"
                    defaultValue={labelInputAdress}
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
            {showList && (
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <List component="nav" aria-label="main mailbox folders">
                        {places.map((place) => (
                            <ListItemButton key={place.id}>
                                <ListItemText
                                    primary={place.place_name}
                                    onClick={(place) =>
                                        handleListItemClick(place)
                                    }
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            )}
        </div>
    );
}
