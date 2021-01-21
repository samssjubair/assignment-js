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







// ------------------------------------------------Function Checker-------------------------------------------

console.log(kilometerToMeter(-2));
console.log(budgetCalculator(2,0,-1));