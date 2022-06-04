let numhens = 5;
console.log(numhens + 1)


let username = "danny is a good boy";

let favanimal = "Elephant";

// indeces and lengths
console.log(favanimal.length)
console.log(username + " " + favanimal)
console.log(username.toUpperCase())
console.log(favanimal.slice(-1))
console.log(username.replace("danny", "Chirag"))

let networth = "20 Million Dollors";

// Random Numers Math objects
console.log(Math.PI)
console.log(Math.floor(Math.random() * 6) + 20)
console.log(`${username} ${favanimal}`)

let rating = Math.floor(Math.random() * 5)
if (rating === 3) {
    console.log("Average Rating");
} else if (rating === 4) {
    console.log("Above Average");
} else {
    console.log("No Rating Found");
}

let password = prompt("Enter A Password")
if (password.length>6 && password.indexOf(" ")=== -1){
    console.log("Password Acceptale");
}else if (!password){
    password = prompt("Enter A Password")
}





