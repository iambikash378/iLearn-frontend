CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    username VARCHAR(100) UNIQUE,
    is_verified BOOLEAN DEFAULT FALSE,
    verification_token VARCHAR(255),
    reset_token VARCHAR(255),
    last_login TIMESTAMP,
    failed_attempts INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE users
ADD CONSTRAINT role_check CHECK(role IN ('teacher','student','others'));

ALTER TABLE users
DROP COLUMN user_id;

ALTER TABLE users 
ADD COLUMN user_id SERIAL PRIMARY KEY;

ALTER TABLE users 
ADD COLUMN phone_no VARCHAR(15);

CREATE TABLE students(
    student_id SERIAL PRIMARY KEY,
    user_id INT,
    student_name VARCHAR(50),
    email VARCHAR(255) UNIQUE,
    username VARCHAR(100) UNIQUE,
    phone_no VARCHAR(15) UNIQUE,
    current_sem_id INT,
    major_id INT,
    current_grades REAL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (current_sem_id) REFERENCES semesters(semester_id),
    FOREIGN KEY (major_id) REFERENCES majors(major_id)
);


CREATE TABLE subjects(
    subject_id SERIAL PRIMARY KEY,
    subject_code VARCHAR(20) UNIQUE NOT NULL,
    subject_name VARCHAR(50),
    dept_id INT NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES departments(department_id)
);

CREATE TABLE departments(
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(100),
    department_email VARCHAR(50) UNIQUE NOT NULL,
    department_phone VARCHAR(15) UNIQUE NOT NULL
    -- hod_teacher_id INT UNIQUE NOT NULL,
    -- dhod_teacher_id INT UNIQUE NOT NULL,
    -- FOREIGN KEY (hod_teacher_id) REFERENCES teachers(teacher_id),
    -- FOREIGN KEY (dhod_teacher_id) REFERENCES teachers(teacher_id)
);

CREATE TABLE teachers(
    teacher_id SERIAL PRIMARY KEY,
    teacher_name VARCHAR(50),
    teacher_position VARCHAR(50),
    teacher_email VARCHAR(50) UNIQUE NOT NULL,
    teacher_phone VARCHAR(15) UNIQUE NOT NULL,    
    teacher_dept_id INT NOT NULL,
    FOREIGN KEY (teacher_dept_id) REFERENCES departments(department_id)
);

ALTER TABLE teachers
ADD COLUMN user_id INTEGER;

ALTER TABLE teachers
ADD CONSTRAINT fk_constraint FOREIGN KEY (user_id) REFERENCES users(user_id);

ALTER TABLE teachers
ADD CONSTRAINT fk_constraint FOREIGN KEY (user_id) REFERENCES users(user_id);

ALTER TABLE teachers
ALTER COLUMN teacher_email DROP NOT NULL,
ALTER COLUMN teacher_phone DROP NOT NULL,
ALTER COLUMN teacher_dept_id DROP NOT NULL
;

ALTER TABLE departments
ADD COLUMN hod_teacher_id INT UNIQUE,
ADD COLUMN dhod_teacher_id INT UNIQUE,
ADD FOREIGN KEY (hod_teacher_id) REFERENCES teachers(teacher_id),ADD FOREIGN KEY (dhod_teacher_id) REFERENCES teachers(teacher_id);

CREATE TABLE semwise_subjects(
    semwise_majorwise_id SERIAL PRIMARY KEY,
    major_id INT NOT NULL,
    semester_id INT NOT NULL,
    subject_id INT NOT NULL,
    FOREIGN KEY (major_id) REFERENCES majors(major_id),
    FOREIGN KEY (semester_id) REFERENCES semesters(semester_id),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id),
    UNIQUE (major_id, semester_id, subject_id)
);

CREATE TABLE majors (
    major_id SERIAL PRIMARY KEY,
    major_abv VARCHAR(10) UNIQUE,
    major_name VARCHAR(100) UNIQUE
);

