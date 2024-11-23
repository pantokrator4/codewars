/*
arr = [3,5];
function sumArray(array) {
  if (array) {
  let sum = 0;
  const sorted = array.sort(function (a, b) {
  return a - b;
});
  sorted.shift();
  sorted.pop();
  for (let num of sorted) {
    sum += num
  }
  return sum
} else return 0;
}
console.log(sumArray(arr))
*/

/*
var min = function(list){
  const sorted = list.sort(function (a, b) {
return a - b;
});
  return sorted[0];
};
var max = function(list){
const sorted = list.sort(function (a, b) {
return a - b;
})
  return sorted[sorted.length - 1];
};
*/

/*
function countBy(x, n) {
  let z = [];
  z.push(x);
  while (z.length < n){
    z.push(x+z[z.length -1])
  };
  return z;
}
*/

/*
function shortcut (string) {
  const regex = /[a,e,i,o,u]/g
  return string.replace(regex, '');
}
shortcut('hello')
*/

/*
function getChar(c){
  return String.fromCharCode(c)
}
*/

/*
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return 'drink toddy';
  } else if (old < 18) {
    return 'drink coke';
  } else if (old < 21) {
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
}
*/

/*
function xor(a, b) {
  if (a !== b) {
    return  true
  } else {
    return false
  }
}
console.log(xor(true,true))
*/

/*
function getRealFloor(n) {
  if (n < 0) {
    return n
  } else if (n < 13) {
    return n-1
  } else {
    return n-2
  }
}
console.log(getRealFloor(5))
*/

/*
function getRealFloor(n) {
  if (n<0) {
    return n
  } else return n < 13 ? n - 1 : n-2
}
console.log(getRealFloor(-5))
*/

/*
const distinct = (a) => {
return [...new Set(a)]
}
console.log(distinct([1,2,3,4,5,6,6,6]))
*/

/*
const dub = (a) => {
  const arr = [];
  for (let i = 0; i < a.length; i++) {
    if (!arr.includes(a[i])) {
      arr.push(a[i]);
    } else {
      return poped = arr.pop(a[i]);
    };
  };
 };
console.log(dub([1,2,2]))
*/


/*
function pipeFix(numbers){
  arr = [];
  for (let i = numbers[0]; i < numbers[numbers.length-1] + 1; i++) {
    arr.push(i);
  };
  return arr;
};
console.log(pipeFix([1,2,3,12]))
/*

//const addFive = (num) => num + 1

//const problem = (x) => typeof x === 'number' ? x * 50 + 6 : "Error"
//console.log(problem(5))


/*
function nameShuffler(str){
  const splited = (str.split(' '));
  [splited[0], splited[splited.length - 1]] = [splited[splited.length - 1], splited[0]];
  return splited.join(' ');
}
console.log(nameShuffler('john McClane'))
*/


// const stringy = (size) => size % 2 === 0 && size !== 0 ? '10'.repeat(size / 2) : '10'.repeat(size / 2) + 1;

/*
function divisibleBy(numbers, divisor){
  arr = [];
  for ( const num of numbers) {
  if (num % divisor === 0) {
    arr.push(num)
    };
  };
  return arr;
};
*/

/*
function plural(n) {
  return n !== 1? true : false
}
*/

/*
function howManyLightsabersDoYouOwn(name) {
  obj = {Adam: 0, Zach: 18}
  return obj.name || 0
}
console.log(howManyLightsabersDoYouOwn(Zach))
*/

/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  met() {
   console.log(`${this.name + "s"} age is ${this.age}`)
  }
}

let john = new Person('john', 34)
john.met()
*/

/*
function mergeArrays(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  const dublic = [...new Set(newArr)]
  return dublic.sort((a,b) => a-b)
};
*/

// Grasshopper - If/else syntax debug

//const checkAlive = (health) => health > 0 ? true : false;

// Capitalization and Mutability

//const capitalizeWord = word => `${word[0].toUpperCase()}${word.substring(1)}`;

/*
Multiplication table for number

function multiTable(n) {
  let result = '';
  for (let i = 1; i <= 10; i++) {
    result += `${i} * ${n} = ${n * i}`;
    if (i < 10) {
      result += '\n';
    }
  }
  return result;
}
*/

/*
My head is at the wrong end!

const fixTheMeerkat = arr => [arr[0],arr[1], arr[arr.length -1]] = [arr[arr.length -1],arr[1], arr[0]];
*/

