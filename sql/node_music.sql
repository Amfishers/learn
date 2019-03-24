/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50546
Source Host           : localhost:3306
Source Database       : node_music

Target Server Type    : MYSQL
Target Server Version : 50546
File Encoding         : 65001

Date: 2017-11-20 14:20:21
*/

SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS `node_music`;
CREATE DATABASE `node_music`;
USE node_music;



-- ----------------------------
-- Table structure for musics
-- ----------------------------
DROP TABLE IF EXISTS `musics`;
CREATE TABLE `musics` (
  `title` varchar(50) DEFAULT NULL,
  `singer` varchar(50) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `filelrc` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of musics
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(80) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
