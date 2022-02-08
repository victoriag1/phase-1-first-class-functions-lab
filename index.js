const firstTwoDrivers = ["Sally", "Bob"]
const lastTwoDrivers = ["Freddy" , "Claudia"]

const returnFirstTwoDrivers = function returnFirstTwoDrivers(){
    return firstTwoDrivers
}
const returnLastTwoDrivers = function returnLasTwoDrivers(){
    return lastTwoDrivers
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
console.log(selectingDrivers)

function fareDoubler(fare){
    return fare * 2
}
function fareTripler(fare) {
    return fare *3
}

function createFareMultiplier(){
    return function(){
        return 5*5
    }
}
 
function selectDifferentDrivers(){
    return function(){
}
}
     
    