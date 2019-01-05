FROM mysql:5.7.24

ENV MYSQL_ROOT_PASSWORD="password"
ENV MYSQL_DATABASE="photo_gallery"

COPY ./schema.sql /docker-entrypoint-initdb.d/