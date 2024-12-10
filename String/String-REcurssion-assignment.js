//RECURSIVELY REMOVE A CHAR FROM THE STRING....

function recursiveCharremove(str, char) {
    if (str === "") {
        return ""
    } else if (str[0] === char) {
        return recursiveCharremove(str.slice(1), char)
    } else {
        return str[0] + recursiveCharremove(str.slice(1), char)
    }
}

  console.log(recursiveCharremove("malayalam" , "a"))

//===========================================================================================================
//REVERE STRING - RECURSION 
function stringReversal(str) {
    // console.log(str)
    if (str.length === 1) {
        return str
    }
    return stringReversal(str.substr(1)) + str.charAt(0);
}
  console.log(stringReversal("suhail"))


//===========================================================================================================
// PALINDROME NUMBER - RECURSION
function palindromeNUmber(n) {
    let str = n.toString()
    // console.log(str)
    if (str.length === 1) return true
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    return palindromeNUmber(str.slice(1, str.length - 1))
}

  console.log(palindromeNUmber(121))
//===========================================================================================================
//PALINDROME STRING - RECCURSION
function plaindrome_string(str) {
    console.log(str)
    if (str.length === 1) return true
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    return palindromeNUmber(str.slice(1, str.length - 1))
}

console.log(plaindrome_string("malayalam"))

//===========================================================================================================
//Factrorial --RECURSION

function factorial(n) {
    if (n <= 0) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))

//===========================================================================================================

//FIND - STRING LENGTH - RECURSION
function find_length(str) {
    if (str === "") return 0
    return 1 + find_length(str.substr(1))
}

console.log(find_length("suhail"))


//===========================================================================================================

//FIRST UNIQUE LETTER --->
function firstUniqueLetter(str) {
    const count = {}
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === 1) {
            return str[i]
        }
    }
    return null
}

console.log(firstUniqueLetter("malayalam"))


//===========================================================================================================

function firstUNiqueElementArry(arr) {
    let count = {}
    for (const x of arr) {
        count[x] = (count[x] || 0) + 1
    }
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]] === 1 && arr[i] % 2 == 0) {
            return arr[i]
        }
    }
    return -1
}

console.log(firstUNiqueElementArry([1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 7, 8, 9,]))

//===========================================================================================================

//PRINT - NUMBERS RECURSION

function printNumbersRecursively(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbersRecursively(n, current + 1);
}


console.log(printNumbersRecursively(5))