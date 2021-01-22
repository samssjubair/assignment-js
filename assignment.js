// https://github.com/samssjubair/assignment-js


// ------------------------------------------------Kilometer To Meter--------------------------------------------------


function kilometerToMeter(km){
    if(km>=0){                                              
        return km*1000;
    }
    else{
        return "Kilometer (Distance) must be a positive numeric value";
    }
}


// ------------------------------------------------Budget Calculator-------------------------------------------------------



function budgetCalculator(watch,mobile,laptop){
    if((Math.round(watch)==watch)&&(Math.round(mobile)==mobile)&&(Math.round(laptop)==laptop)){          //checks all values are integer
        if(watch>=0&&mobile>=0&&laptop>=0){                                                               //checks all values are positive
            return (watch*50)+(mobile*100)+(laptop*500);
        }
        else{
            return "Enter positive value for watch,mobile and laptop";
        }
    }
    else{
        return "Number of watch, mobile and laptop shouldn't be fraction"
    }
    
    
}



// ------------------------------------------------Hotel Cost-----------------------------------------------------------


function hotelCost(days){
    if(Math.round(days)==days){                                   //checks whether the given value is integer or not  
        if(days<0){                                               //if the given value is positive
            return "Number of days must be a positive value";
        }
        else if(days<=10){                                        //if number of days less or equal than 10
            const cost=days*100;
            return cost;
        }
        else if(days<=20){                                        //if the number of days is between 10 to 20
            const cost10=10*100;
            const remainingDays=days-10;
            return cost10+ remainingDays*80;
        }
        else{                                                     //if number of days greater than 20
            const cost20= 10*100+10*80;
            const remainingDays= days-20;
            return cost20+remainingDays*50;
        }
    }
    else{                                                          //if the given value is a fraction
        return "Number of days must be an integer value";
    }
    
}




// ------------------------------------------------Mega Friend-------------------------------------------


function megaFriend(friends){
    if(friends.length==0){                              //if the given parameter is null array
        return "Please enter an array of your friends";
    }
    else{                                               //if the given parameter is finite array
        let mega= friends[0].trim();
        for(let i=0;i<friends.length;i++){
            let friend=friends[i].trim();
            if(mega.length<friend.length){
                mega=friend;
            }

         }
        return mega;
    }
}






// ------------------------------------------------Function Calling-----------------------------------------------------

console.log(kilometerToMeter(4));                                            //kilometer to meter
console.log(budgetCalculator(2,0,2));                                           //budget calculator

let resultCost=hotelCost(-13);
console.log(resultCost);                                                        //hotel cost

let friendsArray=["Abir","Rafiq salam","    Samsss                    ", "shanto","Faltu","Kalamu"];
console.log(megaFriend(friendsArray));                                           //mega friend