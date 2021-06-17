CREATE TABLE mentors (
    id                                  SERIAL PRIMARY KEY,
    name                                VARCHAR(30) NOT NULL,
    years_in_Glasgow                    INT NOT NULL,
    address                             VARCHAR(120) NOT NULL,
    favorite_programming_language       VARCHAR(30) NOT NULL
);

