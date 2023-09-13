// 11. Implement a function to find the first non-repeating character in a string.
// function firstNonRepeatingCharacter(str) {
// // Implementation here

// }
// // Test cases
// console.log(firstNonRepeatingCharacter(&quot;programming&quot;)); // &quot;r&quot;
// console.log(firstNonRepeatingCharacter(&quot;aabbcc&quot;)); // null
// console.log(firstNonRepeatingCharacter(&quot;abcdef&quot;)); // &quot;a&quot;


function firstNonRepeatingCharacter(str) {
const charCount = new Map();

  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char; 
    }
  }
  return null;
}

console.log(firstNonRepeatingCharacter("programming"));
console.log(firstNonRepeatingCharacter("aabbcc"));
console.log(firstNonRepeatingCharacter("abcdef")); 



// 12. Write a function that flattens a nested object, preserving the keys.
// function flattenObject(obj) {
// // Implementation here
// }
// // Test case
// const nestedObject = {
// a: 1,
// b: { c: 2, d: { e: 3, f: 4 } },
// g: 5,
// };
// console.log(flattenObject(nestedObject));
// // Output: { &#39;a&#39;: 1, &#39;b.c&#39;: 2, &#39;b.d.e&#39;: 3, &#39;b.d.f&#39;: 4, &#39;g&#39;: 5 }

function flattenObject(obj, parentKey = '') {
  let result = {};

  for (const key in obj) {
    const currentKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      const nested = flattenObject(obj[key], currentKey);
      result = { ...result, ...nested };
    } else {
      result[currentKey] = obj[key];
    }
  }

  return result;
}


const nestedObject = {
  a: 1,
  b: { c: 2, d: { e: 3, f: 4 } },
  g: 5,
};

console.log(flattenObject(nestedObject));


// 13. Create a function to find the median of two sorted arrays.
// function findMedianSortedArrays(nums1, nums2) {
// // Implementation here
// }
// // Test cases
// console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
// console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5

function findMedianSortedArrays(nums1, nums2) {
  
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  const length = mergedArray.length;
  

  if (length % 2 === 0) {
    
    const mid1 = mergedArray[length / 2 - 1];
    const mid2 = mergedArray[length / 2];
    return (mid1 + mid2) / 2.0;
  } else {
  
    return mergedArray[Math.floor(length / 2)];
  }
}


console.log(findMedianSortedArrays([1, 3], [2])); 
console.log(findMedianSortedArrays([1, 2], [3, 4])); 



// 14. Write a function to convert a Roman numeral to an integer.

// function romanToInteger(s) {
// // Implementation here
// }
// // Test cases
// console.log(romanToInteger(&quot;III&quot;)); // 3
// console.log(romanToInteger(&quot;IV&quot;)); // 4
// console.log(romanToInteger(&quot;IX&quot;)); // 9
// console.log(romanToInteger(&quot;LVIII&quot;)); // 58


function romanToInteger(s) {
  const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;
  let prevValue = 0;

for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanValues[s[i]];

if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

 
    prevValue = currentValue;
  }

  return result;
}


console.log(romanToInteger("III")); 
console.log(romanToInteger("IV")); 
console.log(romanToInteger("IX")); 
console.log(romanToInteger("LVIII")); 


// 15.Implement a function to reverse words in a sentence without reversing the characters within
// each word.
// function reverseWords(sentence) {
// // Implementation here
// }
// // Test cases
// console.log(reverseWords(&quot;Hello World&quot;)); // &quot;World Hello&quot;
// console.log(reverseWords(&quot;The quick brown fox&quot;)); // &quot;fox brown quick The&quot;


function reverseWords(sentence) {
  const words = sentence.split(" ");
  
  const reversedWords = words.reverse();
  

  const reversedSentence = reversedWords.join(" ");
  
  return reversedSentence;
}


console.log(reverseWords("Hello World"));
console.log(reverseWords("The quick brown fox")); 



// 16 .Write a function to calculate the sum of all multiples of 3 or 5 below a given number.
// function sumMultiplesOf3And5(limit) {
// // Implementation here
// }
// // Test cases
// console.log(sumMultiplesOf3And5(10)); // 23 (3 + 5 + 6 + 9)
// console.log(sumMultiplesOf3And5(20)); // 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)

