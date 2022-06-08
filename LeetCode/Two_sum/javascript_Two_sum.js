const numbers = [2,7,11,15]
const target = 9

function twosum(nums,target) {
    const mem = {}
    for (const[index,num] of nums.entries()){
        number = target-num
        if (number in mem){
            return [mem[number],index];
        }
        else{
            mem[num] = index
        }
    }
};

twosum(numbers,target)