// import { useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
// import * as React from "react";
import GeoSearch from "../mapBoxGeocode";
import * as React from "react";
import Button from "@mui/material/Button";

import {
    TextField,
    Typography,
    InputLabel,
    Box,
    Select,
    FormControl,
    MenuItem,
} from "@material-ui/core";

export function NewNeedy() {
    const [newNeedy, setNeedy] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState();
    const [geoSearch, setGeoSearch] = useState([]);

    // const newNeedy = useSelector((state) => state?.newNeedy);
    // const newNeedyContainer = useRef();

    console.log("newneedy))))))--->", newNeedy);
    console.log("name))))))--->", name);
    console.log("cat))))))--->", category);
    console.log("desc))))))--->", description);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeGeo = (event) => {
        console.log("event geo((((", event);
        setCategory(event.target.value);
        setLong(event.places[0].geometry.coordinates[0]);
        setLat(event.places[0].geometry.coordinates[1]);
        setType(event.places[0].type);
        setTypeGeometry(event.places[0].geometry.type);
        setPlaceName(event.places[0].place_name);
    };

    const [placeName, setPlaceName] = useState();
    const [long, setLong] = useState("");
    const [lat, setLat] = useState("");
    const [type, setType] = useState("");
    const [typeGeometry, setTypeGeometry] = useState("");
    // const handleClick = () => {

    //
    console.log("placessss in new neddies ,", geoSearch);
    const handleClick = () => {
        console.log("foi clicado");

        fetch("/api/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "Berlin",
                geoJSON: {
                    type: type,
                    geometry: {
                        type: typeGeometry,
                        coordinates: [long, lat],
                    },
                },
            }),
        });
    };

    return (
        <>
            <section className="new-needy-container">
                <Typography variant="h5">Register</Typography>

                <TextField
                    id="adreess-input"
                    label="First Name"
                    variant="standard"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <TextField
                    id="adreess-input"
                    label="Last Name"
                    variant="standard"
                    onChange={(event) => {
                        setNeedy(event.target.value);
                    }}
                />
                <TextField
                    id="adreess-input"
                    label="Description"
                    variant="standard"
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
                <GeoSearch
                    onChange={(event) => {
                        handleChangeGeo(event.target);
                    }}
                />
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Category
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem value={"Donation"}>Donation</MenuItem>
                            <MenuItem value={"Volunteer work"}>
                                Volunteer work
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {/* <SubmitButton
                    onClick={() => {
                        handleClick;
                    }}
                /> */}
                <Button
                    onClick={handleClick}
                    variant="contained"
                    href="#contained-buttons"
                >
                    Submit
                </Button>
            </section>
        </>
    );
}
