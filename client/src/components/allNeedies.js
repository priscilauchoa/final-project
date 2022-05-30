import { useRef, useEffect, useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

// import { useHistory } from "react-router";

export function AllNeedies() {
    // const [allNeddies, showallNeddies] = useState(true);
    const needies = useSelector((state) => state.Needies && state.Needies);

    // let history = useHistory();

    console.log("needy in needy.js--->", needies);

    // const handleClick = () => {
    //     showallNeddies(false);
    // };
    return (
        <>
            <div>
                <Typography
                    style={{ textAlign: "center", margin: "30px" }}
                    variant="h4"
                    component="div"
                >
                    Needies
                </Typography>

                <section id="needy">
                    <div>
                        {/* <img className="img-needy" src={needies.img}></img> */}

                        <Typography gutterBottom variant="h5" component="div">
                            {needies}
                        </Typography>
                    </div>
                </section>
            </div>
        </>
    );
}
