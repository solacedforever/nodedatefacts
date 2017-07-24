const chalk = require('chalk');
var moment = require('moment');
// moment().format();
let line4 = "";

if (moment().isDST()) {
    line4 = "is"
}else{
    line4 = "is not";
}

  let line5 = "";
  if (moment().isLeapYear()){
    line5 = "is";
  }else{
    line5 = "is not";
  }


function dateFactor (){
  console.log('It is ' + chalk.blue(`${moment()})`)+".");
  console.log(`It is` + chalk.magenta(` ${moment().dayOfYear()}th`) + " day of the year." );
  console.log('It is' + chalk.green(`${moment().unix(Number)}`) + "seconds into the day.");
  console.log('It'+ chalk.green(` ${line4}`) + " during daylight savings time.") ;
  console.log('It' + chalk.red(` ${line5}`) + " a leap year."  ) ;
}
dateFactor () ;
