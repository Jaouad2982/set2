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