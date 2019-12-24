

--
-- DATABASE CREATION
--

DROP DATABASE IF EXISTS phploversblog;
CREATE DATABASE phploversblog;
USE phploversblog;

--
-- TABLE CREATION
--

CREATE TABLE `posts` (

    `id` int(11) NOT NULL AUTO_INCREMENT,
    `category` int(11) NOT NULL,
    `title` varchar(255) NULL,
    `body` text NULL,
    `author` varchar(255) NULL,
    `tags` varchar(255) NULL,
    `date` timestamp DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (`id`)
)ENGINE=InnoDB
DEFAULT CHARSET=latin1
;

CREATE TABLE `categories` (

    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NULL,

    PRIMARY KEY (`id`)
)ENGINE=InnoDB
DEFAULT CHARSET=latin1
;


--
-- DATA DUMP    
--

INSERT INTO `categories` (`id`, `name`) VALUES
(NULL, 'News'),
(NULL, 'Events'),
(NULL, 'Tutorials'),
(NULL, 'Misc');

INSERT INTO `posts` (`id`,`category`,`title`,`body`,`author`,`tags`,`date`) VALUES
(NULL,'1','International PHP Conference 2014','<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit metus in lacus scelerisque, in varius justo semper. Curabitur dictum accumsan lacus nec pharetra. Pellentesque auctor nunc eu ex pharetra commodo. Suspendisse et tempor purus. Vivamus sed dapibus neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eget rhoncus tortor. Duis convallis sodales eros, ut convallis massa interdum eu. Proin eleifend est vitae blandit pellentesque.</p>','Bob Loblaw','php news, php events',CURRENT_TIMESTAMP),
(NULL,'1','PHP 5.6.0 beta4 Released','<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit metus in lacus scelerisque, in varius justo semper. Curabitur dictum accumsan lacus nec pharetra. Pellentesque auctor nunc eu ex pharetra commodo. Suspendisse et tempor purus. Vivamus sed dapibus neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eget rhoncus tortor. Duis convallis sodales eros, ut convallis massa interdum eu. Proin eleifend est vitae blandit pellentesque.</p>','Bob Loblaw','php, php release, php 5.6',CURRENT_TIMESTAMP);


