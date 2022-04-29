// import { useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export function Needies() {
    const [needies, setNeedies] = useState([]);
    // const needies = useSelector((state) => state?.needies);
    const neediesContainer = useRef();
    // console.log("needy))))))--->", needies);

    useEffect(() => {
        fetch("/api/needies")
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
                if (!data.sucess) {
                    history.push("/");
                } else {
                    console.log("user", data);
                    setNeedies(data);
                    console.log("needies fetched", needies);
                }
            });
        //          "type": "Point",
        //   "coordinates": [10, 53.55],
        //   "needy": "NGO",
        //   "category": "Donation",
        //   "description": "NGO Needs Winter Cloths",

        neediesContainer.current.scrollTop =
            neediesContainer.current.scrollHeight;
    }, []);

    return (
        <>
            <section>
                <h1>Needies</h1>
                <section ref={neediesContainer} className="needies-container">
                    <div>
                        {needies.length > 0 &&
                            needies.map((needy) => {
                                return (
                                    <div className="needies" key={needy.id}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="/static/images/cards/contemplative-reptile.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                >
                                                    Lizard
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {needy}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">
                                                    Share
                                                </Button>
                                                <Button size="small">
                                                    Learn More
                                                </Button>
                                            </CardActions>
                                        </Card>

                                        {/* <img
                                            className="profile-pic-needies"
                                            src={needy.profile_pic}
                                        ></img> */}
                                        <p>
                                            {/* {needy.first} {needy.last}:{"  "} */}
                                        </p>
                                    </div>
                                );
                            })}
                        <h1>NO NEEDIES</h1>
                    </div>
                </section>
            </section>
        </>
    );
}
