#!/bin/sh

dbName="postgres"
user="postgres"
psql postgres << EOF

DROP DATABASE IF EXISTS $dbName;
CREATE DATABASE $dbName;

DROP ROLE IF EXISTS $user;

CREATE USER $user WITH PASSWORD 'password';
ALTER ROLE $user SET client_encoding TO 'utf8';
ALTER ROLE $user SET timezone TO 'UTC';
ALTER ROLE $user SET default_transaction_isolation TO 'read committed';

EOF
python3 manage.py makemigrations
python3 manage.py migrate
python3 app/databaseApi/database.py
