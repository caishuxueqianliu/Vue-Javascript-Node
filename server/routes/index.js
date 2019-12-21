var express = require('express');
var router = express.Router();
var connection=require('../db/sql.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list', function(req, res, next) {
 res.setHeader("Access-Control-Allow-Origin", "*");
 // res.json({
 // 	a:1,
 // 	b:2
 // })
connection.query("select * from mydb",function(error,results,fields){
	// res.json(res)
	console.log(error)
})
});

module.exports = router;
// select * from demo.mydb
//  CREATE  TABLE if not exists mydb
//     ( UserName  Varchar(40)  Primary  Key,
//       Pwd  Varchar(40)  NOT  NULL,
//       EmpName  Varchar(40) 
//      );
//      INSERT  INTO  mydb  Values ( 'Admin','Admin','Admin' )
// select * from mydb
// CREATE TABLE if not exists `demo`.`mydb` (
//   `idmydb` INT NOT NULL,
//   `mydbcol` VARCHAR(45) BINARY NULL,
//   PRIMARY KEY (`idmydb`));
//    INSERT  INTO  mydb  Values ( '1','Admin' )