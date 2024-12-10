function pascsl(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (char >= 'A' && char <= 'Z') {
            if (i > 0) {
                result += "_"
            }
            result += char.toLowerCase()
        } else {
            result += char
        }
    }
    return result
}

console.log(pascsl("suhailSubairAkk"))



function LogestWOrd(str) {
    let n = str.length;
    let current = ''
    let result = ''

    for (let i = 0; i < n; i++) {
        if(str[i] != ' '){
            current+=str[i]
        }else{
            if(current.length > result.length){
                result = current
            }
            current = ''
        }
    }
    if(current.length > result.length){
        result = current
    }

    return result
}

console.log(LogestWOrd('akku is a goooooooooood and charming boy in the world'))