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

exports.getNeediesByCoordinates = (long, lat) => {
    return db.query(
        `SELECT name, needy, category, description, ST_Distance(ST_MakePoint($1, $2)::geography, geom)
AS distance
FROM needies
ORDER BY distance ASC;`,
        [long, lat]
    );
};

// SELECT * FROM needies WHERE GeometryType(ST_Centroid(geom)) = 'POINT' AND ST_Distance_Sphere( ST_Point(ST_X(ST_Centroid(geom)), ST_Y(ST_Centroid(geom))), (ST_MakePoint(13.412599) , 52.521534625))) <= 18 * 1609,34

// SELECT *
// FROM needies
// WHERE ST_Distance_Sphere(geom, ST_MakePoint(13.412599, 52.521534625)) <= radius_mi * 1609.34`;

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
