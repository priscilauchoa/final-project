const spicedPg = require("spiced-pg");

const db = spicedPg(`postgres:postgres:postgres@localhost:5432/places`);

exports.getNeedies = () => {
    return db.query(
        `SELECT name, needy, category, description,img, ST_Distance(ST_MakePoint(13.383309, 52.516806)::geography, geom)
AS distance
FROM needies
ORDER BY distance ASC;`
    );
};

exports.getNeediesByCoordinates = (long, lat) => {
    return db.query(
        `SELECT name, needy, category, description, img, ST_Distance(ST_MakePoint($1, $2)::geography, geom)
AS distance
FROM needies
ORDER BY distance ASC;`,
        [long, lat]
    );
};

exports.changeImg = (id, img) => {
    return db.query(
        `UPDATE needies
SET img = $2
WHERE needies.id = $1 RETURNING img AS url`,
        [id, img]
    );
};

async function createNewRegister({
    name,
    category,
    description,
    img,
    geoJSON,
}) {
    let newGeoJSON = JSON.stringify(geoJSON.geometry);
    console.log("newGeoJSON", newGeoJSON);
    const result = await db.query(
        `INSERT INTO needies (name, category, description, img, geom) 
        VALUES($1, $2, $3, $4, ($5)::geometry) 
        RETURNING id`,
        [name, category, description, img, newGeoJSON]
    );
    return result.rows[0];
}

module.exports.createNewRegister = createNewRegister;
