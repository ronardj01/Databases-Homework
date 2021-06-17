CREATE TABLE students (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(30) NOT NULL,
    address     VARCHAR(120) NOT NULL,
    graduated   BOOLEAN
);

INSERT INTO students (name, address, graduated)
VALUES ('Ronar Eusbeio', 'Sant Ildefons, 11', FALSE);

INSERT INTO students (name, address, graduated)
VALUES ('Mateo Soto', 'Plaza de la vila, 1', TRUE);

INSERT INTO students (name, address, graduated)
VALUES ('Emilio Ugueda', 'Calle Florida, 64', FALSE);

INSERT INTO students (name, address, graduated)
VALUES ('Manuel Ochoa', 'Calle Font, 12', TRUE);

INSERT INTO students (name, address, graduated)
VALUES ('Adrian Corro', 'Avinguda Bobiles, 25', FALSE);

INSERT INTO students (name, address, graduated)
VALUES ('Antonio Perez', 'Avinguda Republica de Argentina, 2', FALSE);

INSERT INTO students (name, address, graduated)
VALUES ('Leon', 'Calle Aragon, 145', FALSE);

INSERT INTO students (name, address, graduated)
VALUES ('Jose Antonio Olivari', 'Carrer de Sants, 278', FALSE);

INSERT INTO students (name, address, graduated)
VALUES ('Juan de Sousa', 'Paseo de Gracia, 34', FALSE);

INSERT INTO students (name, address, graduated)
VALUES ('Diego Herrera', 'Carrer Neptu, 23', FALSE);