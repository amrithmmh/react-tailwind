var moment = require('moment');
var resultArray = [];

var util = {};

/** 
 * input:
 *   month [Number]
 * output:
 *   totalDays [String]
 */
util.getDaysOfMonth = function(month){
  month = +month;
  var totalDays = '31';

  if( /[469]|(11)/.test(month) ){
    totalDays = '30';
  } else if (month === 2) {
    totalDays = moment().isLeapYear() ? '29' : '28';
  }

  return totalDays;
}

// Get current month of the year
var month = moment().get('month') + 1;

// current year
var year  = moment().get('year');
var days  = util.getDaysOfMonth(month);
for(var i = 1; i <= days; i++) {
  var str = month + '/' + i + '/' + year;
  resultArray.push(str);
}