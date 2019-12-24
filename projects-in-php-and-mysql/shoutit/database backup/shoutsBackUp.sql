
--
-- DATABASE CREATION
--

DROP DATABSE IF EXISTS shoutit;
CREATE DATABASE shoutit;
USE shoutit;

--
-- TABLE CREATION
--

CREATE TABLE shouts (
  id int(11) NOT NULL AUTO_INCREMENT,
  user varchar(50) NOT NULL,
  message text NOT NULL,
  `time` TIME NOT NULL,
  PRIMARY KEY (id)  
  )
ENGINE=InnoDB
DEFAULT CHARSET=latin1
;

--
-- DATA DUMP
--

INSERT INTO `shouts` (`id`, `user`, `message`, `time`) VALUES
(1, 'Paul', 'Quisque dignissim a lorem quis venenatis. Curabitur ultricies', '11:20:00'),
(2, 'Brad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse venenatis', '11:23:00'),
(3, 'John', 'Pellentesque vitae mauris non odio elementum feugiat at et orci.', '11:24:00'),
(4, 'Sam', 'Vestibulum a dapibus sem. Proin magna justo, imperdiet egestas cursus in, interdum sit amet ipsum. Vivamus facilisis, quam non placerat congue,', '11:30:00'),
(5, 'Jen', 'Maecenas rhoncus dapibus eros, in consequat odio blandit in. Quisque dignissim a lorem quis venenatis. Curabitur ultricies', '11:50:00'),
(6, 'Brad', 'This is a new message', '12:50:42'),
(7, 'Brad', 'This is a new message', '12:51:09'),
(8, 'John', 'An even newer message', '12:51:27');
