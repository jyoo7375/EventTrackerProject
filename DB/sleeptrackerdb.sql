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
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL,
  `name` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sleep_log`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sleep_log` ;

CREATE TABLE IF NOT EXISTS `sleep_log` (
  `id` INT NOT NULL,
  `user_id` INT NULL,
  `date` DATE NULL,
  `bed_time` DATETIME NULL,
  `wake_time` DATETIME NULL,
  `notes` TEXT NULL,
  `tiredness` SMALLINT NULL,
  `user_id1` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id1`),
  INDEX `fk_sleep_log_user_idx` (`user_id1` ASC) VISIBLE,
  CONSTRAINT `fk_sleep_log_user`
    FOREIGN KEY (`user_id1`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `sleeptrackerdb`;
INSERT INTO `user` (`id`, `name`) VALUES (1, 'Jay');

COMMIT;

