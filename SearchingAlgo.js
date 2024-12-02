function LeniarSearch(nums,target){

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target){
            return i
        }
    }
    return -1;
}

console.log(LeniarSearch([1,2,3,4,5,6,7,8,9] , 5))

//Time complexity ==> O(n)
//Space complexity ==>O(1)