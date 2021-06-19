CREATE TABLE attendees (
    id              SERIAL PRIMARY KEY,
    student_id      INT REFERENCES students(id),
    classes_id      VARCHAR REFERENCES classes(id) 
);

INSERT INTO attendees (student_id, classes_id)
VALUES (1, 1);

INSERT INTO attendees (student_id, classes_id)
VALUES (4, 1);

INSERT INTO attendees (student_id, classes_id)
VALUES (2, 2);

INSERT INTO attendees (student_id, classes_id)
VALUES (5, 1);

INSERT INTO attendees (student_id, classes_id)
VALUES (9, 3);

INSERT INTO attendees (student_id, classes_id)
VALUES (3, 3);

INSERT INTO attendees (student_id, classes_id)
VALUES (6, 1);

INSERT INTO attendees (student_id, classes_id)
VALUES (7, 3);

INSERT INTO attendees (student_id, classes_id)
VALUES (8, 2);

INSERT INTO attendees (student_id, classes_id)
VALUES (10, 1);