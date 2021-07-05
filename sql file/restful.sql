-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2021 at 02:55 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restful`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `post_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `name`, `text`, `time`, `post_id`) VALUES
(1, 'Junak', 'Good Job!', '2021-07-04 21:18:49', 4),
(2, 'Bill Gates', 'Bump', '2021-07-04 22:44:00', 6),
(3, 'THOR ODINSON', 'Brother stop scaring the people', '2021-07-04 23:37:46', 6),
(4, 'chandamama', 'lol', '2021-07-05 00:54:06', 6);

-- --------------------------------------------------------

--
-- Table structure for table `feed`
--

CREATE TABLE `feed` (
  `post_id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feed`
--

INSERT INTO `feed` (`post_id`, `name`, `title`, `img`, `time`) VALUES
(3, 'IEEE BRACU', 'We are delighted to let you know that we have received registrations of 110 teams that consists of 250+ members altogether for Web Tech Hackathon 2021, making it one of the biggest online events from IEEE CS BRACU SBC.\r\n', 'https://scontent.fdac5-2.fna.fbcdn.net/v/t1.6435-9/195845775_940473083406940_1760213198426417523_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=qjZBs4s4PQcAX-n205U&_nc_ht=scontent.fdac5-2.fna&oh=db77cc1e73183e76334150d129c67120&oe=60E6F954', '2021-07-04 14:53:53'),
(4, 'S.M Shahriar', 'Instructor: S M Shahriar Islam who is currently working as a full time Data Engineer at Pathao.\r\nhttps://www.facebook.com/shariar.shudip\r\n', 'https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/193226820_937935346994047_7032189061487928067_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=asUACZe4yJQAX-dNjkw&_nc_ht=scontent.fdac5-1.fna&oh=fa44f62ddd40fd51671a10d2a34593a3&oe=60E5CB98', '2021-07-04 14:53:53'),
(6, 'LOKI', 'I, PRESIDENT LOKI ODINSON. KNEEL BEFORE ME, PEOPLE OF MIDGARD.', 'https://scontent.fjsr6-1.fna.fbcdn.net/v/t1.6435-9/154506724_2820668564811984_2890234983484547424_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=unDkViowuWoAX_UhdOo&_nc_ht=scontent.fjsr6-1.fna&oh=3d7a525a9d681c334954180e66196e32&oe=60E73AD5', '2021-07-04 17:21:54');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `user_id` int(255) NOT NULL,
  `firstName` varchar(15) NOT NULL,
  `lastName` varchar(15) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`user_id`, `firstName`, `lastName`, `gender`, `email`, `password`, `number`) VALUES
(4, 'Meherab', 'Kibria', 'm', 'junak@gmail.com', '$2b$10$ADJzWXDAdnHm.uDYnF8iTeYvpw7GhTR1YjG.EthiLLx2xU8fXtCSC', 1766615682),
(5, 'Ilmi', 'Tabassum', 'f', 'ilmi@gmail.com', '$2b$10$dcRx9ttO6rH69ugEx5CQEOmLfGB4wHvTMtC68.feoYyc/liYa21D2', 1703004419),
(10, 'John', 'Sina', 'Male', 'sina@yahoo.com', '$2b$10$Pff3UgkgC/PWiIR0hdbejOnZTVPxv9Uqg9iJIZF8IQlVonnP0DOsS', 1918775908),
(12, 'Mashrafee', 'Kibria', 'Male', 'mk@g.com', '$2b$10$5isFlaemENrKwmVo0hDQZ.j.4QCxBa4kNQRmWQaFjKwfCx3K3I4cO', 354395);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `feed`
--
ALTER TABLE `feed`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `feed`
--
ALTER TABLE `feed`
  MODIFY `post_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `user_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `feed` (`post_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
