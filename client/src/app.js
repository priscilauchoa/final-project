// import * as React from "react";
import GeoSearch from "./mapBoxGeocode";
import "mapbox-gl/dist/mapbox-gl.css";
import MenuApp from "./components/menuApp";
import { Needies } from "./components/needies.js";
// import { AddNeedies } from "./components/addNeedies.js";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

export default function App() {
    return (
        <>
            <MenuApp />
            <Needies />
            <BrowserRouter>
                <Route exact path="/">
                    <GeoSearch />
                </Route>
                <Route exact path="/needies">
                    {/* <AddNeedies /> */}
                </Route>
            </BrowserRouter>
        </>
    );
}
