// import { useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import GeoSearch from "../mapBoxGeocode";
import useFetchNeedies from "../hooks/useFetchNeedies";
import { useHistory } from "react-router-dom";
import { receveidNeedy } from "../redux/help/slice.js";
import Map from "../mapBoxMap";

export function Needies() {
    const history = useHistory();
    const dispatch = useDispatch();

    const { handleSelectItem, handleSubmitClick } = useFetchNeedies();
    const needies = useSelector((state) => state.Needies && state.Needies);
    // const needies = useSelector((state) => state?.needies);
    const neediesContainer = useRef();
    // console.log("needy))))))--->", needies);

    useEffect(() => {
        neediesContainer.current.scrollTop =
            neediesContainer.current.scrollHeight;
    }, []);

    const handleHelpClick = (needy) => {
        console.log("NEEDY****", needy);
        dispatch(receveidNeedy(needy));

        history.push("/needy");
    };

    return (
        <>
            <div className="container-search">
                <h3>Search by location of interest: </h3>
                <div>
                    <GeoSearch onItemSelected={handleSelectItem} />
                    <Button onClick={handleSubmitClick}>Search</Button>
                </div>
            </div>
            <section>
                <section ref={neediesContainer} className="needies-container">
                    <div className="needies-container">
                        {needies.length > 0 &&
                            needies.map((needy) => {
                                return (
                                    <div className="needies" key={needy.id}>
                                        <Card
                                            sx={{
                                                width: "258px",
                                                height: "320px",
                                                paddingBottom: "10px",
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="130"
                                                image={needy.img}
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    {needy.needy}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {needy.description}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {needy.name}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">
                                                    Share
                                                </Button>
                                                <Button
                                                    onClick={() => {
                                                        handleHelpClick(needy);
                                                    }}
                                                    size="small"
                                                >
                                                    Help
                                                </Button>
                                            </CardActions>
                                            <Typography>
                                                {/* {needy.description} */}
                                            </Typography>
                                        </Card>

                                        <p></p>
                                    </div>
                                );
                            })}
                    </div>
                </section>
            </section>
            <Map />
        </>
    );
}
