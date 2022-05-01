const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("/locations", function (req, res) {
    db.getLocations().then(({ rows }) => {
        console.log("rows in data base", rows);
        res.json({ rows });
    });
});

app.get("/api/needies", function (req, res) {
    db.getNeedies().then(({ rows }) => {
        console.log("rows in data base", rows);
        res.json({ rows });
    });
});

app.get("/api/needies/:long/:lat", function (req, res) {
    console.log("*******", req.params.long, req.params.lat);
    db.getNeediesByCoordinates(req.params.long, req.params.lat).then(({ rows }) => {
        console.log("rows in data base", rows);
        res.json({ rows });
    });
});

app.post("/api/locations", function (req, res) {
    // const { name, lag, long } = req.body;
    console.log("body---> ", req.body);
    // db.insertLocation(name, lag, long).then(({ rows }) => {
    //     console.log("rows in data base", rows);
    //     res.json({ rows });
    // });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
