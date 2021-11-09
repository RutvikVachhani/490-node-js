const fs = require('fs');
const pdf = require('pdf-parse');
var database = require('./db_connect');
//Connect to database
var mysql = require('mysql');
 
let dataBuffer = fs.readFileSync('/Users/hrithik/Desktop/CSUN/Fall21/COMP490/DRPs/Rutvik.pdf');
 
pdf(dataBuffer).then(function(data) {

    const pdf = data.text;
    var PatternStudentId = new RegExp(/\d{9}/);
    
    const StudentId = pdf.match(PatternStudentId);

    console.log(StudentId);
    
    //console.log(pdf);
    //Student Id insert
    var sql = "INSERT INTO Student (StudentId) VALUES ("+StudentId+")";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    });
});   

//con.end(function(err) {
    // The connection is terminated now
    //});