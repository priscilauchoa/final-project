import ReactDOM from "react-dom";
import App from "./app.js";
import "mapbox-gl/dist/mapbox-gl.css";

ReactDOM.render(<HelloWorld />, document.querySelector("main"));

function HelloWorld() {
    return (
        <>
            <App />
        </>
    );
}
