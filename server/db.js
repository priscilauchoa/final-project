const spicedPg = require("spiced-pg");

const db = spicedPg(
    process.env.DATABASE_URL ||
        `public:admin_usr:secret_pwd@localhost:5432/places_db`
);

exports.getNeedies = () => {
    return db.query(
        `SELECT name, needy, category, description, img, ST_AsGeoJSON(geom), ST_Distance(ST_MakePoint(13.383309, 52.516806)::geography, geom)
AS distance
FROM needies
ORDER BY distance ASC;`
    );
};

exports.getNeediesByCoordinates = (long, lat) => {
    return db.query(
        `SELECT name, needy, category, description, img, ST_AsGeoJSON(geom), ST_Distance(ST_MakePoint($1, $2)::geography, geom)
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
WHERE needies.id = $1;`,
        [id, img]
    );
};

async function createNewRegister({
    name,
    needy,
    category,
    description,
    img,
    geoJSON,
}) {
    let newGeoJSON = JSON.stringify(geoJSON.geometry);
    // console.log("newGeoJSON", newGeoJSON);
    const result = await db.query(
        `INSERT INTO needies (name, needy, category, description, img, geom) 
        VALUES($1, $2, $3, $4, $5, ($6)::geometry) 
        RETURNING *`,
        [name, needy, category, description, img, newGeoJSON]
    );
    return result.rows[0];
}

module.exports.createNewRegister = createNewRegister;
