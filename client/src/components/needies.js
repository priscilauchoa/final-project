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
            .then(({ rows }) => {
                console.log("data", rows);
                if (!rows) {
                    history.push("/");
                } else {
                    console.log("user", rows);
                    setNeedies(rows);
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

    let img = [
        "../img/help1.jpeg",
        "../img/help2.jpeg",
        "../img/help3.jpeg",
        "../img/help4.jpeg",
        "../img/help5.jpeg",
        "../img/help5.jpeg",
    ];
    let randomImg = Math.floor(Math.random() * img.length);

    return (
        <>
            <section>
                <h1>Needies</h1>
                <section ref={neediesContainer} className="needies-container">
                    <div className="needies-container">
                        {needies.length > 0 &&
                            needies.map((needy) => {
                                return (
                                    <div className="needies" key={needy.id}>
                                        <Card
                                            sx={{
                                                maxWidth: 345,
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={randomImg}
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
                                                <Button size="small">
                                                    Learn More
                                                </Button>
                                            </CardActions>
                                            <Typography>
                                                {/* {needy.description} */}
                                            </Typography>
                                        </Card>

                                        <p>
                                            {/* {needy.first} {needy.last}:{"  "} */}
                                        </p>
                                    </div>
                                );
                            })}
                        {/* <h1>NO NEEDIES</h1> */}
                    </div>
                </section>
            </section>
        </>
    );
}
