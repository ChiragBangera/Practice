const numbers = [2,7,11,15]
const target = 9
// Two sum Not sorted
// function twosum(nums,target) {
//     const mem = {}
//     for (const[index,num] of nums.entries()){
//         number = target-num
//         if (number in mem){
//             return [mem[number],index];
//         }
//         else{
//             mem[num] = index
//         }
//     }
// };

// Two Sum Sorted
function twosum(nums,target) {
    const condition = nums.filter(n=>{
       return n<target
    })
    const mem = {}
    for (const[index,num] of condition.entries()){
        number = target-num
        if (number in mem){
            return [mem[number],index];
        }
        else{
            mem[num] = index
        }
    }
};

console.log(twosum(numbers,target))