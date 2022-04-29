import ReactDOM from "react-dom";
import App from "./app.js";
import "mapbox-gl/dist/mapbox-gl.css";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import * as immutableState from "redux-immutable-state-invariant";
// import reducer from "./redux/reducer.js";

// const store = createStore(reducer, applyMiddleware(immutableState.default()));

ReactDOM.render(
    // <Provider store={store}>
    <>
        <App />
    </>,

    // </Provider>,
    document.querySelector("main")
);
