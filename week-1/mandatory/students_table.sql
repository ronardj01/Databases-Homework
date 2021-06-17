CREATE TABLE students (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(30) NOT NULL,
    address     VARCHAR(120) NOT NULL,
    graduated   BOOLEAN
);