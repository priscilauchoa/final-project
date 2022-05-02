const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const db = require("./db");
const { uploader } = require("./upload");
const s3 = require("./s3");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.use(express.json());

app.post("/api/register", async (req, res) => {
    try {
        const newRegister = await db.createNewRegister(req.body);
        console.log("newRegister-->", newRegister);
        res.json(newRegister);
    } catch (error) {
        console.log("[/api/register] error saving place", error, req.body);
        res.sendStatus(500);
    }
});

// app.post("/api/register", function (req, res) {
//     // console.log("req body &&&&&", req.body);

//     const [
//         needy,
//         category,
//         description,
//         // img,
//         geoJSON,
//     ] = req.body;
//     console.log(
//         "req.body register-->",
//         needy,
//         category,
//         description,
//         // img,
//         geoJSON
//     );
//     // db.insertNeedy(
//     //     needy,
//     //     category,
//     //     description,
//     //     // img,
//     //     type,
//     //     long,
//     //     lat
//     // ).then(({ rows }) => {
//     //     console.log("rows in insertNeedydata ", rows);
//     //     // res.json({ rows });
//     // });
// });

// name, needy, category, description, img, type, geom;
app.get("/api/needies", function (req, res) {
    db.getNeedies().then(({ rows }) => {
        console.log("rows in data base", rows);
        res.json({ rows });
    });
});

app.get("/api/needies/:long/:lat", function (req, res) {
    // console.log("***", req.params.long, req.params.lat);
    db.getNeediesByCoordinates(req.params.long, req.params.lat).then(
        ({ rows }) => {
            console.log("rows in data base", rows);
            const baseDistance = 3000;
            let distanceFactor = 1;
            let currentDistance = baseDistance * distanceFactor;

            let filteredRows = [];

            while (
                filteredRows.length === 0 &&
                currentDistance <= 10 * baseDistance
            ) {
                filteredRows = rows.filter(
                    (row) => row.distance < currentDistance
                );

                currentDistance = baseDistance * ++distanceFactor;
            }
            console.log("filteredRows", filteredRows);
            res.json({ rows: filteredRows });
        }
    );
});

app.post("/upload", uploader.single("file"), s3.upload, (req, res) => {
    let url = `https://s3.amazonaws.com/priscilasbucket/${req.file.filename}`;

    db.changeImg(req.session.userId, url)
        .then(({ rows }) => {
            console.log("rows****", rows);
            res.json(rows);
        })
        .catch((err) => {
            console.log("error verify code secret", err);
            res.json({ success: false });
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
