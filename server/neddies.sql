CREATE EXTENSION postgis;
DROP TABLE IF EXISTS needies;

-- The geometry type comes from the Postgis extension
CREATE TABLE needies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  geom geometry,
  needy TEXT,
  category TEXT,
  description TEXT
);

-- GeoJSON can come from mapbox - will be stored internally as geometry
INSERT INTO needies (name, geom)
VALUES ('Hamburg', ST_GeomFromGeoJSON('{
  "type": "Point",
  "coordinates": [10, 53.55],
  "needy": "NGO",
  "category": "Donation",
  "description": "NGO Needs Winter Cloths",

}')),
('Leipzig', ST_GeomFromGeoJSON('{
  "type": "Point",
  "coordinates": [12.374464, 51.336109],
  "needy": "Emma Watson",
  "category": "Volunteer work",
  "description": "I need help to distribute food on the street",
}'));

-- ST_AsGeoJSON converts geometry back to geoJSON - ready for the API
SELECT name, ST_AsGeoJSON(geom) as geoJSON FROM needies;

-- Calculate distance from Berlin
SELECT name, ST_Distance(ST_MakePoint(13.383309, 52.516806)::geography, geom)
AS distance
FROM needies
ORDER BY distance ASC;