const req = new XMLHttpRequest();

req.onload = ()=>{
    console.log("It Loaded");
    console.log(this);
};

req.onerror = ()=>{
    console.log('Error');
    console.log(this);
};


req.open('GET','https://swapi.dev/api/people');
req.send();


fetch('https://swapi.dev/api/people')
    .then(res=>{
        console.log('Resolved',res)
        return res.json()
    })
    .then(data=>{
        console.log('Data here',data.results)
    })
    .catch(e=>{
        console.log('Error!!!',e)
    })


const loaddata = async ()=>{
    try{
        const res = await fetch('https://swapi.dev/api/people')
    const data = await res.json()
    console.log(data)
    }
    catch(e){
        console.log('ERROR',e)
    }
    
}

loaddata()

