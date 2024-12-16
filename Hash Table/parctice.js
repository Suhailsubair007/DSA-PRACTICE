function calculateFrequencyWithMap(arr) {
    const frequencyMap = new Map();

    for (const element of arr) {
        if (frequencyMap.has(element)) {
            frequencyMap.set(element, frequencyMap.get(element) + 1);
        } else {
            frequencyMap.set(element, 1);
        }
    }

    return frequencyMap;
}

console.log(calculateFrequencyWithMap([1,2,3,4,5,6,1,2,3,8,9,0]))