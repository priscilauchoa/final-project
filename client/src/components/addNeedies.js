// import { useSelector } from "react-redux";
import { useRef, useEffect, useState } from "react";
import * as React from "react";
import GeoSearch from "../mapBoxGeocode";
import { SubmitButton } from "../components/buttons";

export function NewNeedy() {
    // const [newNeedy, setNewNeedy] = useState([]);
    // const newNeedy = useSelector((state) => state?.newNeedy);
    const newNeedyContainer = useRef();
    // console.log("needy))))))--->", newNeedy);

    return (
        <>
            <section>
                <h1>newNeedy</h1>
                <section ref={newNeedyContainer} className="newNeedy-container">
                    <div></div>
                    <GeoSearch />
                </section>
                <SubmitButton />
            </section>
        </>
    );
}
