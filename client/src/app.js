// import * as React from "react";
import GeoSearch from "./mapBoxGeocode";
import "mapbox-gl/dist/mapbox-gl.css";
import MenuApp from "./components/menuApp";
import Header from "./components/header.js";
import Contact from "./components/contact.js";
import ContentHome from "./components/content-home.js";
import { Needies } from "./components/needies.js";
import { NewNeedy } from "./components/newNeedy.js";
import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <MenuApp />
                <Route exact path="/">
                    <Header />
                    <ContentHome />
                </Route>
                <Route path="/needies">
                    <Header />
                    <Needies />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/newneedy">
                    <NewNeedy />
                </Route>
            </BrowserRouter>
        </>
    );
}
