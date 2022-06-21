const fake_request = (url)=>{
    return new Promise((resolve,reject)=>{
        const rand = Math.random();
        setTimeout(()=>{
            if (rand<.7){
                resolve("Your fake Data")
            }
            reject("ERROR")
        },1500)
    })
}


fake_request('/dogs/1')
    .then((data) => {
        console.log("Done with the data", data);
    })
    .catch((err)=>{
        console.log(err)
    })

const changeColor = (color,time)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve()
        },time)
    })
}


changeColor('red',1000)
    .then(()=>{
        return changeColor('orange',1000)
    })
    .then(()=>{
        return changeColor('grey',1000)
    })
    .then(()=>{
        return changeColor('deeppink',1000)
    })
    .then(()=>{
        return changeColor('yellow',1000)
    })
    .catch(()=>{
        console.log('Error')
    })



const login = async (username,password)=>{
    if (!username||!password) throw 'missing credentials'
    if (password==='Chirag') return 'Welcome'
    throw 'Invalid PassWord'
}

login('Bangera','Chirag')
    .then(msg=>{
        console.log('Logged In')
        console.log(msg)
    })
    .catch(err=>{
        console.log('ERROR')
        console.log(err)
    })