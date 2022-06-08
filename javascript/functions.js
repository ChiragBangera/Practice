// Scope
const swrt = function(x,y) {
    return x**y
}

console.log(swrt(2,5)) 


const math = {
    arraysum(num) {
        let count = 0
        for (let i of num){
            count+=i
        }
        return count
    }   
}

const scores = [1,12,2,23,3,45,56,6,56]

const data = math.arraysum(scores)

console.log(data)
// let count = 0
// for (let i of scores){
//     count += i
// }
// console.log(count)

const cat ={
    name:"senti",
    obs:"yes",
    strong:"yes",
    breed:"Persian",
    meow(){
        console.log(this.breed)
    }
}
cat.meow()

const hen = {
    name:'Helen',
    eggCount:0,
    layAnEgg(){
        this.eggCount++
        console.log('EGG')
    }
}

console.log(hen.name)
hen.layAnEgg()
hen.layAnEgg()
console.log(hen.eggCount)


const numbers = [2,7,11,15]
const target = 9

for (const[index,num] of numbers.entries()){
    console.log(index,num)
}