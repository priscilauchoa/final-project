import { useEffect, useState } from "react";
import mapboxGeocode from "@mapbox/mapbox-sdk/services/geocoding";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

import "./mapBoxGeocode.css";
import { ACCESS_TOKEN } from "./mapBoxConstants";

const geocodeClient = mapboxGeocode({
    accessToken: ACCESS_TOKEN,
});

export default function GeoSearch({ onItemSelected }) {
    const [query, setQuery] = useState("");
    const [places, setPlaces] = useState([]);
    const [showList, setShowList] = useState(false);

    const handleListItemClick = (place) => {
        setShowList(false);
        setQuery(place.place_name);
        if (onItemSelected) onItemSelected(place);
    };

    const handleFocus = () => {
        setShowList(true);
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
                onFocus={handleFocus}
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
