// https://github.com/samssjubair/assignment-js

// ------------------------------------------------Kilometer To Meter-------------------------------------------

function kilometerToMeter(km){
    if(km>=0){
        return km*1000;
    }
    else{
        return "Kilometer (Distance) must be a positive value";
    }
}


// ------------------------------------------------Budget Calculator-------------------------------------------

function budgetCalculator(watch,mobile,laptop){
    if(watch>=0&&mobile>=0&&laptop>=0){
        return (watch*50)+(mobile*100)+(laptop*500);
    }
    else{
        return "Enter valid value for watch,mobile and laptop";
    }
}
// ------------------------------------------------Hotel Cost-------------------------------------------
function hotelCost(days){
    if(days<0){
        return "Number of days must be a positive value";
    }
    else if(days<=10){
        var cost=days*100;
        return cost;
    }
    else if(days<=20){
        var cost10=10*100;
        var remainingDays=days-10;
        return cost10+ remainingDays*80;
    }
    else{
        var cost20= 10*100+10*80;
        var remainingDays= days-20;
        return cost20+remainingDays*50;
    }
}






// ------------------------------------------------Function Checker-------------------------------------------

console.log(kilometerToMeter(-2));
console.log(budgetCalculator(2,0,-1));
console.log(hotelCost(-2));