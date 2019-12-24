

--
-- DATABASE CREATION
--

DROP DATABASE IF EXISTS quizzer;
CREATE DATABASE quizzer;
USE quizzer;

--
-- TABLE CREATION
--

CREATE TABLE questions (

    `question_number` int(11) NOT NULL,
    `text` text NOT NULL,
    PRIMARY KEY(`question_number`)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
;


CREATE TABLE choices (
    id int(11)NOT NULL AUTO_INCREMENT,
    question_number int(11) NOT NULL,
    is_correct TINYINT(1) NOT NULL DEFAULT '0',
    `text` text NOT NULL ,
    PRIMARY KEY(`id`)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
;

--
-- DATA DUMP    
--

INSERT INTO `questions` (`question_number`, `text`) VALUES
(1, 'PHP stands for what?'),
(2, 'How do you write "Hello World" in PHP\r\n'),
(3, 'What is the best server side language?');

INSERT INTO `choices` (`id`, `question_number`, `is_correct`, `text`) VALUES
(1, 1, 1, 'PHP: Hypertext Preprocessor'),
(2, 1, 0, 'Private Home Page'),
(3, 1, 0, 'Personal Home Page'),
(4, 1, 0, 'Personal Hypertext Preprocessor'),
(6, 2, 1, 'echo "Hello World";'),
(7, 2, 0, '"Hello World";'),
(8, 2, 0, 'Document.Write("Hello World");'),
(12, 3, 0, 'ASP'),
(13, 3, 0, 'RUBY'),
(14, 3, 1, 'PHP');