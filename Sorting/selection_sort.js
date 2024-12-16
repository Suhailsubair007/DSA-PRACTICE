const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min !== i){
            [arr[i] , arr[min]] = [arr[min] , arr[i]]
        }
    }
    return arr
}

console.log(selection_sort([1,2,3,4,1,7,6,44,23,9,12,54,23,67,12,11,33]))

