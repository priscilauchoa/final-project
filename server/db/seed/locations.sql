DROP TABLE IF EXISTS places;

-- The geometry type comes from the Postgis extension
CREATE TABLE places (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  geom geometry,
  needy TEXT,
  category TEXT,
  description TEXT
);

-- GeoJSON can come from mapbox - will be stored internally as geometry
INSERT INTO places (name, geom)
VALUES ('Hamburg', ST_GeomFromGeoJSON('{
  "type": "Point",
  "coordinates": [10, 53.55],
  "needy": "NGO",
  "category": "Donation",
  "description": "NGO Needs Winter Cloths"
}')),
('Leipzig', ST_GeomFromGeoJSON('{
  "type": "Point",
  "coordinates": [12.374464, 51.336109],
  "needy": "Emma Watson",
  "category": "Volunteer work",
  "description": "I need help to distribute food on the street"
}'));
