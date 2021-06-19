SELECT * FROM mentors WHERE years_in_Glasgow > 5;

SELECT * From mentors WHERE favorite_programming_language = 'Javascript';

SELECT * FROM students WHERE graduated = TRUE;

SELECT * FROM classes WHERE classes_date < '2021-06-01';

select * from attendees;

select topic from classes where id = 2;

select  * from attendees where classes_id = 1;

select name from students where id in (2, 3, 5, 8, 11);
