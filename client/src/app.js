// import * as React from "react";
import Mapbox from "./mapBox.js";
import "mapbox-gl/dist/mapbox-gl.css";
import MenuApp from "./components/menuApp";

import "./app.css";

export default function App() {
    return (
        <>
            <MenuApp />
            <Mapbox />
        </>
    );
}
