-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2018 at 09:27 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pia`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `movie` int(11) NOT NULL,
  `post` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user`, `movie`, `post`) VALUES
(1, 19, 1, 'Moj prvi komentar'),
(2, 19, 1, 'Moj Drugi komentar'),
(3, 19, 1, 'Test komentara'),
(4, 19, 1, 'Hello svete'),
(5, 19, 2, 'Moj komentar na ovaj film je krajnje pozitivan. Nolan je genije medju reziserima. <3'),
(6, 19, 2, 'Ovo je prelep film 11/10 would cry again. <3 <3 <#');

-- --------------------------------------------------------

--
-- Table structure for table `festivals`
--

CREATE TABLE `festivals` (
  `id` int(11) NOT NULL,
  `name` varchar(240) NOT NULL,
  `description` varchar(512) NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `visible` tinyint(1) NOT NULL DEFAULT '0',
  `place` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `festivals`
--

INSERT INTO `festivals` (`id`, `name`, `description`, `start`, `end`, `visible`, `place`) VALUES
(1, 'Fest', 'Beogradski filmski festival.', '2018-01-03', '2018-01-31', 0, 1),
(2, 'asdf', 'asdf', '2018-01-26', '2018-01-31', 0, 1),
(3, 'asdfasdf', 'asdfsadf', '2018-01-27', '2018-01-30', 0, 1),
(4, 'asdf', '1123', '2018-01-26', '2018-01-31', 0, 1),
(5, 'asdfasdf', 'asdfsadfasdfasdf', '2018-01-26', '2018-01-30', 0, 2),
(6, 'asdfasdf', 'asdfasf', '2018-01-27', '2018-01-30', 0, 1),
(7, 'asdfasdf', 'asdfasfd', '2018-01-30', '2018-01-31', 0, 2),
(8, 'asdfasdf', 'asdfasdfasdf', '2018-01-27', '2018-01-29', 0, 1),
(9, 'Hello', 'Festival', '2018-01-30', '2018-01-31', 0, 1),
(10, 'Novi Festival', 'Ovo je moj lepi novi festival :)', '2018-01-31', '2018-02-22', 0, 3),
(11, 'Bitef', 'The Belgrade International Theatre Festival (BITEF) is a theatre festival that takes place annually in Belgrade, Serbia.  Founded in 1967, BITEF has continually followed and supported the latest theatre trends.[1] It has become one of the most significant culture festivals of Serbia.', '2018-02-14', '2018-02-21', 0, 1),
(12, 'Test', 'Ovo je test festivala.', '2018-02-23', '2018-03-06', 1, 1),
(13, 'Test 2', 'Ovoj je drugi test', '2018-02-22', '2018-02-28', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `lon` double NOT NULL,
  `lat` double NOT NULL,
  `place` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `name`, `lon`, `lat`, `place`) VALUES
(1, 'Dom Sindikata', 44.234, 33.23, 1),
(2, 'Sava Centar', 44.8085, 20.4321, 1);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `msg_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `seen` tinyint(1) NOT NULL,
  `text` varchar(144) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`msg_id`, `user_id`, `seen`, `text`) VALUES
(1, 19, 1, 'Hello world'),
(2, 19, 1, 'Hello from seen'),
(3, 19, 1, 'Nije vidjena'),
(5, 21, 0, 'Your account has been activated'),
(6, 19, 1, 'Projection has been edited'),
(7, 19, 1, 'Projection has been edited:2018-02-21::12:00'),
(8, 19, 1, 'Reservation GQVULSWJRG has been cancelled'),
(9, 19, 1, 'Reservation GQVULSWJRG has been cancelled'),
(10, 19, 0, 'Projection has been edited:2018-02-28::15:00');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `rating` int(11) NOT NULL DEFAULT '0',
  `count` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `rating`, `count`) VALUES
(1, 'Interstellar', 0, 0),
(2, 'Titanic', 27, 4),
(3, 'Harry Potter', 0, 0),
(4, 'Terminator', 0, 0),
(5, 'Hannibal', 0, 0),
(6, 'Maratonci', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `places`
--

CREATE TABLE `places` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `places`
--

INSERT INTO `places` (`id`, `name`) VALUES
(1, 'Beograd'),
(2, 'Nis'),
(3, 'Trnovo'),
(4, 'Krupanj'),
(5, 'Loznica');

-- --------------------------------------------------------

--
-- Table structure for table `projections`
--

CREATE TABLE `projections` (
  `id` int(11) NOT NULL,
  `festival` int(11) NOT NULL,
  `location` int(11) NOT NULL,
  `movie` int(11) NOT NULL,
  `date` date NOT NULL,
  `hour` int(11) NOT NULL,
  `tickets` int(11) NOT NULL,
  `maxtickets` int(11) NOT NULL,
  `price` int(11) NOT NULL DEFAULT '0',
  `cancelled` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projections`
--

INSERT INTO `projections` (`id`, `festival`, `location`, `movie`, `date`, `hour`, `tickets`, `maxtickets`, `price`, `cancelled`) VALUES
(1, 1, 1, 1, '2018-01-10', 12, 500, 4, 0, 0),
(2, 1, 1, 1, '2018-01-10', 13, 123, 0, 0, 0),
(3, 4, 1, 2, '2018-01-31', 14, 200, 0, 0, 0),
(4, 4, 1, 5, '2018-01-26', 14, 200, 0, 0, 0),
(5, 1, 2, 3, '2018-01-23', 16, 200, 0, 0, 0),
(6, 1, 2, 5, '2018-01-19', 14, 200, 10, 0, 0),
(7, 11, 1, 2, '2018-02-15', 14, 12, 2, 0, 0),
(8, 11, 2, 6, '2018-02-16', 15, 123, 11, 0, 0),
(9, 11, 1, 1, '2018-02-21', 12, 10, 5, 0, 1),
(10, 12, 1, 1, '2018-02-27', 12, 120, 10, 0, 0),
(11, 12, 1, 3, '2018-02-26', 14, 12, 5, 0, 0),
(12, 12, 1, 5, '2018-02-28', 15, 1000, 5, 1000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `projection` int(11) NOT NULL,
  `tickets` int(11) NOT NULL,
  `date` date NOT NULL,
  `code` varchar(10) NOT NULL,
  `cancelled` tinyint(1) NOT NULL DEFAULT '0',
  `fulfilled` tinyint(1) NOT NULL DEFAULT '0',
  `stopped` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `user`, `projection`, `tickets`, `date`, `code`, `cancelled`, `fulfilled`, `stopped`) VALUES
(6, 19, 7, 1, '2018-02-14', 'RRQMSVXHBA', 0, 1, 0),
(7, 19, 9, 5, '2018-02-18', 'GQVULSWJRG', 0, 0, 1),
(8, 19, 11, 1, '2018-02-20', 'KYCYOJRGSK', 1, 0, 0),
(9, 19, 12, 5, '2018-02-20', 'RWPFMWNGSW', 0, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `name`) VALUES
(4, 'ADMIN'),
(5, 'SELLER'),
(7, 'USER');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(60) NOT NULL,
  `lastname` varchar(60) NOT NULL,
  `email` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `banned` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `name`, `lastname`, `email`, `active`, `banned`) VALUES
