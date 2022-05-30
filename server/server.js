const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db");
const { uploader } = require("./upload");
const s3 = require("./s3");
const cookieSession = require("cookie-session");

app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.use(express.json());

const sessionSecret =
    process.env.SESS_SECRET || require("./secret.json").SESS_SECRET;

app.use(
    cookieSession({
        secret: sessionSecret,
        maxAge: 1000 * 60 * 60 * 24 * 14,
        sameSite: true,
    })
);



app.post("/api/register", async (req, res) => {
    try {
        const newRegister = await db.createNewRegister(req.body);
        res.json(newRegister);
    } catch (error) {
        console.log("[/api/register] error saving place", error, req.body);
        res.sendStatus(500);
    }
});

app.post("/upload/:id", uploader.single("file"), s3.upload, (req, res) => {
    let url = `https://s3.amazonaws.com/priscilasbucket/${req.file.filename}`;
    console.log("ID in the server--->", req.params.id);
    db.changeImg(req.params.id, url)
        .then(({ rows }) => {
            res.json({ success: true });
        })
        .catch((err) => {
            console.log("error verify code secret", err);
            res.json({ success: false });
        });
});

app.get("/api/needies", function (req, res) {
    db.getNeedies().then(({ rows }) => {
        res.json({ rows });
    });
});

app.get("/api/needies/:long/:lat", function (req, res) {
    db.getNeediesByCoordinates(req.params.long, req.params.lat).then(
        ({ rows }) => {
            const baseDistance = 1000;
            let distanceFactor = 1;
            let currentDistance = baseDistance * distanceFactor;

            let filteredRows = [];

            while (
                filteredRows.length === 0 &&
                currentDistance <= 3 * baseDistance
            ) {
                filteredRows = rows.filter(
                    (row) => row.distance < currentDistance
                );
                distanceFactor += 1;
                currentDistance = baseDistance * distanceFactor;
            }
            res.json({ rows: filteredRows });
        }
    );
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
