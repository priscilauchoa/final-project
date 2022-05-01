// import { useEffect, useState } from "react";
// import mapboxgl from "mapbox-gl";
// import mapboxGeocode from "@mapbox/mapbox-sdk/services/geocoding";
// import TextField from "@mui/material/TextField";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import Button from "@mui/material/Button";
// import ListItemText from "@mui/material/ListItemText";
import { receveidNeedies } from "./redux/needies/slice.js";
import { useDispatch } from "react-redux";
// import "./mapBoxGeocode.css";
import { useHistory } from "react-router-dom";

// mapboxgl.accessToken =
//     "pk.eyJ1IjoicHJpc2NpbGFmbG9yZXMiLCJhIjoiY2wyaHEyNnA0MGc5bzNjbm5ldm9zeWQwaCJ9.2wKNqQY375w7wVhbVi1PjQ";

// export default function GeoSearch() {

//     const [query, setQuery] = useState("");
//     const [places, setPlaces] = useState([]);
//     const [selectedIndex, setSelectedIndex] = useState();
//     const [showList, setShowList] = useState(true);
//     const [needies, setNeedies] = useState(true);
//     const [labelInputAdress, setLabelInputAdress] = useState("Address");
//     const [longit, setLongit] = useState("");
//     const [latit, setLatit] = useState("");

//     const handleListItemClick = (event) => {
//         setSelectedIndex(event);
//         setShowList(false);
//         setLabelInputAdress(event.target.innerHTML);
//         setLongit(places[0].geometry.coordinates[0]);
//         setLatit(places[0].geometry.coordinates[1]);

//         console.log("&&&&", selectedIndex);
//     };

//     const geocodeClient = mapboxGeocode({
//         accessToken: mapboxgl.accessToken,
//     });

//     const handleIntputChange = (e) => {
//         setLabelInputAdress("");

//         setShowList(true);
//         setQuery(e.target.value);
//     };
//     console.log("places", places);

//     useEffect(() => {
//         if (query.length < 3) return;

//         // geocoding with countries
//         geocodeClient
//             .forwardGeocode({
//                 query,
//                 countries: ["de"],
//                 limit: 5,
//             })
//             .send()
//             .then((response) => {
//                 setPlaces(response.body.features);
//                 // setType(places[0].type);
//             });
//     }, [query]);
//     const handleClick = () => {
//         // console.log("*****", longit, latit);
//         fetch(`/api/needies/${longit}/${latit}`)
//             .then((res) => res.json())
//             .then(({ rows }) => {
//                 console.log("data++++", rows);
//                 if (!rows) {
//                     console.log("No needies in this address");
//                     history.push("/");
//                 } else {
//                     console.log("needies", rows);
//                     setNeedies(rows);
//                     console.log("needies fetched", needies);
//
//                 }
//             });
//     };
//     console.log("places", places);
//     return (
//         <div className="geo-container">
//             <TextField
//                 id="adreess-input"
//                 label="Address"
//                 variant="standard"
//                 value={query}
//                 placeholder="Gartenstrasse 18, 10115 Berlin"
//                 onChange={handleInputChange}
//             />
//             <Button onClick={handleSubmitClick}> Submit</Button>
//             {showList && (
//                 <Paper className="address-list" elevation={3}>
//                     <List component="nav" aria-label="main mailbox folders">
//                         {places.map((place) => (
//                             <ListItemButton key={place.id}>
//                                 <ListItemText
//                                     primary={place.place_name}
//                                     onClick={() => handleListItemClick(place)}
//                                 />
//                             </ListItemButton>
//                         ))}
//                     </List>
//                 </Paper>
//             )}
//         </div>
//     );
// }

// // const [placeName, setPlaceName] = useState();

// // const [type, setType] = useState("");
// // const [typeGeometry, setTypeGeometry] = useState("");
// // const handleClick = () => {
// // setType(places[0].type);
// // setTypeGeometry(places[0].geometry.type);
// // placeName(places[0].place_name);

// //     setLabelInputAdress("");
// //     fetch("/api/locations", {
// //         method: "POST",
// //         headers: {
// //             "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //             name: "Berlin",
// //             geoJSON: {
// //                 type: type,
// //                 geometry: {
// //                     type: typeGeometry,
// //                     coordinates: [long, lat],
// //                 },
// //             },
// //         }),
// //     });
// // };

import { useEffect, useState } from "react";
import mapboxGeocode from "@mapbox/mapbox-sdk/services/geocoding";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

import "./mapBoxGeocode.css";

const geocodeAccessToken =
    "pk.eyJ1IjoicHJpc2NpbGFmbG9yZXMiLCJhIjoiY2wyaHEyNnA0MGc5bzNjbm5ldm9zeWQwaCJ9.2wKNqQY375w7wVhbVi1PjQ";
const geocodeClient = mapboxGeocode({
    accessToken: geocodeAccessToken,
});

export default function GeoSearch() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [places, setPlaces] = useState([]);
    const [showList, setShowList] = useState(true);
    const [needies, setNeedies] = useState(true);
    const [longit, setLongit] = useState("");
    const [latit, setLatit] = useState("");

    console.log("places", places);

    const handleListItemClick = (place) => {
        setShowList(false);
        setQuery(place.place_name);
        setLongit(place.geometry.coordinates[0]);
        setLatit(place.geometry.coordinates[1]);
    };

    const handleInputChange = (e) => {
        setShowList(true);
        setQuery(e.target.value);
    };

    const handleSubmitClick = () => {
        // console.log("*****", longit, latit);
        fetch(`/api/needies/${longit}/${latit}`)
            .then((res) => res.json())
            .then(({ rows }) => {
                console.log("data++++", rows);
                if (!rows) {
                    console.log("No needies in this address");
                    history.push("/");
                } else {
                    console.log("needies", rows);
                    setNeedies(rows);
                    console.log("needies fetched", needies);
                    dispatch(receveidNeedies(rows));
                    history.push("/needies");
                }
            });
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
            />
            <Button onClick={handleSubmitClick}> Submit</Button>
            {showList && (
                <ul>
                    {places.map((place) => (
                        <li className="list-places" key={place.id}>
                            <p onClick={() => handleListItemClick(place)}>
                                {place.place_name}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// const [placeName, setPlaceName] = useState();

// const [type, setType] = useState("");
// const [typeGeometry, setTypeGeometry] = useState("");
// const handleSubmitClick = () => {
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
