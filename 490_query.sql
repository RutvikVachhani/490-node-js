Create table Student(
Id INT PRIMARY KEY AUTO_INCREMENT,
StudentId INT UNIQUE,
Firstname VARCHAR(100),
Middlename VARCHAR(100),
Lastname VARCHAR(100),
DateCreated DATETIME DEFAULT current_timestamp()
);

Create table CourseCompletedByStudent(
Id INT AUTO_INCREMENT PRIMARY KEY,
StudentId INT,
Term VARCHAR(2),
Semester VARCHAR(2),
Department VARCHAR(10),
CourseNumber VARCHAR(10),
Credits VARCHAR(3),
Grade VARCHAR(5),
Description VARCHAR(100),
DateCreated DATETIME DEFAULT current_timestamp()
);

CREATE TABLE CoursePreReq(
Id INT AUTO_INCREMENT PRIMARY KEY,
Department VARCHAR(5),
CourseNumber VARCHAR(10),
Credits VARCHAR(3),
prerequisite VARCHAR(200)
); 


drop table Student;
drop table CourseCompletedByStudent;

SELECT * FROM Student;
SELECT * FROM CourseCompletedByStudent;

SELECT S.Firstname, C.Department, C.CourseNumber, C.Grade FROM CourseCompletedByStudent C 
inner join student S on S.StudentId = C.StudentId
order by S.Firstname,C.Department,C.CourseNumber;

SELECT DISTINCT S.Firstname, C.Department, C.CourseNumber, C.Credits, C.Grade FROM CourseCompletedByStudent C 
inner join student S on S.StudentId = C.StudentId
where C.grade = 'IP'
order by S.Firstname,C.Department,C.CourseNumber;
