CREATE TABLE mentors (
    id                                  SERIAL PRIMARY KEY,
    name                                VARCHAR(30) NOT NULL,
    years_in_Glasgow                    INT NOT NULL,
    address                             VARCHAR(120) NOT NULL,
    favorite_programming_language       VARCHAR(30) NOT NULL
);

INSERT INTO mentors (name, years_in_Glasgow, address, favorite_programming_language) 
VALUES ('Miguel Erja Gonzalez Solis', 2, '4, Shepford Place', 'HTML');

INSERT INTO mentors (name, years_in_Glasgow, address, favorite_programming_language) 
VALUES ('Nandan Rao', 4, '16 John Wood St', 'CSS');

INSERT INTO mentors (name, years_in_Glasgow, address, favorite_programming_language)
VALUES ('Alexandra Yamaui', 2, '10 Cromdale Rd', 'Javascript');

INSERT INTO mentors (name, years_in_Glasgow, address, favorite_programming_language)
VALUES ('Linoman', 1, '14 Stroma Avenue', 'Javascript');

INSERT INTO mentors (name, years_in_Glasgow, address, favorite_programming_language)
VALUES ('Alvaro Perez', 6, '28 Dubbs Rd', 'ReactJS');