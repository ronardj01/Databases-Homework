CREATE TABLE classes (
    id              SERIAL PRIMARY KEY,
    mentor_id       INT REFERENCES mentors(id),
    topic           VARCHAR(30) NOT NULL,
    classes_date    DATE NOT NULL,
    location        VARCHAR(30)NOT NULL
);

INSERT INTO classes (mentor_id, topic, classes_date, location)
VALUES (1, 'HTML', '2021-01-15', 'Online');

INSERT INTO classes (mentor_id, topic, classes_date, location)
VALUES (2, 'CSS', '2021-01-22', 'Online');

INSERT INTO classes (mentor_id, topic, classes_date, location)
VALUES (3, 'Javascript', '2021-02-17', 'Open Cultural Center');