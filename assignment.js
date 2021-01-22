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
    if((Math.round(watch)==watch)&&(Math.round(mobile)==mobile)&&(Math.round(laptop)==laptop)){
        if(watch>=0&&mobile>=0&&laptop>=0){
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



// ------------------------------------------------Hotel Cost-------------------------------------------


function hotelCost(days){
    if(Math.round(days)==days){
        if(days<0){
            return "Number of days must be a positive value";
        }
        else if(days<=10){
            const cost=days*100;
            return cost;
        }
        else if(days<=20){
            const cost10=10*100;
            const remainingDays=days-10;
            return cost10+ remainingDays*80;
        }
        else{
            const cost20= 10*100+10*80;
            const remainingDays= days-20;
            return cost20+remainingDays*50;
        }
    }
    else{
        return "Number of days must be an integer value";
    }
    
}




// ------------------------------------------------Mega Friend-------------------------------------------


function megaFriend(friends){
    if(friends.length==0){
        return "Please enter an array of your friends";
    }
    else{
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

console.log(kilometerToMeter(2.4));                                         //kilometer to meter
console.log(budgetCalculator(2,0,2));                                       //budget calculator

let resultCost=hotelCost(-13);
console.log(resultCost);                                                          //hotel cost

let friendsArray=["Abir","Rafiq salam","    Samsss                    ", "shanto","Faltu","Kalamu"];
console.log(megaFriend(friendsArray));                                      //mega friend