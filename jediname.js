function jediName(firstName,lastName){
    firstName = firstName.slice(0,2);
    lastName = lastName.slice(0,3);
    return firstName + lastName;
}

console.log(jediName('jedi','name'));


function beyond(num){
    let value = " ";
    if(num === Infinity){
        value = " Infinity ";
    }else if(num > 0){
        value = "bigger than 0";
    }else if (num < 0 ){
        value ="less than 0"
    }else if (num === 0){
        value = "equal to 0";
    }
    return value;
}

let myval = beyond(12);
console.log(myval);


// not all months are displayed in this function. but the same procedure would work for all of them.
// we can also use an array. or put all the months ( case ['january','december',' .....', ' .......'......]);
function checkMonth(month,year){
    let day = 0;

    switch(month){
        case 'January':
        case 'march':
        case 'may':
        day = 31;
        break ;
        case 'February':
        day = 28;
        break;
        day = 0 ;
        break;
    }
    return day;


}

let varia = checkMonth('January',true);
console.log("there are " + varia + " days");

// 'craft block argon meter bells brown croon droop'.
//'a' = 2, 'b' = 3, 'c' = 4, or 'd' = 5
// cycle is l

/*
function decode(sentence) {
    let array = sentence.split(" ");
    for (let i = 0; i < array.length; i++) {

    }
    // check what each word starts with, replace based on what it starts with
    // return the tied back array

}
*/

function decode(word) {
    switch(word[0]) {
        case "a":
            return word[1];
            break;
        case "b":
            return word[2];
            break;
        case "c":
            return word[3];
            break;
        case "d":
            return word[4];
            break;
        default:
            return " ";
    }
}


function daysInMonth (month, leapYear) {
    if (leapYear && month === "February") {
        return 29;
    }
    switch(month) {
        case "January", "March", "May", "July", "August", "October", "December": 
            return 31;
            break;
        case "April", "June", "September", "November":
            return 30;
            break;
        case "February":
            return 28;
            break;
        default:
            return "Not a month";
    }
}
console.log(daysInMonth("December", true));

function rockPaperScissors(number) {
    console.log(number);
    if (number !== 1 && number!== 2 && number !== 3) {
        throw new Error("Not a valid number");
    }
    const randomNo = Math.floor(Math.random() * 3) + 1;
    console.log(randomNo);
    if (randomNo === number) {
        return "It's a tie!"
    } else if (number === 1 && randomNo === 2 || number === 2 && randomNo === 3 || number === 3 && randomNo === 1) {
        return "You win!"
    } else if (randomNo === 1 && number === 2 || randomNo === 2 && number === 3 || randomNo === 3 && number === 1) {
        return "The computer wins!"
    }

}

console.log(rockPaperScissors(1));
