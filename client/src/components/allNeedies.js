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

    return (
        <section>
            <div className="needies-container">
                {needies.length > 0 &&
                    needies.map((needy) => {
                        return (
                            <div className="needies" key={needy.id}>
                                <p>{needy.needy}</p>
                                <p>{needy.description}</p>
                                <p>{needy.name}</p>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
}
