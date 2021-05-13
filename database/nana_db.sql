-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2021 at 10:07 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nana_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `videoId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `contentId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `contentData` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `contentTimeStamp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`videoId`, `contentId`, `contentData`, `contentTimeStamp`) VALUES
('10235f84-4f88-4138-8776-9a2459a4653c', '65a99184-314e-457f-9ac6-328f61369491', 'Friends, it’s true: the end of the decade approaches. It’s been a difficult, anxiety-provoking, morally compromised decade, but at least it’s been populated by some damn fine literature. We’ll take our silver linings where we can.\r\n\r\nSo, as is our hallowed duty as a literary and culture website—though with full awareness of the potentially fruitless and endlessly contestable nature of the task—in the coming weeks, we’ll be taking a look at the best and most important (these being not always the same) books of the decade that was.', 0);

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `videoId` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `videoTitle` varchar(125) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `videoCreatedDate` datetime NOT NULL DEFAULT current_timestamp(),
  `videoUpdatedDate` timestamp NOT NULL DEFAULT current_timestamp(),
  `videoPathAudio` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `videoPathVideo` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `videoPathImage` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `videoStatus` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`videoId`, `videoTitle`, `videoCreatedDate`, `videoUpdatedDate`, `videoPathAudio`, `videoPathVideo`, `videoPathImage`, `videoStatus`) VALUES
('10235f84-4f88-4138-8776-9a2459a4653c', 'demo4', '2021-05-12 10:11:53', '2021-05-12 03:11:53', 'D:\\intership\\audio\\xx.mp4', 'D:\\intership\\video', 'D:\\intership\\image', 'Done'),
('1cac8eb9-c660-45d7-9c91-1003a3f1adaa', '', '2021-05-13 09:34:29', '2021-05-13 02:34:29', '', '', '', ''),
('4bc44c16-0355-4b71-ae05-a5f5f78e4f2e', 'demo', '2021-05-12 10:09:47', '2021-05-12 03:09:47', 'D:\\intership\\audio', 'D:\\intership\\video', 'D:\\intership\\image', 'New'),
('63f46759-9da6-4977-9cbd-add7dcb269af', 'demo3', '2021-05-12 10:11:53', '2021-05-12 03:11:53', 'D:\\intership\\audio', 'D:\\intership\\video', 'D:\\intership\\image', 'Processing'),
('8b1bfe05-b54f-4d04-abed-c10ac43adda3', '', '2021-05-13 09:34:52', '2021-05-13 02:34:52', '', '', '', ''),
('b89605b8-b631-4257-ae37-8b22dad1591b', '', '2021-05-13 00:54:03', '2021-05-12 17:54:03', '', '', '', ''),
('cbe3ef1a-5b8b-48c9-98b8-3faa657a37c3', 'demo2', '2021-05-12 10:09:47', '2021-05-12 03:09:47', 'D:\\intership\\audio\r\n', 'D:\\intership\\video', 'D:\\intership\\image', 'New'),
('d4d09b8c-34e9-4464-bbbb-784a24beddfe', '', '2021-05-13 00:46:23', '2021-05-12 17:46:23', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`videoId`,`contentId`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`videoId`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `content`
--
ALTER TABLE `content`
  ADD CONSTRAINT `VIDEOID_FRKEY` FOREIGN KEY (`videoId`) REFERENCES `video` (`videoId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
