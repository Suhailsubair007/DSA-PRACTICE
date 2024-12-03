// Reverse a string ===========================>

function revereString(str) {
    let string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string
}

// console.log(revereString('suhail'))


//Palindrome =====================================>

function Palindrome(str) {
    let string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    if (string === str) {
        return true
    } else {
        return false
    }
}

// console.log(Palindrome('malayalam'))

//Palindrome using TWo pointer =========================>


function palindromeUsingTwoPointer(str) {
    let left = 0;
    let right = str.length - 1

    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

// console.log(palindromeUsingTwoPointer('hahahah'))


//Find the first non-repeating character in a string.==========>

function firstUniqueCharacter(str) {
    let count = {}
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (count[str[i]] === 1) {
            return str[i]
        }
    }
    return null
}

// console.log(firstUniqueCharacter('akkukuttannti'))



//Count the numbers of vowels in the string===========>

function Vowels(str){
    let vowels = 'aeiouAEIOU'
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])) count++
    }
    return count;
}

// console.log(Vowels('aeioudfsdsddfasdfsdfsdfdsaaaaaaaa'))


function compressString(str) {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            count++;
        }else{
            result += str[i] + count;
            count = 1;
        }
        
    }
    return result.length < str.length ? result : str;
}


// console.log(compressString('aaabbbdswwww'))

