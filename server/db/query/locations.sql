

-- ST_AsGeoJSON converts geometry back to geoJSON - ready for the API
SELECT name, ST_AsGeoJSON(geom) as geoJSON FROM places;

-- Calculate distance from Berlin
SELECT name, ST_Distance(ST_MakePoint(13.383309, 52.516806)::geography, geom)
AS distance
FROM places
ORDER BY distance ASC;