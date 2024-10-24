function myLeap(year){
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                return "Leap year";
            }
            else {
                return "not a leap year";
            }
        }
        else{
            return " leap year";
        }
    }
    else {
        return "not a leap year";
    }
}
var LPYR=myLeap(2000);
console.log(LPYR);