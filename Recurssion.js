//simple example for recursion -->

function luch(person) {
    if (person == 8) return true  // Base case
    console.log(person)
    return luch(person + 1)
}

// console.log("output==>", luch(1))


//Conver a normal function into reccursive function 


function maultipy(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i]
    }
    return product
}

// console.log(maultipy([1, 2, 3, 4, 5]))


function maultipy(arr) {
    console.log(arr)
    if (arr.length <= 0) {
        return 1
    } else {
        return arr[arr.length - 1] * maultipy(arr.splice(0, arr.length - 1))
    }
}

// console.log(maultipy([1, 2, 3, 4]))



function factorial(n) {
    console.log(n)
    if (n <= 0) return 1
    return n * factorial(n - 1)
}

// console.log(factorial(5))


//Form an array in range of numbers ========================================================>

function rageOfNumbers(start, end) {
    let arr = [];
    while (start <= end) {
        arr.push(start);
        start++;
    }
    return arr; // Return the array
}

// console.log(rageOfNumbers(0, 5)); // This will log [0, 1, 2, 3, 4, 5]

function rageOfNumbers(start, end) {
    if (end < start) {
        return []
    } else {
        const number = rageOfNumbers(start, end - 1)
        number.push(end)
        return number
    }
}
// console.log(rageOfNumbers(1,7))

//==============================================================================================================


// ==> palindrome number  

//(With converting to string...)
function palindrome_number(num) {
    const str = num.toString();
    if (str.length === 1) return true
    if (str[0] !== str[str.length - 1]) {
        return false
    }

    return palindrome_number(str.slice(1, str.length - 1))

}

// console.log(palindrome_number(12132))

//Without converting to string..

function palindrome_number(num, temp = num, reversed = 0) {
    if (temp === 0) {
        return reversed === num;
    }
    reversed = reversed * 10 + (temp % 10);

    return palindrome_number(num, Math.floor(temp / 10), reversed)
}

// console.log(palindrome_number(121))

//===============================================================================================================================

//Fibinocci number ==> without recursion -- series / number both can be done wit this code 
function fibnocci(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr;  // arr[n] ==> give you the puticular number at (Fibanocci number)
}

// console.log(fibnocci(8))


//Using recursion

function fibReccursion(n) {
    if (n <= 1) return n;

    return fibReccursion(n - 1) + fibReccursion(n - 2)

}

// console.log(fibReccursion(8))



// series ==>

function fibSeries(n) {
    if (n < 0) return []; // Handle negative input
    if (n === 0) return [0]; // Handle base case for 0
    if (n === 1) return [0, 1]; // Handle base case for 1

    // Recursive call to get the series up to (n-1)
    const series = fibSeries(n - 1);

    // Append the next Fibonacci number to the series 
    series.push(series[series.length - 1] + series[series.length - 2]);

    return series;
}

// console.log(fibSeries(5)); // Output: [0, 1, 1, 2, 3, 5]


// =====================================================================================================


//REverse a string using recursion ---->

function stringReversal(str) {
    if (str.length === 0) {
        return ""
    } else {
        return stringReversal(str.substr(1)) + str.charAt(0);
    }
}

// console.log(stringReversal('suhail'))

//==========================================================================================================================
//Substring problem --> 

function subset(nums) {
    let result = []
    let temp = []

    function RecursiveSubset(nums, i) {
        if (i === nums.length) return result.push([...temp]);

        temp.push(nums[i])
        RecursiveSubset(nums,i+1)
        temp.pop()
        RecursiveSubset(nums,i+1)
    }

    RecursiveSubset(nums, 0)
    return result
}


console.log(subset([1,2,3]))