CREATE TABLE semesters(
    semester_id SERIAL PRIMARY KEY,
    semester_number INT NOT NULL CHECK(semester_number BETWEEN 1 AND 10),
    sem_abv VARCHAR(10) UNIQUE,
    semester_name VARCHAR(100) 
);

ALTER TABLE subjects
ADD COLUMN subject_type VARCHAR(20) NOT NULL
CHECK(subject_type IN ('elective','compulsory'));

ALTER TABLE departments
ADD COLUMN department_abv VARCHAR(10) UNIQUE;

ALTER TABLE majors
ADD COLUMN dept_id INT;

ALTER TABLE majors
ADD CONSTRAINT fk_majors_dept
FOREIGN KEY (dept_id) REFERENCES departments(department_id);

INSERT INTO semesters (semester_number, sem_abv, semester_name) VALUES
(1, 'I/I', 'First Semester'),
(2, 'I/II', 'Second Semester'),
(3, 'II/I', 'Third Semester'),
(4, 'II/II', 'Fourth Semester'),
(5, 'III/I', 'Fifth Semester'),
(6, 'III/II', 'Sixth Semester'),
(7, 'IV/I', 'Seventh Semester'),
(8, 'IV/II', 'Eighth Semester'),
(9, 'V/I', 'Ninth Semester'),
(10, 'V/II', 'Tenth Semester');

SELECT * FROM DEPARTMENTS;


CREATE OR REPLACE FUNCTION handle_insert()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.role = 'student' THEN
        INSERT INTO students (user_id, email, username, phone_no)
        VALUES (NEW.user_id, NEW.email, NEW.username, NEW.phone_no);

    ELSIF NEW.role = 'teacher' THEN
        INSERT INTO teachers (user_id, teacher_email, teacher_phone)
        VALUES (NEW.user_id, NEW.email, NEW.phone_no);

    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_insert_trigger
AFTER INSERT ON users
FOR EACH ROW
EXECUTE FUNCTION handle_insert();


INSERT INTO users (email, password_hash, username, is_verified, verification_token, reset_token, last_login, failed_attempts, is_active, role, phone_no)
VALUES
('alice@example.com', 'hashed_pwd_1', 'alice123', TRUE, NULL, NULL, NOW(), 0, TRUE, 'student', '9800000001'),
('bob@example.com', 'hashed_pwd_2', 'bobby456', FALSE, 'verify123', NULL, NULL, 1, TRUE, 'teacher', '9800000002'),
('carol@example.com', 'hashed_pwd_3', 'carol789', TRUE, NULL, NULL, NOW(), 0, TRUE, 'student', '9800000003'),
('dave@example.com', 'hashed_pwd_4', 'daveX', FALSE, 'verify456', NULL, NULL, 0, TRUE, 'others', '9800000004'),
('eve@example.com', 'hashed_pwd_5', 'eve_admin', TRUE, NULL, NULL, NOW(), 0, TRUE, 'teacher', '9800000005'),
('frank@example.com', 'hashed_pwd_6', 'franky', FALSE, NULL, NULL, NULL, 2, FALSE, 'student', '9800000006'),
('grace@example.com', 'hashed_pwd_7', 'grace007', TRUE, NULL, NULL, NOW(), 0, TRUE, 'others', '9800000007'),
('heidi@example.com', 'hashed_pwd_8', 'heidi2024', TRUE, NULL, 'reset456', NOW(), 0, TRUE, 'student', '9800000008'),
('ivan@example.com', 'hashed_pwd_9', 'iv@n', FALSE, 'v_token_ivan', NULL, NULL, 3, FALSE, 'teacher', '9800000009'),
('judy@example.com', 'hashed_pwd_10', 'judy_rocks', TRUE, NULL, NULL, NOW(), 0, TRUE, 'student', '9800000010');

SELECT * FROM students;