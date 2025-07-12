CREATE DATABASE skillsync;
USE skillsync;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(100),
  description TEXT,
  category VARCHAR(50),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE swaps (
  id INT AUTO_INCREMENT PRIMARY KEY,
  skill_id INT,
  swap_with_skill_id INT,
  status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending'
);
