CREATE EXTENSION postgis;
DROP TABLE IF EXISTS places;

-- The geometry type comes from the Postgis extension
CREATE TABLE places (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  geom geometry
);

-- GeoJSON can come from mapbox - will be stored internally as geometry
INSERT INTO places (name, geom)
VALUES ('Hamburg', ST_GeomFromGeoJSON('{
  "type": "Point",
  "coordinates": [10, 53.55]
}')),
('Leipzig', ST_GeomFromGeoJSON('{
  "type": "Point",
  "coordinates": [12.374464, 51.336109]
}'));

-- ST_AsGeoJSON converts geometry back to geoJSON - ready for the API
SELECT name, ST_AsGeoJSON(geom) as geoJSON FROM places;

-- Calculate distance from Berlin
SELECT name, ST_Distance(ST_MakePoint(13.383309, 52.516806)::geography, geom)
AS distance
FROM places
ORDER BY distance ASC;