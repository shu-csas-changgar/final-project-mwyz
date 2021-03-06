-- MySQL Script generated by MySQL Workbench
-- Sun Apr 28 15:44:17 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema abc
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema abc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `abc` DEFAULT CHARACTER SET utf8 ;
USE `abc` ;

-- -----------------------------------------------------
-- Table `abc`.`DeviceAssignment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`DeviceAssignment` (
  `DeviceID` INT NOT NULL,
  `OfficeID` INT NULL,
  `Floor` INT NULL,
  `EmployeeID` INT NULL,
  `Updated` datetime NULL,
  PRIMARY KEY (`DeviceID`),
  UNIQUE INDEX `Device ID_UNIQUE` (`DeviceID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`DeviceTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`DeviceTypes` (
  `DeviceTypeID` INT NOT NULL auto_increment,
  `DeviceType` VARCHAR(45) NULL,
  `Updated` datetime NULL,
  PRIMARY KEY (`DeviceTypeID`),
  UNIQUE INDEX `idDevice Types_UNIQUE` (`DeviceTypeID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`Devices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`Devices` (
  `DeviceID` INT NOT NULL auto_increment,
  `DeviceTypeID` VARCHAR(45) NULL,
  `Leased` VARCHAR(45) BINARY NULL,
  `EmployeeID` INT NOT NULL,
  `Updated` datetime NULL,
  PRIMARY KEY (`DeviceID`),
  UNIQUE INDEX `Device ID_UNIQUE` (`DeviceID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`Employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`Employee` (
  `EmployeeID` INT NOT NULL auto_increment,
  `FirstName` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `PhoneNumber` VARCHAR(45) NOT NULL,
  `OfficeID` INT NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `CityID` VARCHAR(45) NOT NULL,
  `CountryID` VARCHAR(45) NOT NULL,
  `Updated` datetime NULL,
  PRIMARY KEY (`EmployeeID`),
  UNIQUE INDEX `Employee ID_UNIQUE` (`EmployeeID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`Inventory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`Inventory` (
  `DeviceTypeID` INT NOT NULL auto_increment,
  `Stock` INT NULL,
  `Required` INT NULL,
  `Updated` datetime NULL,
  PRIMARY KEY (`DeviceTypeID`),
  UNIQUE INDEX `DeviceType ID_UNIQUE` (`DeviceTypeID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`Office`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`Office` (
  `OfficeID` INT NOT NULL auto_increment,
  `Address` VARCHAR(45) NOT NULL,
  `CityID` VARCHAR(45) NOT NULL,
  `CountryID` VARCHAR(45) NOT NULL,
  `Updated` datetime NULL,
  PRIMARY KEY (`OfficeID`),
  UNIQUE INDEX `Office ID_UNIQUE` (`OfficeID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `abc`.`Vendor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `abc`.`Vendor` (
  `VendorID` INT NOT NULL auto_increment,
  `Name` VARCHAR(45) NOT NULL,
  `DeviceID` INT NULL,
  `StartDate` DATE NULL,
  `ExpiryDate` DATE NULL,
  `Updated` datetime NULL,
  PRIMARY KEY (`VendorID`),
  UNIQUE INDEX `Vendor ID_UNIQUE` (`VendorID` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `abc`.`City`(
	`CityID` INT NOT NULL auto_increment,
    `Name` VARCHAR(45) NOT NULL,
    `Zipcode` VARCHAR(45) NOT NULL,
    `Updated` datetime NULL,
    PRIMARY KEY (`CityID`),
  UNIQUE INDEX `City ID_UNIQUE` (`CityID` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `abc`.`Country`(
	`CountryID` INT NOT NULL auto_increment,
    `Name` VARCHAR(45) NOT NULL,
    `Updated` datetime NULL,
    PRIMARY KEY (`CountryID`),
  UNIQUE INDEX `Country ID_UNIQUE` (`CountryID` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `abc`.`Reservation` (
  `DeviceID` INT NOT NULL,
  `OfficeID` INT NULL,
  `DeviceType` VARCHAR(45) NOT NULL,
  `EmployeeID` INT NULL,
  `Time` DATETIME NOT NULL,
  `Duration` INT NOT NULL,
  `Availability` BOOLEAN, 
  `Updated` datetime NULL,
  PRIMARY KEY (`DeviceID`),
  UNIQUE INDEX `Device ID_UNIQUE` (`DeviceID` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `abc`.`Maintenance` (
  `CaseID` INT NOT NULL auto_increment,
  `DeviceID` INT NOT NULL,
  `OfficeID` INT NULL,
  `DeviceType` VARCHAR(45) NOT NULL,
  `EmployeeID` INT NULL,
  `Problem` TEXT NOT NULL,
  `Component` VARCHAR(45) NOT NULL,
  `Price` FLOAT4 NOT NULL, 
  `Updated` datetime NULL,
  PRIMARY KEY (`CaseID`),
  UNIQUE INDEX `Device ID_UNIQUE` (`DeviceID` ASC) VISIBLE)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
