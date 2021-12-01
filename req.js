//Connect to database
const { resolveInclude } = require("ejs");
var mysql = require("mysql");
const { end } = require("./db_connect");
var db_connect = require("./db_connect");

var prereqChain1 = ["MATH 150A", "MATH 150B", "MATH 262", "MATH 482"];
var Courses_taken = [];
// var lastcourse;
for (const Cno of prereqChain1) {
  //   var Cno = prereqChain1[i].substring(5, prereqChain1[i].length);
  //console.log(Cno);
  //   var Cno = element;
  let sqll =
    "SELECT Grade FROM practice.CourseCompletedByStudent WHERE StudentId = '200507859' AND Department = 'MATH' AND CourseNumber = '" +
    Cno +
    "';";
  db_connect.query(sqll, (err, Courses_taken) => {
    if (err) throw err;
    //     console.log(result);
    if (Courses_taken === null) {
      //       lastcourse = i;
      //       return lastcourse;
      console.log("No Course to display");
    } else {
      if (
        Courses_taken === "A" ||
        "A-" ||
        "B+" ||
        "B" ||
        "B-" ||
        "C+" ||
        "C" ||
        "IP"
      ) {
        // Courses_taken = result;
        // console.log(result[0])
        console.log(Courses_taken);
        //console.log(result.length);
        // i++;
      }
    }
  });
}
for (let i = 0; i < Courses_taken.length; i++) {
  console.log(Courses_taken);
}
// for (var i = 0; i < prereqChain1.length; i++) {}
// console.log(lastcourse);
db_connect.end();
//console.log(prereqChain1[lastCourse + 1]);
