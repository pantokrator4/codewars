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