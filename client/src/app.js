// import * as React from "react";
import GeoSearch from "./mapBoxGeocode";
import "mapbox-gl/dist/mapbox-gl.css";
import MenuApp from "./components/menuApp";
import { Needies } from "./components/needies.js";
// import { NewNeedy } from "./components/addNeedies.js";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <MenuApp />

                <Route exact path="/">
                    <GeoSearch />
                </Route>

                <Route path="/needies">
                    <Needies />
                </Route>
                {/* <Route path="/newneedy"> */}
                {/* <NewNeedy /> */}
                {/* </Route> */}
            </BrowserRouter>
        </>
    );
}
