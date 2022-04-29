const spicedPg = require("spiced-pg");

const db = spicedPg(`postgres:postgres:postgres@localhost:5432/places`);

exports.getNeedies = () => {
    return db.query(
        `SELECT name, needy, category, description, ST_Distance(ST_MakePoint(13.383309, 52.516806)::geography, geom)
AS distance
FROM needies
ORDER BY distance ASC;`
    );
};

// exports.insertLocation = () => {
//     return db.query(
//         `INSERT INTO places (name, geom)
// VALUES ('Berlin', ST_GeomFromGeoJSON('{
//   "type": "Point",
//   "coordinates": [13.38333, 52.51667]
// }')),
// ('Leipzig', ST_GeomFromGeoJSON('{
//   "type": "Point",
//   "coordinates": [12.374464, 51.336109]
// }'));`
//     );
// };

// exports.getLocations = () => {
//     return db.query(
//         `SELECT name, ST_Distance(ST_MakePoint(13.383309, 52.516806)::geography, geom)
// AS distance
// FROM needies;`
//     );
// };
