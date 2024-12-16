
function bubble_sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }

    }
    return arr
}

console.log(bubble_sort([1, 2, 3, 4, 3, 7, 4, 3, 33, 21, 67, 11, 43, 26, 90]))


//Time complexity ==> O(n)
//Space complexity ==> O(1)
