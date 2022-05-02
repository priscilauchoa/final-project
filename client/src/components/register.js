// import { useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
// import * as React from "react";
import GeoSearch from "../mapBoxGeocode";
import * as React from "react";
import Button from "@mui/material/Button";
import SavePicture from "./save-picture";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
    TextField,
    Typography,
    InputLabel,
    Select,
    FormControl,
    MenuItem,
} from "@material-ui/core";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export function NewNeedy(props) {
    const [newNeedy, setNewNeedy] = useState();
    const [name, setName] = useState();
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState();
    const [geoSearch, setGeoSearch] = useState([]);
    const [placeName, setPlaceName] = useState();
    const [long, setLong] = useState("");
    const [lat, setLat] = useState("");
    const [type, setType] = useState("");
    const [typeGeometry, setTypeGeometry] = useState("");
    const [modal, setModal] = useState(false);
    const [img, setImg] = useState({});
    const [id, setId] = useState();

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeGeo = (place) => {
        // console.log("event geo((((", place);
        setCategory(place.place_name);
        setLong(place.geometry.coordinates[0]);
        setLat(place.geometry.coordinates[1]);
        setType(place.type);
        setTypeGeometry(place.geometry.type);
        setPlaceName(place.place_name);
    };

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleChangeImg = (e) => {
        setImg(e);

        console.log("img", img);
    };

    // console.log("img****", img);

    console.log("placessss in new neddies ,", geoSearch);
    const handleClick = () => {
        setOpen(true);
        fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                needy: newNeedy,
                category: category,
                description: description,
                geoJSON: {
                    type: type,
                    geometry: {
                        type: typeGeometry,
                        coordinates: [long, lat],
                    },
                },
            }),
        }).then((newRegister) => {
            console.log("newRegisters", newRegister);
            setId(newRegister[0].id);
        });
    };

    const handleSelectItem = (place) => {
        // console.log('### register place', place);
        handleChangeGeo(place);
    };

    const imageSet = (image) => {
        setImg(image);
    };

    return (
        <>
            <section className="new-needy-container">
                <Typography variant="h5">Register</Typography>

                <TextField
                    id="adreess-input"
                    label="Name"
                    variant="standard"
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <TextField
                    id="adreess-input"
                    label="How to Help"
                    variant="standard"
                    onChange={(event) => {
                        setNewNeedy(event.target.value);
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
                <GeoSearch onItemSelected={handleSelectItem} />

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

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"
                        >
                            <Box sx={{ ...style, width: 420 }}>
                                <h2 id="parent-modal-title">
                                    Choose a Photo to represent your NGO
                                </h2>
                                <SavePicture
                                    onProfilePictureChange={handleChangeImg}
                                    userId={id}
                                />
                            </Box>
                        </Modal>
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
