/**
 * Cifrario
 */

// DOM Element 
const cifratioStringDOMElement = document.getElementById('cifrarioString');
const cifrarioAnswerDOMElement = document.getElementById('cifrarioAnswer');

// Variables
const cifrarioString = 'marco';
const vowels = ["a", "e", "i", "o", "u"];
const cifrarioAnswer = changeStringToBatterfly(cifrarioString, vowels, "f");

cifratioStringDOMElement.innerHTML = cifrarioString;
cifrarioAnswerDOMElement.innerHTML = cifrarioAnswer;

// Function
function changeStringToBatterfly(stringToChange, arrayToSearch, x){
    let answer = stringToChange;
    let array = arrayToSearch;
    let letter = x;

    for(let i=0; i<array.length; i++){
        let searchValue = array[i];
        let newValue = searchValue + letter + searchValue;
        let res = answer.replaceAll(searchValue, newValue);
        answer = res;
    };
    return answer;
}

/**
 *  Stringa "infinita"
 */

// DOM Element
const infinityStringDOMElement = document.getElementById("infinityString");
const startInfinityStringDOMElement = document.getElementById("startInfinityString");
const endInfinityStringDOMElement = document.getElementById("endInfinityString");
const infinityStringAnswerDOMElement = document.getElementById("infinityStringAnswer");

// Variables
const string = "ABCDE";
const start = 13;
const end = 16;
let x = 100;

// Create string with length 'X'
let infinityString = string.repeat(x);

// Slice array width range of index
const slicedArray = infinityString.slice(start, (end + 1));

// Print to page
infinityStringDOMElement.innerHTML = string;
startInfinityStringDOMElement.innerHTML = start;
endInfinityStringDOMElement.innerHTML = end;
infinityStringAnswerDOMElement.innerHTML = slicedArray;

/**
 * Array facile
 */

// DOM Element 
const facileArrayDOMElement = document.getElementById('facileArray');
const facileArrayAnswerDOMElement = document.getElementById('facileArrayAnswer');

// Variables
const facileArray = [1,3,5,2,10,6,4,9];

const facileArrayAnswer = getEvenArray(facileArray);

// Print to page 
facileArrayDOMElement.innerHTML = "[" + facileArray + "]";
facileArrayAnswerDOMElement.innerHTML = "[" + facileArrayAnswer + "]";

// Function 
function getEvenArray(array){
    const newArray = [];
    array.forEach(isEven, newArray)
    return newArray;
}

function isEven(currentValue){
    let result = currentValue % 2;
    if(result == 0){
        this.push(currentValue);
    }
}

/**
 * Array medio
 */

// DOM Element 
const evenDOMElement = document.getElementById('even');
const oddDOMElement = document.getElementById('odd');
const medioArrayAnswerDOMElement = document.getElementById('medioArrayAnswer');

// Variables
array = [1,3,5,2,10,6,4,9]

evenDOMElement.addEventListener("click", function(){
    let isEvenValue = this.value;
    medioArrayAnswerDOMElement.innerHTML = "[" + getArrayWithOddOEvenNumber(array, isEvenValue) + "]";
} )

oddDOMElement.addEventListener("click", function(){
    let isEvenValue = this.value;
    medioArrayAnswerDOMElement.innerHTML = "[" + getArrayWithOddOEvenNumber(array, isEvenValue) + "]";
} )

// Function 
function getArrayWithOddOEvenNumber(array, isEvenValue){
    if(isEvenValue == true){
        return getEvenArray(array);
    } else {
        return getOddArray(array);
    }
}

function getOddArray(array){
    const newArray = [];
    array.forEach(isOdd, newArray)
    return newArray;
}

function isOdd(currentValue){
    let result = currentValue % 2;
    if(result > 0){
        this.push(currentValue);
    }
}


/**
 * Array medio 2 
 */

// DOM Element 
const medioArrayVersione2AnswerDOMElement = document.getElementById('medioArrayVersione2Answer');
const inputUserNumberDOMElement = document.getElementById('userNumber');
const btnControllUserNumberDOMElement = document.getElementById('btnControllUserNumber');

// Variables
let userNumber;
const medioArrayVersione2 = [1,3,5,2,10,6,4,9];


btnControllUserNumberDOMElement.addEventListener("click", function(){
    // get value to userNumber from select
    userNumber = inputUserNumberDOMElement.value;
    // get new array 
    const newArrayDivisibleNumber = getNewArrayContaineJustModulNumber(medioArrayVersione2, userNumber);
    // print to page result
    medioArrayVersione2AnswerDOMElement.innerHTML = "[" + newArrayDivisibleNumber + "]";
})

// Functione 
function getNewArrayContaineJustModulNumber(array, number){
    const newArray = array.filter(isDivisible, number);
    return newArray;
};

function isDivisible(currentValue){
    let result = currentValue / this;
    if(Number.isInteger(result)){
        return currentValue;
    }
};

/**
 * Difficile 
 */

// DOM Element
const difficileArrayAnswerDOMElement = document.getElementById('difficileArrayAnswer');

// Variables 
const arrayPersone = [
	{ name: "Marco", age: 22 },
	{ name: "Anna", age: 24 },
	{ name: "Luca", age: 17 },
	{ name: "Gianni", age: 53 }
];

// Sort array
const arrayPersoneSorted = arrayPersone.sort(function(a, b){return a.age-b.age});

// Trasform array of object to string 
let myString = JSON.stringify(arrayPersoneSorted);

// Print to page myString 
difficileArrayAnswerDOMElement.innerHTML = myString;