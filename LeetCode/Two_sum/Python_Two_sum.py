
import numbers


numbers = [2,7,11,15]
target = 9
def twoSum(nums: list[int], target: int) -> list[int]:
    mem = {}
    for index,num in enumerate(nums):
        number = target - num 
        if number in mem.keys():
            return [mem[number],index]
        else:
            mem[num] = index

            
twoSum(numbers,target)


