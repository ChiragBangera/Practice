
// const req = new XMLHttpRequest();

// req.onload = ()=>{
//     console.log("It Loaded");
//     console.log(this);
// };

// req.onerror = ()=>{
//     console.log('Error');
//     console.log(this);
// };


// req.open('GET','https://swapi.dev/api/people');
// req.send();


// fetch('https://swapi.dev/api/people')
//     .then(res=>{
//         console.log('Resolved',res)
//         return res.json()
//     })
//     .then(data=>{
//         console.log('Data here',data.results)
//     })
//     .catch(e=>{
//         console.log('Error!!!',e)
//     })


const loaddata = async ()=>{
    try{
        const res = await axios.get('https://swapi.dev/api/people/1/')
        console.log(res.data)
    }
    catch(e){
        console.log('ERROR',e)
    }  
};

loaddata();

const ul = document.querySelector('#jokes')
const button = document.querySelector('button')
const getdadjoke = async ()=>{
    const config =  {
        headers:{
            Accept:'application/json'
        }
    }
    const res = await axios.get('https://icanhazdadjoke.com/',config)
    console.log(res.data.joke)
    const newli = document.createElement('li')
    newli.append(res.data.joke)
    ul.append(newli)
}

button.addEventListener('click',()=>{
    getdadjoke()
})
