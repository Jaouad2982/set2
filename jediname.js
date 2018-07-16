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
            return word[4]
            break;
        default:
            return " ";
    }
}

