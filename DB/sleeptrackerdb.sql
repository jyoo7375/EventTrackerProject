-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sleeptrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sleeptrackerdb` ;

-- -----------------------------------------------------
-- Schema sleeptrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sleeptrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `sleeptrackerdb` ;

-- -----------------------------------------------------
-- Table `sleepTracker`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sleepTracker` ;

CREATE TABLE IF NOT EXISTS `sleepTracker` (
  `id` INT NOT NULL,
  `name` VARCHAR(2000) NULL)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS sleeptracker@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'sleeptracker'@'localhost' IDENTIFIED BY 'sleeptracker';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'sleeptracker'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `sleepTracker`
-- -----------------------------------------------------
START TRANSACTION;
USE `sleeptrackerdb`;
INSERT INTO `sleepTracker` (`id`, `name`) VALUES (1, 'Username');

COMMIT;

