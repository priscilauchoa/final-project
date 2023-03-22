-- ('Leipzig', ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [12.374464, 51.336109],
--   "needy": "Emma Watson",
--   "category": "Volunteer work",
--   "description": "I need help to distribute food on the street",
-- }'));

-- ST_AsGeoJSON converts geometry back to geoJSON - ready for the API
SELECT name, ST_AsGeoJSON(geom) as geoJSON FROM needies;

-- Calculate distance from Berlin
SELECT name, ST_Distance(ST_MakePoint(13.383309, 52.516806)::geography, geom)
AS distance
FROM needies
ORDER BY distance ASC;