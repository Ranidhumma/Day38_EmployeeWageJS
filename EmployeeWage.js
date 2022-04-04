/*
Calculating Wages till Number of Working Days or Total Working
Hours per month is Reached UC5
*/
const IS_ABSENT = 0 ;
const IS_PART_TIME = 1 ;
const IS_FULL_TIME = 2 ;
const PART_TIME_HOURS = 4 ;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20 ; 
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160 ;

function getWorkHrs(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;

        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;

        default:
            return 0;
    }
}

let totalempHrs = 0;
let totalWorkingDays = 0;
while (totalempHrs <= MAX_HRS_IN_MONTH &&
        totalWorkingDays < NUM_OF_WORKING_DAYS){
            totalWorkingDays++;
let empCheck = Math.floor(Math.random() * 10) % 3;
totalempHrs += getWorkHrs(empCheck);
}
let empWage = totalempHrs * WAGE_PER_HOUR;
console.log("Total Days:"+totalWorkingDays + " Total Hour: " +totalempHrs+ " Emp Wage: " + empWage);


 