// Merge sort -->

function merge_sort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)

    let left = merge_sort(arr.slice(0, mid))
    let right = merge_sort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    let sorted = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
}


console.log(merge_sort([2, 5, 7, 8, 23, 41, 6, 22, 99, 54, 78, 18, 90]));


//Time complexity --> O(nlogn)
//Space complexity --> O(n)