function sumMultiplesOf3And5(limit) {
  let sum = 0;

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumMultiplesOf3And5(10)); 
console.log(sumMultiplesOf3And5(20));


// 17. Implement a function that removes duplicates from an array without using built-in functions
// or additional data structures.
// function removeDuplicates(arr) {

// // Implementation here
// }
// // Test cases
// const originalArray = [1, 2, 2, 3, 4, 4, 5];
// removeDuplicates(originalArray);
// console.log(originalArray); // [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        
        arr.splice(j, 1);
        j--;
      }
    }
  }
}
const originalArray = [1, 2, 2, 3, 4, 4, 5];
removeDuplicates(originalArray);
console.log(originalArray); 


// 18. Implement a function to check if a given number is a perfect number (sum of its divisors
// excluding itself equals the number).
// function isPerfectNumber(num) {
// // Implementation here
// }
// // Test cases
// console.log(isPerfectNumber(6)); // true (1 + 2 + 3 = 6)
// console.log(isPerfectNumber(28)); // true (1 + 2 + 4 + 7 + 14 = 28)
// console.log(isPerfectNumber(12)); // false

function isPerfectNumber(num) {
  if (num <= 0) {
    return false;
  }

  let sum = 0;

  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum === num;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12));


// 19. Create a function to find the intersection of two sorted arrays, allowing for duplicate
// elements.
// function intersectWithDuplicates(arr1, arr2) {
// // Implementation here
// }
// // Test cases
// console.log(intersectWithDuplicates([1, 2, 2, 3], [2, 2, 3, 4])); // [2, 2, 3]
// console.log(intersectWithDuplicates([3, 4, 2, 1, 5], [1, 3, 2])); // [3, 2, 1]

function intersectWithDuplicates(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
console.log(intersectWithDuplicates([1, 2, 2, 3], [2, 2, 3, 4]));
console.log(intersectWithDuplicates([3, 4, 2, 1, 5], [1, 3, 2]));


// 20. Implement a function to check if a given Sudoku board is valid.
// function isValidSudoku(board) {
// // Implementation here

// }
// // Test case
// const sudokuBoard = [
// [&quot;5&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
// [&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;,&quot;9&quot;,&quot;5&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;],
// [&quot;.&quot;,&quot;9&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;],
// [&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;3&quot;],
// [&quot;4&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;3&quot;,&quot;.&quot;,&quot;.&quot;,&quot;1&quot;],
// [&quot;7&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;6&quot;],
// [&quot;.&quot;,&quot;6&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;2&quot;,&quot;8&quot;,&quot;.&quot;],
// [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;4&quot;,&quot;1&quot;,&quot;9&quot;,&quot;.&quot;,&quot;.&quot;,&quot;5&quot;],
// [&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;.&quot;,&quot;8&quot;,&quot;.&quot;,&quot;.&quot;,&quot;7&quot;,&quot;9&quot;]
// ];
// console.log(isValidSudoku(sudokuBoard)); // true


function isValidSudoku(board) {

  function hasDuplicates(arr) {
    const set = new Set();
    for (const num of arr) {
      if (num !== "." && set.has(num)) {
        return true;
      }
      set.add(num);
    }
    return false;
  }

  for (const row of board) {
    if (hasDuplicates(row)) {
      return false;
    }
  }

  for (let col = 0; col < 9; col++) {
    const column = [];
    for (let row = 0; row < 9; row++) {
      column.push(board[row][col]);
    }
    if (hasDuplicates(column)) {
      return false;
    }
  }
  for (let rowStart = 0; rowStart < 9; rowStart += 3) {
    for (let colStart = 0; colStart < 9; colStart += 3) {
      const subgrid = [];
      for (let row = rowStart; row < rowStart + 3; row++) {
        for (let col = colStart; col < colStart + 3; col++) {
          subgrid.push(board[row][col]);
        }
      }
      if (hasDuplicates(subgrid)) {
        return false;
      }
    }
  }

  return true;
}

const sudokuBoard = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(sudokuBoard));
