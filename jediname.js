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
