// let numhens = 5;
// console.log(numhens + 1)


// let username = "danny is a good boy";

// let favanimal = "Elephant";

// // indeces and lengths
// console.log(favanimal.length)
// console.log(username + " " + favanimal)
// console.log(username.toUpperCase())
// console.log(favanimal.slice(-1))
// console.log(username.replace("danny", "Chirag"))

// let networth = "20 Million Dollors";

// // Random Numers Math objects
// console.log(Math.PI)
// console.log(Math.floor(Math.random() * 6) + 20)
// console.log(`${username} ${favanimal}`)

// let rating = Math.floor(Math.random() * 5)
// if (rating === 3) {
//     console.log("Average Rating");
// } else if (rating === 4) {
//     console.log("Above Average");
// } else {
//     console.log("No Rating Found");
// }

// // let password = prompt("Enter A Password")
// // if (password.length>6 && password.indexOf(" ")=== -1){
// //     console.log("Password Acceptale");
// // }else if (!password){
// //     password = prompt("Enter A Password")
// // }

// // Arrays
let colors = ['red', 'blue', 'green', 'yellow', 'green'];

// colors[2] = "Hunter";
// // colors[6] = "Orange"
// colors.push("Pink", "Black", "Indigo", "Purple", "Brown", "Grey")
// colors.shift()
// colors.unshift("Violet")

// colors.reverse()
// let remove = colors.splice(2, 2)

// console.log(colors)

// // Objects and Literals
// const person = { first_name: "mick", last_name: "bangera" }
// console.log(person.first_name)

// // Fror Loops
// for (let i=1; i <=6; i++){
//     console.log("Da ba dee da ba daa")
// }

// // looping Over arrays
// // for (let i=0; i<colors.length; i++){
// //     console.log(i+1,colors[i])
// // }
// // //  reverse looping
// // for (let i = colors.length-1; i>=0; i--){
// //     console.log(colors[i].toUpperCase())
// // }

// // While Lools
// // let count = 0;
// // while(count<10){
// //     console.log(count++)
// // }
// // comp Guessing Game
// let target = Math.floor(Math.random()*10);
// tries =0
// while(true){
//     let computer = Math.floor(Math.random()*10)
//     if (computer===target){
//         console.log(`Computer guessed ${computer} Correct in ${tries} tries`)
//         break;
//     }
//     else{
//         console.log("Try Again.......");
//         tries++
//     }
// }

// // New For Loop
// for (let sub of colors){
//     console.log(sub)
// }

// chirag = {
//     "chirag":100,
//     "chirag1":100,
//     "chirag2":100,
//     "chirag3":100,
//     "chirag4":100
// }
// counter = 0
// for (let sub of Object.values(chirag)){
//     counter+=sub
// }
// console.log(counter)

// const todos = ["Cash 1", "Cash 2"]
// let input = prompt("What would you like to do: ")
// while(input!=='quit')

// Javasript Functio
let mess = "i hate rant"
function rant(message) {
    for (let i = 0; i<3;i++){
        console.log(message.toUpperCase())
    }
}
rant(mess)

function lastElement(arr){
    return arr.slice(-1);
}



function lastElement(arr){
    if (arr.length ===0){
        return null
    }
    else{
        return arr.slice(-1);
    }
    
}
const ne =  []
console.log(lastElement(ne))