(17, 'asdf', '$2a$10$WBUIL.mQp63b00vT/8MXC.0dLYt8jh66ktMd0B1UhoacZ2hB4ecuC', 'asdf', 'asdf', 'email@email.com', 1, 1),
(19, 'biljka', '$2a$10$ZibhSOeuZ0E0qEwmci4JDOBwLzYp/EH3IGTw3IZYgiwYRkVmY0Rga', 'Biljana', 'Rankovic', 'bilja@gmail.com', 1, 0),
(21, 'theroppex', '$2a$10$JyLJHUdE4WZIT0dpti7zteIePk1mUohrBJ2yGnYiaw7aFfFxta.j.', 'Petar', 'Rankovic', 'theroppex@gmail.com', 1, 0),
(22, 'kipe', '$2a$10$H/9dq5M/0RPuyyvrNFYNuuTAZflWGgOPRLkiCQ5FP6bFQYyIicduC', 'Petar', 'Rankovic', 'peki@gmail.com', 1, 1),
(23, 'maki', '$2a$10$D4gbos8ss/vjSxfY8vrPvujij/m.S9y/0xjqdDmoBi9urFnQUqh0q', 'Marko', 'Markovic', 'mail@maki.com', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users_roles`
--

CREATE TABLE `users_roles` (
  `user_role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_roles`
--

INSERT INTO `users_roles` (`user_role_id`, `user_id`, `role_id`) VALUES
(14, 19, 4),
(16, 19, 5),
(17, 17, 5),
(18, 21, 7),
(19, 22, 7),
(20, 23, 7);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`),
  ADD KEY `movie` (`movie`);

--
-- Indexes for table `festivals`
--
ALTER TABLE `festivals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `place` (`place`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `locations_ibfk_1` (`place`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`msg_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projections`
--
ALTER TABLE `projections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `festival` (`festival`),
  ADD KEY `location` (`location`),
  ADD KEY `movie` (`movie`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projection` (`projection`),
  ADD KEY `user` (`user`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `users_roles`
--
ALTER TABLE `users_roles`
  ADD PRIMARY KEY (`user_role_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `festivals`
--
ALTER TABLE `festivals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `msg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `places`
--
ALTER TABLE `places`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `projections`
--
ALTER TABLE `projections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users_roles`
--
ALTER TABLE `users_roles`
  MODIFY `user_role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`movie`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `festivals`
--
ALTER TABLE `festivals`
  ADD CONSTRAINT `festivals_ibfk_1` FOREIGN KEY (`place`) REFERENCES `places` (`id`);

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`place`) REFERENCES `places` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `projections`
--
ALTER TABLE `projections`
  ADD CONSTRAINT `projections_ibfk_1` FOREIGN KEY (`festival`) REFERENCES `festivals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `projections_ibfk_2` FOREIGN KEY (`location`) REFERENCES `locations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `projections_ibfk_3` FOREIGN KEY (`movie`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`projection`) REFERENCES `projections` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users_roles`
--
ALTER TABLE `users_roles`
  ADD CONSTRAINT `users_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
