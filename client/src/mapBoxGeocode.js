import { useEffect, useState } from "react";
import mapboxGeocode from "@mapbox/mapbox-sdk/services/geocoding";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

import "./mapBoxGeocode.css";

const geocodeAccessToken =
    "pk.eyJ1IjoicHJpc2NpbGFmbG9yZXMiLCJhIjoiY2wyaHEyNnA0MGc5bzNjbm5ldm9zeWQwaCJ9.2wKNqQY375w7wVhbVi1PjQ";
const geocodeClient = mapboxGeocode({
    accessToken: geocodeAccessToken,
});

export default function GeoSearch({ onItemSelected }) {
    const [query, setQuery] = useState("");
    const [places, setPlaces] = useState([]);
    const [showList, setShowList] = useState(false);

    // console.log('### onItemSelected', onItemSelected);

    const handleListItemClick = (place) => {
        setShowList(false);
        setQuery(place.place_name);
        if (onItemSelected) onItemSelected(place);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

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
                setShowList(true);
            });
    }, [query]);

    return (
        <div className="geo-container">
            <TextField
                id="adreess-input"
                label="Address"
                variant="standard"
                value={query}
                placeholder="Gartenstrasse 18, 10115 Berlin"
                onChange={handleInputChange}
            />
            {showList && (
                <Paper className="address-list" elevation={3}>
                    <List component="nav" aria-label="main mailbox folders">
                        {places.map((place) => (
                            <ListItemButton key={place.id}>
                                <ListItemText
                                    primary={place.place_name}
                                    onClick={() => handleListItemClick(place)}
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Paper>
            )}
        </div>
    );
}
