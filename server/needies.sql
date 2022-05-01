CREATE EXTENSION postgis;
DROP TABLE IF EXISTS needies;

CREATE TABLE needies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  geom geometry,
  needy VARCHAR(255) NOT NULL, 
  category VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  img TEXT
);



INSERT INTO needies (name, needy, category, description,img, geom)
VALUES ('Alexander Platz', 'NGO-Animal Rescue', 'Volunteer Work', 'Rescue Animals', 'https://www.thebalancecareers.com/thmb/7E7vjaHSUolVe5YtPKmqY8mcIWs=/2000x1500/filters:fill(auto,1)/GettyImages-660747797-5892560b3df78caebcbf9e0d.jpg', ST_GeomFromGeoJSON('{
  "type": "Point",
  "coordinates": [13.412599, 52.521534625],
}'));


INSERT INTO needies (name, needy, category, description, img, geom)
VALUES ('Mitte', 'DRK - Deutsches Rotes Kreuz', 'Donation', 'Needs Winter Cloths','https://res.cloudinary.com/updater-marketing/images/f_auto,q_auto/v1617747591/shutterstock_1733375798/shutterstock_1733375798.png?_i=AA', ST_GeomFromGeoJSON('{
  "type": "Point",
  "coordinates": [13.38333, 52.51667],
}'));

INSERT INTO needies (name, needy, category, description,img, geom)
VALUES ('Wedding Platz', 'Become a member', 'Volunteer Work', 'Rescue Animals','https://cdn.hswstatic.com/gif/animal-rescue-organizations-1.jpg', ST_GeomFromGeoJSON('{
  "type": "Point",
  "coordinates": [13.361902, 52.540838],
}'));


















-- ('Leipzig', ST_GeomFromGeoJSON('{
--   "type": "Point",
--   "coordinates": [12.374464, 51.336109],
--   "needy": "Emma Watson",
--   "category": "Volunteer work",
--   "description": "I need help to distribute food on the street",
-- }'));

-- -- ST_AsGeoJSON converts geometry back to geoJSON - ready for the API
-- SELECT name, ST_AsGeoJSON(geom) as geoJSON FROM needies;

-- -- Calculate distance from Berlin
-- SELECT name, ST_Distance(ST_MakePoint(13.383309, 52.516806)::geography, geom)
-- AS distance
-- FROM needies
-- ORDER BY distance ASC;