PGPORT=5432

echo "starting postgres instance";
docker run \
    --name postgres \
    -e POSTGRES_PASSWORD=secret_pwd \
    -e POSTGRES_USER=admin_usr \
    -e POSTGRES_DB=places_db \
    -v $(pwd)/db/seed:/app/db/seed \
    -p "$PGPORT":5432 \
    -d postgis/postgis;

echo "waiting until postgress is up and running"
sleep 10

echo "seeding locations";
docker exec postgres \
    psql postgresql://admin_usr:secret_pwd@localhost:5432/places_db \
    -f /app/db/seed/locations.sql;

echo "seeding needies";
docker exec postgres \
    psql postgresql://admin_usr:secret_pwd@localhost:5432/places_db \
    -f /app/db/seed/needies.sql;

echo "postgres running in localhost:$PGPORT"