/*
Welcome to the City

const sayHello = ( name, city, state ) => {
  return `Hello, ${name.join(' ')}, Welcome to ${city}, ${state}!`
}
*/
/*
Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  const count = [];
  let plus = 0;
  const result = [];

 if (input && Array.isArray(input) && input.length !== 0) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count.unshift(input[i]);
      } else {
        plus += input[i];
      }
    }
    result.push(plus);
    result.unshift(count.length);
    return result;
  } else {
    return count;
  }
}
*/

/*
Hex to Decimal

const hexToDec = hexString => parseInt(hexString, 16)
*/

/*
Sort and Star

function twoSort(s) {
  return s.sort()[0].split("").join("***")
}
*/
/*
Remove exclamation marks
function removeExclamationMarks(s) {
  const regex = /[!]/g;
  return s.replace(regex, "");
}
*/

/*
function getDrinkByProfession(param){
  
  const obj ={
    "jabroni": "Patron Tequila",
    "school counselor":	"Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member":"Moonshine",
    "politician": "Your tax dollars",
    "rapper":"Cristal"
  }
  return obj[param.toLowerCase()] || "Beer"
  }
*/

/*
function remove (string) {
  return string.replace(/!$/, "");
}
*/

/*function onesComplement(n) {
  const arr = n.split('')
  const newArr = [];
  for (const i of arr) {
    if ( i == '1') {
      newArr.push('0')
    } else if ( i == '0') {
      newArr.push('1')
    }
  }
  return newArr.join('')
};
*/

/*
Reverse words
const reverseWords = str => {
  const reversed = str.split('').reverse().join('');
  return reversed.split(' ').reverse().join(' ');
};
*/

/*

 var capitals = function (word) {
  let result = [];
	const str = word.toUpperCase();
  for ( let i=0; i < word.length ; i++) {
    if ( word [i] === str [i] )
      result.push(i)
  }
  return result
};
*/ 


//twoOldestAges = ages => [...ages].sort((a,b) => a-b).slice(-2);

//var replaceDots = str => str.replace(/\./g, "-");

/*

function sumOrProduct(array, n) {
  const a = [...array].sort((a,b) => a-b).slice(0,n)
  const b = [...array].sort((a,b) => a-b).slice("-"+n)
  return a.reduce((acc, current) => acc * current, 1) == b.reduce((acc, current) => acc + current) ? "same" 
  : a.reduce((acc, current) => acc * current, 1) > b.reduce((acc, current) => acc + current) ? "product" : "sum"
};
*/

//TODO Expected: 'and apparently apparentlybutactuallynot voilewtfman', instead got: 'and apparentlybutactuallynot voilewtfman'
/*
function apparently(string) {
  const regex = /\b(and|but)\b(?! apparently)/g
  if (string.match(regex)) {
    return string.replace(regex, "$1 apparently")
  } else {
    return string
  }
}
*/

/*
Number of Decimal Digits
const digits = n => n.toString().length
*/

/*
Gravity Flip
const flip=(d, a)=>{
  return d === "R" ? a.sort((a,b) => a-b) : a.sort((a,b) => a-b).reverse()
*/

/*
Sum of Minimums!
function sumOfMinimums(arr) {
  let sum = 0;
  const index = 0;
  const newArr = arr.map((a) => a.sort((a,b) => a-b ))
  for ( let i = 0; i < newArr.length; i++) {
    sum += newArr[i][index]
  }
  return sum
}
*/

/* 
Alternate capitalization
function capitalize(s){
  const arr = s.split("");
  const lower = arr.map((value, index) => index % 2 == 0? value.toUpperCase() : value).join('')
  const upper = arr.map((value, index) => index % 2 == 0? value : value.toUpperCase()).join('')
  return [lower, upper]
}
*/

/*
Bin to Decimal
function binToDec(bin) {
  return parseInt(bin, 2);
}
*/

/*
Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const newArr =[]
  for ( let i = 0; i < birds.length; i++) {
    if (
      geese[0] !== birds[i] 
      && geese[1] !== birds[i] 
      && geese[2] !== birds[i]
      && geese[3] !== birds[i]
      && geese[4] !== birds[i]
    ) {
      newArr.push(birds[i])
    }
  }
  return newArr
};
*/