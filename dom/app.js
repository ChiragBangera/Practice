// for (let i=0;i<100;i++){
//     const container = document.querySelector('#container')
//     const button = document.createElement('button')
//     button.innerText = 'Hey'
//     container.appendChild(button)
// }


// const adjcontainer = function(){
//     const select = document.querySelector('#container')
//     const cont = document.createElement('div')
//     cont.className = 'container'
//     select.insertAdjacentElement('afterend',cont)
// }

// adjcontainer()


function colorGenerator() {
    const r = Math.floor(Math.random()*255) +1
    const g = Math.floor(Math.random()*255) +1
    const b = Math.floor(Math.random()*255) +1
    const color = [`rgb(${r},${g},${b})`,`${r},${g},${b}`]
    return color;
} 



function total(list) {
    tot = 0
    for (no of list){
        const nos = parseInt(no)
        tot+=nos   
    }
    return tot
}


const button = document.querySelector('.btn1');
const h1 = document.querySelector('h1');

button.addEventListener('click', ()=>{
    newColor = colorGenerator()
    document.body.style.backgroundColor = newColor[0]
    h1.innerText = newColor[0]
    list = newColor[1].split(',')
    const tots = total(list)
    console.log(tots)
    if (tots<100){
        h1.style.color = "rgb(51, 255, 87)"
    }else{
        h1.style.color = "rgb(0, 0, 0)"
    }

})

const btts = document.querySelectorAll('#container_1 button')

btts.forEach(but=>{
    but.addEventListener('click',colorize)
})

function colorize() {
    this.style.backgroundColor = colorGenerator()[0];
}


const input = document.querySelector('input');
input.addEventListener('keydown',(e)=>{

    console.log(e['key'],e['code'])
})


const form = document.querySelector('#shelter');
const inpt = document.querySelector('#user');
const newli = document.querySelector('#cats');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = form.elements.naam.value
    const tweet =  form.elements.comment.value
    console.log(name,tweet)
    addTweet(name,tweet)
    form.elements.naam.value = ""
    form.elements.comment.value = ""
})

function addTweet(usrname, tweet) {
    const newlist = document.createElement('li')
    const btag = document.createElement('b')
    btag.append(usrname)
    btag.append(tweet)
    newlist.append(`User: ${usrname} - Tweeted: ${tweet}`)
    newli.append(newlist)
}

