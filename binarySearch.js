let nums = [-1,0,3,5,9,12]
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid = Math.floor((left + right) / 2)
    console.log(mid)

    while(left <= right){
        if(nums[mid] === target){
            return mid
        } else if(nums[mid] < target){
            left = mid + 1
        } else {
            right = mid - 1
        }
        mid = Math.floor((left + right) / 2)
    }
    return -1  
};

console.log(search(nums, 9))