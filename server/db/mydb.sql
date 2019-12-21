-- select * from mydb
CREATE TABLE if not exists `demo`.`mydb` (
  `idmydb` INT NOT NULL,
  `mydbcol` VARCHAR(45) BINARY NULL,
  PRIMARY KEY (`idmydb`));
   INSERT  INTO  mydb  Values ( '13','Admin' )